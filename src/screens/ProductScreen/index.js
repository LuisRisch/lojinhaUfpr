import React, { useState } from "react";
import { View, Text, Image, Dimensions, ScrollView, Alert } from "react-native";
import { useSelector } from "react-redux";
import Spacing from "../../data/Spacing";
import CustomButton from "../../components/CustomButtons";
import { Styles } from "./styles";
import api from "../../services/api";

const ConfirmAnnouncement = ({ navigation, route }) => {
  const { item: product } = route.params;
  const { data: user, token } = useSelector((state) => state.user);
  const height = Dimensions.get("window").height;

  const ClosePage = () => {
    navigation.goBack();
  };

  const handleChat = async () => {
    const data = {
      user: user.id,
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
        title: response.data.product.title,
      });
    }
  };

  // var product = { ...ListOfCrafts[0] };

  const content = (
    <View style={Styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/****************** Box que da espaçamento entre os dois ******************/}
        <View style={Styles.sizedBox}></View>

        <View style={Styles.header}>
          <Text style={Styles.textCategoryStyle}>
            {"Inicio " + "> " + product.category}
          </Text>
        </View>

        {/****************** Box que da espaçamento entre os dois ******************/}
        <View style={Styles.sizedBox}></View>

        <Image
          source={{
            uri: product.picture ? product.picture[0].url : null,
          }}
          style={Styles.imageStyle}
          resizeMode="contain"
        />

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

          <CustomButton
            Label="Entrar em contato com o vendedor"
            onButtonPressed={handleChat}
          />

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

  if (height < 670) {
    return <ScrollView>{content}</ScrollView>;
  } else {
    return content;
  }
};

export default ConfirmAnnouncement;
