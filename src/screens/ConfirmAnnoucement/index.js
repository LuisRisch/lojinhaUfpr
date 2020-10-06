import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { ListOfCrafts } from "../../../temp/Products/Crafts";
import Color from "../../data/Colors";
import Spacing from "../../data/Spacing";
import CustomButton from "../../components/CustomButtons";
import { Styles } from "./styles";

const ConfirmAnnouncement = () => {
  const height = Dimensions.get("window").height;

  const ClosePage = () => {
    console.log("Fechar a página e voltar para a tela dos produtos");
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
      <CustomCloseIcon onIconPressed={ClosePage} icon="arrow-circle-left" />

      {/****************** Box que da espaçamento entre os dois ******************/}
      <View style={Styles.sizedBox}></View>

      <View style={Styles.header}>
        <Text style={Styles.textCategoryStyle}>
          {"Inicio " + "> " + product.Category}
        </Text>
        {!popUpMenu ? (
          <TouchableOpacity onPress={popUpMenuHandler}>
            <Icon name="ellipsis-h" size={25} color={Color.mainGrey} />
          </TouchableOpacity>
        ) : (
          <View style={Styles.popUpContainer}>
            <TouchableOpacity onPress={DeleteAnnouncementHandler}>
              <Text style={Styles.deleteAnnoucement}>Apagar</Text>
            </TouchableOpacity>

            {/****************** Divider ******************/}
            <View style={Styles.divider}></View>

            <TouchableOpacity onPress={EditHandler}>
              <Text style={Styles.editAnnoucement}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
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
        <CustomButton
          Label="Confirmar anúncio"
          onButtonPressed={ConfirmAnnouncement}
        />
      </View>
      <View style={Styles.logoBox}>
        <Image
          source={require("../../assets/logo.png")}
          style={Styles.logoStyle}
        />
      </View>
    </View>
  );

  if (height < 670) {
    return <ScrollView>{content}</ScrollView>;
  }
  return content;
};

export default ConfirmAnnouncement;
