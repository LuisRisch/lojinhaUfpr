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

import CustomInputs from "../../components/CustomInputs";
import CustomButtons from "../../components/CustomButtons";
import CustomTopLabel from "../../components/CustomTopLabelInput";
import Spacing from "../../data/Spacing";
import { Style } from "./styles";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import Colors from "../../data/Colors";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Mplus-semi": require("../../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    "Mplus-bold": require("../../assets/fonts/MPLUSRounded1c-Bold.ttf"),
  });

const UserPage = ({ navigation }) => {
  const [EditInfo, setEditInfo] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [nameError, setNameError] = useState({
    error: false,
    message: "",
  });

  const [emailError, setEmailError] = useState({
    error: false,
    message: "",
  });

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const user = useSelector((state) => state.user.data);
  const signed = useSelector((state) => state.user.signed);
  const height = Dimensions.get("window").height;

  const EditHandler = () => {
    if (!signed) {
      alert(
        "Você não está logado, portanto não poderá alterar nenhum dado pessoal"
      );
    } else {
      setEditInfo(!EditInfo);
    }
  };

  const isEmpty = (text) => {
    return text.length === 0 ? true : false;
  };

  const NameHandler = (text) => {
    if (nameError.error) {
      setNameError({
        error: false,
        message: "",
      });
    }
    setNewName(text);
    console.log(newName);
  };

  const EmailHandler = (text) => {
    if (emailError.error) {
      setEmailError({
        error: false,
        message: "",
      });
    }
    setNewEmail(text);
  };

  const onSubmit = () => {
    if (!isEmpty(newName) && !isEmpty(newEmail) && !newEmail.includes("@")) {
      //Salvar os novos dados do usuário
      console.log("bacana");
    } else {
      if (isEmpty(newName)) {
        setNameError({
          error: true,
          message: "Este campo precisa ser preenchido",
        });
      }
      if (isEmpty(newEmail)) {
        setEmailError({
          error: true,
          message: "Este campo precisa ser preenchido",
        });
      } else if (!newEmail.includes("a")) {
        setEmailError({
          error: true,
          message: "o email não contém @",
        });
      }
    }
  };

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
            <TouchableOpacity onPress={EditHandler}>
              {EditInfo ? (
                <Text style={Style.changePhotoStyle}>Voltar</Text>
              ) : (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={Style.changePhotoStyle}>Alterar seus dados</Text>
                  <View style={{ width: 5 }}></View>
                  <Icon name="edit" color={Colors.mainRed} size={16} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={Style.PhotoContainer}>
            <Icon name="camera" size={25} color="white" />
          </View>
          <View style={Style.nameAndChangePhotoBox}>
            <Text style={Style.personNameStyle}>{user ? user.name : ""}</Text>
            <TouchableOpacity onPress={EditHandler}>
              {EditInfo ? (
                <Text style={Style.changePhotoStyle}>Voltar</Text>
              ) : (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={Style.changePhotoStyle}>Alterar seus dados</Text>
                  <View style={{ width: 5 }}></View>
                  <Icon name="edit" color={Colors.mainRed} size={16} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </>
      )}
      {EditInfo ? (
        <View style={{ marginTop: Spacing.MainMargin }}>
          {user.siga_linked ? null : (
            <>
              <CustomTopLabel label="Nome" />
              <CustomInputs
                value={newName}
                onChangeText={(text) => NameHandler(text)}
                hintText="Digite seu novo nome"
                error={nameError.error}
                errorMessage={nameError.message}
              />

              <View style={{ height: 9 }}></View>
            </>
          )}

          <CustomTopLabel label="Email" />
          <CustomInputs
            value={newEmail}
            onChangeText={(text) => EmailHandler(text)}
            hintText="Digite seu novo email"
            error={emailError.error}
            errorMessage={emailError.message}
          />

          <View style={{ height: 9 }}></View>

          <CustomButtons Label="Salvar" onButtonPressed={onSubmit} />
        </View>
      ) : (
        <View style={{ marginTop: Spacing.MainMargin * 2 }}>
          <CustomTopLabel label="Nome do usuário" />
          <View style={Style.TextBox}>
            <Text style={Style.TentInfo}>{user ? user.name : ""}</Text>
          </View>

          <View style={{ height: 9 }}></View>

          <CustomTopLabel label="Email" />
          <View style={Style.TextBox}>
            <Text>{user ? user.email : ""}</Text>
          </View>

          <View style={{ height: 9 }}></View>

          <CustomTopLabel label="CPF" />
          <View style={Style.TextBox}>
            <Text>{user ? user.cpf : ""}</Text>
          </View>
        </View>
      )}
      <View
        style={{
          flexDirection: "column-reverse",
          flex: 1,
          overflow: "hidden",
          marginTop: Spacing.MainMargin,
        }}
      >
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
