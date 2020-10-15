import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, FlatList, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

import api from "../../services/api";

import styles from "./styles";

const ChatScreen = ({ navigation }) => {
  const { data: user, token } = useSelector((state) => state.user);
  const [chatList, setChatList] = useState([]);

  const loadChats = async () => {
    const response = await api
      .get(`/chats/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => alert(err.response.data.error));

    if (response) {
      setChatList(response.data);
    }
  };

  useEffect(() => {
    loadChats();
  }, []);

  const handleChat = (id) => {
    navigation.navigate("ChatScreen", { chatID: id });
  };

  const renderChatList = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.chatHolder}>
        <TouchableOpacity onPress={() => handleChat(item._id)}>
          <Image
            style={styles.avatar}
            source={{ uri: item.product ? item.product.picture.url : null }}
          />
          <View style={styles.dot} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerTextHolder}
          onPress={() => handleChat(item._id)}
        >
          <Text style={styles.chatTitle} numberOfLines={1}>
            {item.product.title}
          </Text>
          <Text style={styles.content} numberOfLines={1}>
            {item.last_message.content}
          </Text>
          <Text style={styles.subText} numberOfLines={1}>
            Lucas Cassilha
          </Text>
        </TouchableOpacity>
        <View style={styles.rightTextHolder}>
          <Text style={styles.rightBoxText}>{item.last_message.day}</Text>
          <Text style={styles.rightBoxText}>{item.last_message.hour}</Text>
          <TouchableOpacity style={{ alignItems: "flex-end", marginTop: 5 }}>
            <Icon name="ellipsis-h" size={20} color="#c4c4c4" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="align-left" size={20} color="#c4c4c4" />
        </TouchableOpacity>
        <Text style={styles.title}>Chat</Text>
      </View>
      <FlatList
        data={chatList}
        renderItem={renderChatList}
        keyExtractor={(item) => item._id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatScreen;
