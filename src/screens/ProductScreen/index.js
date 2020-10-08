import React, { useState } from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { ListOfCrafts } from "../../../temp/Products/Crafts";
import Spacing from "../../data/Spacing";
import CustomButton from "../../components/CustomButtons";
import { Styles } from "./styles";

const ConfirmAnnouncement = ({ navigation }) => {
  const height = Dimensions.get("window").height;

  const ClosePage = () => {
    navigation.goBack();
  };

  const [popUpMenu, setpopUpMenu] = useState(false);
  const popUpMenuHandler = () => {
    setpopUpMenu(true);
    setTimeout(() => {
      setpopUpMenu(false);
    }, 10000);
  };

  const DeleteAnnouncementHandler = () => {
    console.log("Deletar anuncio");
  };

  const EditHandler = () => {
    console.log("Editar anuncio");
  };

  const ConfirmAnnouncement = () => {
    console.log("Confirma anuncio");
  };

  var product = { ...ListOfCrafts[0] };

  const content = (
    <View style={Styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomCloseIcon onPress={ClosePage} icon="arrow-circle-left" />

        {/****************** Box que da espaçamento entre os dois ******************/}
        <View style={Styles.sizedBox}></View>

        <View style={Styles.header}>
          <Text style={Styles.textCategoryStyle}>
            {"Inicio " + "> " + product.Category}
          </Text>
        </View>

        {/****************** Box que da espaçamento entre os dois ******************/}
        <View style={Styles.sizedBox}></View>

        <Image
          source={{ uri: product.imgUrl }}
          style={Styles.imageStyle}
          resizeMode="contain"
        />

        {/****************** Box que da espaçamento entre os dois ******************/}
        <View style={Styles.sizedBox}></View>

        {/****************** Informações do produto a ser anunciado ******************/}
        <View style={Styles.screen}>
          {/* Titulo, preço e pessoa */}
          <View>
            <Text style={Styles.title}>{product.Title}</Text>
            <View style={Styles.priceBox}>
              <Text style={Styles.priceStyle}>R$ {product.Price}</Text>

              {/****************** Box que da espaçamento entre os dois ******************/}
              <View style={{ width: 5 }}></View>

              <Text style={Styles.perUnity}>a unidade</Text>
            </View>
            <Text style={Styles.AnnouncedBy}>
              Vendido por {product.AnnouncedBy}
            </Text>
          </View>

          <CustomButton
            Label="Entrar em contato com o vendedor"
            onButtonPressed={ConfirmAnnouncement}
          />

          {/****************** Box que da espaçamento entre os dois ******************/}
          <View style={Styles.sizedBox}></View>

          {/****************** Descrição do produto ******************/}
          <View style={Styles.boxInformation}>
            <Text style={Styles.labelStyle}>Descrição</Text>
            <Text style={Styles.subLabel}>{product.Description}</Text>
          </View>

          {/****************** Box que da espaçamento entre os dois ******************/}
          <View style={{ height: Spacing.MainMargin - 9 }}></View>

          {/****************** Modo de Pagamento ******************/}
          <View style={Styles.boxInformation}>
            <Text style={Styles.labelStyle}>Pagamento</Text>
            <Text style={Styles.subLabel}>{product.pay}</Text>
          </View>

          {/****************** Box que da espaçamento entre os dois ******************/}
          <View style={{ height: Spacing.MainMargin - 9 }}></View>

          {/****************** Modo de entrega ******************/}
          <View style={Styles.boxInformation}>
            <Text style={Styles.labelStyle}>Entrega</Text>
            <Text style={Styles.subLabel}>{product.delivery}</Text>
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
