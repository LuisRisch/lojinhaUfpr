import React, { useState } from "react";
import { View, TouchableOpacity, FlatList, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const ChatScreen = () => {
  const [text, setText] = useState("");
  const [chatList, setChatList] = useState([
    {
      id: 0,
      title: "Camisa Athletico",
      product: {
        picture: {
          url:
            "https://eskanteiostore.com.br/wp-content/uploads/2019/06/d672d25c.jpg",
        },
      },
      last_message: {
        day: "19/05/2020",
        hour: "13:00",
      },
    },
    {
      id: 1,
      title: "Camisa Paraná",
      product: {
        picture: {
          url:
            "https://static3.tcdn.com.br/img/img_prod/311840/camisa_parana_clube_anos_90_retro_52260_4_20200706110802.jpg",
        },
      },
      last_message: {
        day: "19/05/2020",
        hour: "13:00",
      },
    },
  ]);

  const renderChatList = ({ item }) => (
    <View style={styles.chatHolder}>
      <View>
        <Image
          style={styles.avatar}
          source={{ uri: item.product.picture.url }}
        />
        <View style={styles.dot} />
      </View>
      <TouchableOpacity style={styles.centerTextHolder}>
        <Text style={styles.chatTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.content} numberOfLines={1}>
          Sim! Por correio :)
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

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="align-left" size={20} color="#c4c4c4" />
        </TouchableOpacity>
        <Text style={styles.title}>Chat</Text>
      </View>
      <FlatList
        data={chatList}
        renderItem={renderChatList}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatScreen;
