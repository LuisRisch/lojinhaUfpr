import React, { useState, useEffect, useMemo } from "react";
import { View, TouchableOpacity, FlatList, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";

import { io } from "../../services/socket";
import Colors from "../../data/Colors";
import CustomTextInput from "../../components/CustomInputs";

import {
  chatLeave,
  chatSave,
  newMessage,
} from "../../store/modules/chat/actions";

import api from "../../services/api";

import styles from "./styles";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Mplus-semi": require("../../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    "Mplus-bold": require("../../assets/fonts/MPLUSRounded1c-Bold.ttf"),
  });

const ChatScreen = ({ route, navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { chatID } = route.params;
  const { data: user, token } = useSelector((state) => state.user);
  const messageList = useSelector((state) => state.chat.messages);

  const [focused, setFocused] = useState(false);
  const [connected, setConnected] = useState(false);

  const dispatch = useDispatch();

  const [userType, setUserType] = useState("buyer");

  const [text, setText] = useState("");

  const loadChat = async () => {
    const response = await api
      .get(`/chat/${chatID}/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) =>
        Alert.alert(
          "Ocorreu um erro ao buscar esse chat!",
          err.response.data.error
        )
      );

    if (response) {
      if (response.data.buyer._id != user._id) {
        setUserType("seller");
      }
      dispatch(chatSave(response.data.messages, response.data._id));
    }
  };

  useEffect(() => {
    loadChat();

    io.emit("join_room", chatID);

    return () => {
      io.emit("disconnect");
      setConnected(false);
    };
  }, []);

  const onChangeText = (EnteredText) => {
    setText(EnteredText);
  };

  const submitMessage = async () => {
    if (text.length >= 1) {
      const messageObj = {
        content: text,
        sent_by: userType,
        id: (messageList.length + 1).toString(),
        room: chatID,
      };

      dispatch(newMessage(messageObj));
      setText("");

      io.emit("message", { room: chatID, message: text, sent_by: userType });

      await api
        .put(
          "/chat",
          {
            message: text,
            sent_by: userType,
            user: user._id,
            chat: chatID,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) =>
          Alert.alert(
            "Ops...Ocorreu um erro ao enviar sua mensagem!",
            err.response.data.error
          )
        );
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
  if (fontsLoaded) {
    return (
      <View style={styles.screen}>
        <FlatList
          data={messageList}
          renderItem={RenderMessage}
          keyExtractor={(item) => item.id}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          inverted
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
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default ChatScreen;
