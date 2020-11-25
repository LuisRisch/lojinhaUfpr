import React, { useState } from "react";
import { View, Text, Image, Dimensions, ScrollView, Alert } from "react-native";
import { useSelector } from "react-redux";
import Spacing from "../../data/Spacing";
import CustomButton from "../../components/CustomButtons";
import { Styles } from "./styles";
import api from "../../services/api";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Style } from "../UserPage/styles";
import { styles } from "../../components/CustomInputs/Styles";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Colors from "../../data/Colors";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Mplus-semi": require("../../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    "Mplus-bold": require("../../assets/fonts/MPLUSRounded1c-Bold.ttf"),
  });

const ConfirmAnnouncement = ({ navigation, route }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currCircle, setCurrCircle] = useState(0);

  const { item: product, categoryLabel } = route.params;
  const images = [...product.picture];
  const { data: user, token } = useSelector((state) => state.user);
  const height = Dimensions.get("window").height;

  const ClosePage = () => {
    navigation.goBack();
  };

  const handleChat = async () => {
    const data = {
      user: user._id,
      product: product._id,
      seller: product.user._id,
    };

    let errorStatus = 0;

    const response = await api
      .post("/chat", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        if (err.response.data.error === "Chat já criado!") {
          navigation.navigate("ChatList");
        } else {
          Alert.alert("Ops... ocorreu um erro!", err.response.data.error);
        }
      });

    if (response.status === 200) {
      navigation.navigate("ChatScreen", {
        chatID: response.data._id,
        title: product.title,
      });
    }
  };

  const HandleScroll = (event) => {
    const VIEW_SIZE = event.nativeEvent.layoutMeasurement.width;
    const CONTENT_OF_SET = event.nativeEvent.contentOffset.x;
    const SELECTED_INDEX = Math.round(CONTENT_OF_SET / VIEW_SIZE);
    setCurrCircle(SELECTED_INDEX);
  };

  const HandleImagePressed = (params) => {
    navigation.navigate("FullScreenImage", { params: params });
  };

  const content = (
    <View style={Styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={Styles.header}
          onPress={() => navigation.navigate("MainProducts")}
        >
          <Text style={Styles.textCategoryStyle}>
            {"Inicio " + "> " + categoryLabel}
          </Text>
        </TouchableOpacity>

        {/****************** Box que da espaçamento entre os dois ******************/}
        <View style={Styles.sizedBox}></View>

        <TouchableWithoutFeedback onPress={() => HandleImagePressed(images)}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={HandleScroll}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image.url }}
                style={Styles.imageStyle}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
          <View style={Styles.circlesContainer}>
            {images.map((img, i) => (
              <View
                key={i}
                style={[
                  currCircle === i ? Styles.currCircle : Styles.wihiteCircle,
                  { opacity: i === currCircle ? 1 : 0.5 },
                ]}
              />
            ))}
          </View>
        </TouchableWithoutFeedback>

        {/* <Image
              source={{
                  uri: product.picture ? product.picture[0].url : null,
              }}
              style={Styles.imageStyle}
              resizeMode="contain"
          /> */}

        {/****************** Box que da espaçamento entre os dois ******************/}
        <View style={Styles.sizedBox}></View>

        {/****************** Informações do produto a ser anunciado ******************/}
        <View style={Styles.InfoView}>
          {/* Titulo, preço e pessoa */}
          <View>
            <Text style={Styles.title}>{product.title}</Text>
            <View style={Styles.priceBox}>
              <Text style={Styles.priceStyle}>R$ {product.price}</Text>

              {/****************** Box que da espaçamento entre os dois ******************/}
              <View style={{ width: 5 }}></View>

              <Text style={Styles.perUnity}>a unidade</Text>
            </View>
            <Text style={Styles.AnnouncedBy}>
              Vendido por {product.user ? product.user.name : ""}
            </Text>
          </View>

          {product.active ? (
            <CustomButton
              Label="Entrar em contato com o vendedor"
              onButtonPressed={handleChat}
            />
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontFamily: "ralway-regular-semi",
                margin: 20,
                fontSize: 16,
                color: Colors.mainRed,
              }}
            >
              Anúncio pausado!
            </Text>
          )}

          {/****************** Box que da espaçamento entre os dois ******************/}
          <View style={Styles.sizedBox}></View>

          {/****************** Descrição do produto ******************/}
          <View style={Styles.boxInformation}>
            <Text style={Styles.labelStyle}>Descrição</Text>
            <Text style={Styles.subLabel}>{product.description}</Text>
          </View>

          {/****************** Box que da espaçamento entre os dois ******************/}
          <View style={{ height: Spacing.MainMargin - 9 }}></View>

          {/****************** Modo de Pagamento ******************/}
          <View style={Styles.boxInformation}>
            <Text style={Styles.labelStyle}>Pagamento</Text>
            <Text style={Styles.subLabel}>{product.paymentDescription}</Text>
          </View>

          {/****************** Box que da espaçamento entre os dois ******************/}
          <View style={{ height: Spacing.MainMargin - 9 }}></View>

          {/****************** Modo de entrega ******************/}
          <View style={Styles.boxInformation}>
            <Text style={Styles.labelStyle}>Entrega</Text>
            <Text style={Styles.subLabel}>{product.deliveryDescription}</Text>
          </View>
        </View>
        <View style={Styles.logoBox}>
          <Image
            source={require("../../assets/logo.png")}
            style={Styles.logoStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
  if (fontsLoaded) {
    if (height < 670) {
      return <ScrollView>{content}</ScrollView>;
    } else {
      return content;
    }
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default ConfirmAnnouncement;
