import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

import CustomCloseIcon from "../../components/CustomCloseIcon";
import CustomTopLabel from "../../components/CustomTopLabelInput";
import Spacing from "../../data/Spacing";
import { Style } from "./styles";

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

const UserPage = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const user = useSelector((state) => state.user.data);
  const height = Dimensions.get("window").height;

  useEffect(() => {
    console.log(user);
  }, []);

  const content = (
    <View style={Style.screen}>
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="align-left" size={20} color="#c4c4c4" />
        </TouchableOpacity>
        <Text style={Style.titleStyle}>Perfil</Text>
        <View width={20} />
      </View>
      {user.avatar ? (
        <>
          <Image
            source={{ uri: user.avatar.url }}
            style={Style.PhotoContainer}
          />
          <View style={Style.nameAndChangePhotoBox}>
            <Text style={Style.personNameStyle}>{user ? user.name : ""}</Text>
            <Text style={Style.changePhotoStyle}>Alterar foto de perfil</Text>
          </View>
        </>
      ) : (
        <>
          <View style={Style.PhotoContainer}>
            <Icon name="camera" size={25} color="white" />
          </View>
          <View style={Style.nameAndChangePhotoBox}>
            <Text style={Style.personNameStyle}>{user ? user.name : ""}</Text>
            <Text style={Style.changePhotoStyle}>Alterar foto de perfil</Text>
          </View>
        </>
      )}
      <View style={{ marginTop: Spacing.MainMargin * 2 }}>
        <CustomTopLabel label="Nome do usuário" />
        <View style={Style.TextBox}>
          <Text style={Style.TentInfo}>{user ? user.name : ""}</Text>
        </View>

        <CustomTopLabel label="Email" />
        <View style={Style.TextBox}>
          <Text>{user ? user.email : ""}</Text>
        </View>

        <CustomTopLabel label="CPF" />
        <View style={Style.TextBox}>
          <Text>{user ? user.cpf : ""}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column-reverse", flex: 1 }}>
        <Image
          source={require("../../assets/logo.png")}
          style={Style.logoStyle}
        />
      </View>
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

export default UserPage;
