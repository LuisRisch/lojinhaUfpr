import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomIcon from "../../components/CustomIconButton";
import { useSelector, useDispatch } from "react-redux";
import { chatLeave } from "../../store/modules/chat/actions";

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

const ChatScreen = ({ navigation }) => {
  const { data: user, token } = useSelector((state) => state.user);
  const excluded = useSelector((state) => state.excludedData.chats);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [chatBuyList, setBuyList] = useState([]);
  const [chatSellList, setSellList] = useState([]);
  const [buyingListActive, setListActive] = useState(true);

  const loadChats = async () => {
    setLoading(true);
    const excludedList = [];
    if (excluded != 0) {
      excluded.map((item) => excludedList.push(item.id));
    }
    console.log(excludedList);
    if (user.student) {
      const seller = await api
        .post(
          `/chats/${user._id}`,
          {
            exclude: excludedList,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              selling: true,
            },
          }
        )
        .catch((err) =>
          Alert.alert(
            "Ocorreu um erro ao buscar suas informações!",
            err.response.data.error
          )
        );

      if (seller) {
        setSellList(seller.data);
      }
    }
    const buyer = await api
      .post(
        `/chats/${user._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            buying: true,
          },
        }
      )
      .catch((err) =>
        Alert.alert(
          "Ocorreu um erro ao buscar suas informações",
          err.response.data.error
        )
      );

    if (buyer) {
      setBuyList(buyer.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadChats();
  }, []);

  const handleChat = (id, title, url) => {
    navigation.navigate("ChatScreen", {
      chatID: id,
      product: title,
      url,
    });
  };

  const popUpMenuHandler = () => {
    setpopUpMenu(true);
    setTimeout(() => {
      setpopUpMenu(false);
    }, 10000);
  };

  const onIconPress = (index) => {
    const list = [...chatList];
    list.slice(index, 1);
    setChatList(list);
  };

  const renderChatList = ({ item, index }) => {
    return (
      <View style={styles.chatHolder}>
        <TouchableOpacity
          onPress={() =>
            handleChat(
              item._id,
              item.product.title,
              item.product.picture[0].url
            )
          }
        >
          <Image
            style={styles.avatar}
            source={{ uri: item.product ? item.product.picture[0].url : null }}
          />
          <View style={styles.dot} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerTextHolder}
          onPress={() =>
            handleChat(
              item._id,
              item.product.title,
              item.product.picture[0].url
            )
          }
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
          {open ? (
            <View style={{ alignItems: "flex-end" }}>
              <CustomIcon onPress={() => onIconPress(index)} />
            </View>
          ) : (
            <TouchableOpacity
              style={{ alignItems: "flex-end", marginTop: 5 }}
              onPress={popUpMenuHandler}
            >
              <Icon name="ellipsis-h" size={20} color="#c4c4c4" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const handleListSwitch = () => {
    if (!user.student) {
      return Alert.alert(
        "Infelizmente você não pode fazer isso.",
        "Apenas estudantes da UFPR podem anunciar produtos!"
      );
    }
    setListActive(!buyingListActive);
  };

  const ChatScreens = ["Minhas vendas", "Minhas compras"];
  const ChatScreensComponent = (item, index) => (
    <View style={{ flex: 1 }}>
      <Text style={styles.ChatTypes}>
        {index === 0 ? "Minhas vendas" : "Minhas compras"}
      </Text>
    </View>
  );

  if (fontsLoaded) {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="align-left" size={20} color="#c4c4c4" />
          </TouchableOpacity>
          <Text style={styles.title}>Chat</Text>
        </View>
        <TouchableOpacity onPress={handleListSwitch}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "ralway-regular-semi",
              marginBottom: 10,
            }}
          >
            {buyingListActive ? "Ver minhas vendas" : "Ver minhas compras"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.ChatTypes}>
          {buyingListActive ? "Minhas compras" : "Minhas vendas"}
        </Text>

        {buyingListActive ? (
          <FlatList
            data={chatBuyList}
            renderItem={renderChatList}
            keyExtractor={(item) => item._id}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            refreshing={loading}
            onRefresh={loadChats}
          />
        ) : (
          <FlatList
            data={chatSellList}
            renderItem={renderChatList}
            keyExtractor={(item) => item._id}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            refreshing={loading}
            onRefresh={loadChats}
          />
        )}
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default ChatScreen;
