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
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";

import { userRefreshInfo } from "../../store/modules/user/actions";
import CustomInputs from "../../components/CustomInputs";
import CustomButtons from "../../components/CustomButtons";
import CustomTopLabel from "../../components/CustomTopLabelInput";
import Spacing from "../../data/Spacing";
import { Style } from "./styles";

import api from "../../services/api";

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
  const [newName, setNewName] = useState(null);
  const [newEmail, setNewEmail] = useState(null);

  const [image, setImage] = useState("");

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

  const disptach = useDispatch();

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

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.7,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const onSubmit = async () => {
    console.log("oi");
    let imageID = null;
    if (image) {
      const form = new FormData();

      form.append("files", {
        uri: image,
        name: "image.jpg",
        type: "image/jpeg",
      });

      const response = await api
        .post("/files", form)
        .catch((err) => alert(err.response.data.error));

      if (response.data) {
        imageID = response.data;
      }
    }
    const data = { name: newName, email: newEmail, avatar_id: imageID };

    console.log(data);

    const response = await api
      .put(`/user/${user._id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .catch((err) => alert(err.response.data.error));

    if (response.status === 200) {
      alert("ok");
    }
  };

  const loadUserInfo = async () => {
    const response = await api
      .get(`/user/${user._id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .catch((err) => alert(err.response.data.error));

    if (response.data) {
      disptach(userRefreshInfo(response.data));
    }
  };

  useEffect(() => {
    loadUserInfo();
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
          {EditInfo ? (
            <TouchableOpacity
              style={Style.PhotoContainer}
              onPress={handleImagePick}
            >
              {image ? (
                <Image source={{ uri: image }} style={Style.PhotoContainer} />
              ) : (
                <Icon name="camera" size={25} color="white" />
              )}
            </TouchableOpacity>
          ) : (
            <Image
              source={{ uri: user.avatar.url }}
              style={Style.PhotoContainer}
            />
          )}
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
          {EditInfo ? (
            <TouchableOpacity
              style={Style.PhotoContainer}
              onPress={handleImagePick}
            >
              {image ? (
                <Image source={{ uri: image }} style={Style.PhotoContainer} />
              ) : (
                <Icon name="camera" size={25} color="white" />
              )}
            </TouchableOpacity>
          ) : (
            <View style={Style.PhotoContainer}>
              <Icon name="camera" size={25} color="white" />
            </View>
          )}
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
