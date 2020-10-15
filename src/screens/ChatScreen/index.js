import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../data/Colors";
import CustomTextInput from "../../components/CustomInputs";

import { useSelector } from "react-redux";

import api from "../../services/api";

import styles from "./styles";

const ChatScreen = ({ route }) => {
  const { chatID } = route.params;
  const { data: user, token } = useSelector((state) => state.user);

  const [userType, setUserType] = useState("buyer");

  const [text, setText] = useState("");
  const [MessageList, setMessageList] = useState([
    {
      id: 0,
      content:
        "Bem vindo ao chat da lojinha! Tome cuidado com quais informações com quais informações compartilhar!",
      sent_by: "chat",
    },
    {
      id: 1,
      content: "Bom dia!",
      sent_by: "buyer",
      day: "18/09/2020",
      hour: "13:00",
    },
    {
      id: 2,
      content: "Boa tarde!",
      sent_by: "seller",
      day: "18/09/2020",
      hour: "13:00",
    },
  ]);

  const loadChat = async () => {
    const response = await api
      .get(`/chat/${chatID}/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => alert(err.response.data.error));

    if (response) {
      if (response.data.buyer._id != user.id) {
        setUserType("seller");
      }
      setMessageList(response.data.messages);
    }
  };

  useEffect(() => {
    console.log(chatID);
    loadChat();
  }, []);

  const onChangeText = (EnteredText) => {
    setText(EnteredText);
  };

  const submitMessage = async () => {
    if (text.length >= 1) {
      const messages = [...MessageList];
      const messageObj = {
        content: text,
        sent_by: userType,
        id: messages.length + 1,
      };
      messages.push(messageObj);
      setMessageList(messages);
      setText("");

      await api
        .put(
          "/chat",
          {
            message: text,
            sent_by: userType,
            user: user.id,
            chat: chatID,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => alert(err.response.data.error));
    }
    // console.log(MessageList);
    // console.log(MessageList.length)
  };

  const RenderMessage = ({ item }) => {
    let messageStyle = {};
    let textStyle = {};
    let subTextViewStyle = {};

    if (userType === item.sent_by) {
      messageStyle = styles.userMessage;
      textStyle = styles.userTextStyle;
      subTextViewStyle = styles.userSubTextView;
    } else {
      messageStyle = styles.personMessage;
      textStyle = styles.personTextStyle;
      subTextViewStyle = styles.personSubTextView;
    }

    if (item.sent_by === "chat") {
      messageStyle = styles.chatMessage;
      textStyle = styles.chatTextStyle;
    }

    return (
      <View>
        <View style={messageStyle}>
          {item.sent_by === "chat" ? (
            <Icon name="warning" color={Colors.mainRed} size={18} />
          ) : null}
          <Text style={textStyle}>{item.content}</Text>
        </View>
        {item.sent_by === "chat" ? null : (
          <View style={subTextViewStyle}>
            <Text style={styles.subTextStyle}>{item.day}</Text>
            <Text style={styles.subTextStyle}>{item.hour}</Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={MessageList}
        renderItem={RenderMessage}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.inputView}>
        <CustomTextInput
          hintText="Digite alguma mensagem..."
          onChangeText={(text) => onChangeText(text)}
          value={text}
        />
        <TouchableOpacity onPress={submitMessage} style={styles.submitButton}>
          <Icon name="paper-plane" color="#fff" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
