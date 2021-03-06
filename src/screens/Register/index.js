import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  CheckBox,
  TouchableOpacity,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import CustomButtons from "../../components/CustomButtons";
import CustomInputs from "../../components/CustomInputs";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import TermsModal from "../../components/TermsModal";
import { styles } from "./styles";
import Colors from "../../data/Colors";
import * as ImagePicker from "expo-image-picker";

import api from "../../services/api";
import isCPFValid from "../../services/cpfValidator";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Mplus-semi": require("../../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    "Mplus-bold": require("../../assets/fonts/MPLUSRounded1c-Bold.ttf"),
  });

const Register = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Cpf, setCpf] = useState("");
  const [DefinePass, setDefinePass] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [checkBoxDisabled, setDisabled] = useState(true);

  const [image, setImage] = useState(null);

  // Shows error in input if some information is wrong
  const [errorInName, setErrorInName] = useState({
    error: false,
    message: "",
  });
  const [errorInEmail, setErrorinEmail] = useState({
    error: false,
    message: "",
  });
  const [errorInCpf, setErrorInCpf] = useState({
    error: false,
    message: "",
  });
  const [errorInPass, setErrorInPass] = useState({
    error: false,
    message: "",
  });
  const [errorInRevPass, setErrorInRevPass] = useState({
    error: false,
    message: "",
  });

  // Catch the char of the field
  const NameHandler = (text) => {
    if (errorInName.error) {
      setErrorInName({
        error: false,
        message: "",
      });
    }
    setName(text);
  };

  const EmailHandler = (text) => {
    if (errorInEmail.error) {
      setErrorinEmail({
        error: false,
        message: "",
      });
    }
    setEmail(text);
  };

  const CpfHandler = (text) => {
    if (errorInCpf.error) {
      setErrorInCpf({
        error: false,
        message: "",
      });
    }
    setCpf(text);
  };

  const PassHandler = (text) => {
    if (errorInPass.error) {
      setErrorInPass({
        error: false,
        message: "",
      });
    }
    setDefinePass(text);
  };

  const RevPassHandler = (text) => {
    if (errorInRevPass.error) {
      setErrorInRevPass({
        error: false,
        message: "",
      });
    }
    setConfirmPass(text);
  };

  function VerifyLenght(text) {
    return text.length >= 1 ? true : false;
  }

  function IsEmail(email) {
    return email.includes("@");
  }

  function isValidPass(pass) {
    return pass.length >= 8 ? true : false;
  }

  //Function that verifies everything before complete the registration
  const onSubmitt = async () => {
    if (!VerifyLenght(Name)) {
      setErrorInName({
        error: true,
        message: "Preencha o campo",
      });
      setName("");
    }

    if (VerifyLenght(Email)) {
      if (!IsEmail(Email)) {
        setErrorinEmail({
          error: true,
          message: "O email digitado não contêm @",
        });
        setEmail("");
      }
    } else {
      setErrorinEmail({
        error: true,
        message: "Preencha o campo",
      });
      setEmail("");
    }

    if (!isCPFValid(Cpf)) {
      setErrorInCpf({
        error: true,
        message: "O cpf não é válido",
      });
      setCpf("");
    }

    if (!isValidPass(DefinePass)) {
      setErrorInPass({
        error: true,
        message: "A senha tem que ter 8 ou mais caracteres",
      });
      setDefinePass("");
    }

    if (DefinePass !== ConfirmPass) {
      setErrorInRevPass({
        error: true,
        message: "As senhas digitados não são iguais",
      });
    }
    if (
      errorInName ||
      errorInCpf ||
      errorInEmail ||
      errorInPass ||
      errorInRevPass
    ) {
      console.log(image);

      let imageID = null;

      if (image) {
        const imageForm = new FormData();
        imageForm.append("files", {
          uri: image,
          name: "image.jpg",
          type: "image/jpeg",
        });
        const response = await api
          .post("/files", imageForm)
          .catch((err) =>
            Alert.alert(
              "Ocorreu um erro ao fazer o upload de suas fotos",
              err.response.data.error
            )
          );

        if (response.data) {
          imageID = response.data;
        }
      }

      const data = {
        name: Name,
        cpf: Cpf,
        password: DefinePass,
        email: Email,
        avatar_id: imageID,
      };

      const response = await api
        .post("/user", data)
        .catch((err) =>
          Alert.alert(
            "Ocorreu um erro no seu registro!",
            err.response.data.error
          )
        );

      if (response.status === 200) {
        navigation.navigate("Login");
      }

      return;
    } else {
      setIsConfirmRegisterModalVisible(!isConfirmRegisterModalVisible);
    }
  };

  const [isCheckBoxSelected, setIsCheckBoxSelected] = useState(false);
  const changeStateCheckBox = () => {
    setIsCheckBoxSelected(!isCheckBoxSelected);
  };

  const [
    isConfirmRegisterModalVisible,
    setIsConfirmRegisterModalVisible,
  ] = useState(false);

  const changeStateConfirmModal = () => {
    setIsConfirmRegisterModalVisible(!isConfirmRegisterModalVisible);
  };

  const [isConsentTermsModalVisible, setIsConsentTermsModalVisible] = useState(
    false
  );
  const changeStateTermsModal = () => {
    setIsConsentTermsModalVisible(!isConsentTermsModalVisible);
  };

  const onConsentTermsButtonPressed = () => {
    if (!isCheckBoxSelected) {
      setDisabled(false);
      setIsCheckBoxSelected(!isCheckBoxSelected);
    }
    setIsConsentTermsModalVisible(!isConsentTermsModalVisible);
  };

  const BackIconHandler = () => {
    navigation.navigate("Login");
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

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permissões necessárias",
            "Necessitamos de algumas permissões para poder cadastrar produtos!"
          );
        }
      }
    })();
  }, []);

  if (fontsLoaded) {
    return (
      <View style={styles.screen}>
        <TermsModal
          visible={isConsentTermsModalVisible}
          onPress={onConsentTermsButtonPressed}
        />
        {/* Esse modal irá mostrar um Alerta customizado confirmando o cadastro do novo usuário */}
        <Modal
          visible={isConfirmRegisterModalVisible}
          transparent={true}
          animationType={"slide"}
        >
          <View style={styles.BackModalScreen}>
            <View style={styles.BackModalAlert}>
              <Text style={styles.TitleModalStyle}>Cadastro com sucesso </Text>
              <View style={styles.sizedBox}></View>
              <Text style={styles.SubTitleModalStyle}>
                Enviamos um e-mail com cuidados essencias a sua segurança{" "}
              </Text>
              <CustomButtons
                Label="Ok!"
                onButtonPressed={() => {
                  navigation.navigate("ConfirmRegister");
                  setIsConfirmRegisterModalVisible(
                    !isConfirmRegisterModalVisible
                  );
                }}
              />
            </View>
          </View>
        </Modal>

        {/* Esse modal irá mostrar os termos de consentimento */}

        <ScrollView showsVerticalScrollIndicator={false}>
          {image === null ? (
            <TouchableOpacity onPress={handleImagePick}>
              <View style={styles.ChoosePhoto}>
                <Icon name="camera" size={25} color="white" />
              </View>
            </TouchableOpacity>
          ) : (
            <Image style={styles.PerfilPhoto} source={{ uri: image }} />
          )}

          <View>
            <CustomTopLabelInput label="Nome" />
            <CustomInputs
              hintText="Beatriz Nogueira"
              error={errorInName.error}
              value={Name}
              errorMessage={errorInName.message}
              onChangeText={(text) => NameHandler(text)}
            />

            <CustomTopLabelInput label="Email" />
            <CustomInputs
              hintText="beatriznogueira@gmail.com"
              error={errorInEmail.error}
              value={Email}
              errorMessage={errorInEmail.message}
              onChangeText={(text) => EmailHandler(text)}
            />

            <CustomTopLabelInput label="CPF" />
            <CustomInputs
              hintText="111111111-11"
              error={errorInCpf.error}
              value={Cpf}
              errorMessage={errorInCpf.message}
              onChangeText={(text) => CpfHandler(text)}
            />
            <CustomTopLabelInput label="Defina a senha" />
            <CustomPasswordInput
              hintText="Digite sua senha"
              error={errorInPass.error}
              value={DefinePass}
              errorMessage={errorInPass.message}
              onChangeText={(text) => PassHandler(text)}
            />

            <CustomTopLabelInput label="Repita a senha" />
            <CustomPasswordInput
              hintText="Repita sua senha"
              error={errorInRevPass.error}
              value={ConfirmPass}
              errorMessage={errorInRevPass.message}
              onChangeText={(text) => RevPassHandler(text)}
            />

            <Text style={styles.lowerTexT}>
              *Para a sua segurança, coloque uma senha com letras e números
            </Text>

            {isCheckBoxSelected ? (
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={onSubmitt}
              >
                <Text style={styles.buttonLabel}>Criar</Text>
              </TouchableOpacity>
            ) : null}

            <View style={styles.CheckBoxContainer}>
              <CheckBox
                value={isCheckBoxSelected}
                onValueChange={changeStateCheckBox}
                disabled={true}
              />
              <TouchableOpacity onPress={changeStateTermsModal}>
                <Text style={styles.lowerTextUnderline}>
                  Li e aceito os termos de responsabilidade com a plataforma
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Está acontecendo algum bug, por algum motivo separa-se o estilo da imagem em um file 
                        diferente a imagem nao é redenrizada no app*/}
          <View
            style={{
              flexDirection: "column-reverse",
              flex: 1,
              justifyContent: "flex-start",
              overflow: "hidden",
            }}
          >
            <Image
              source={require("../../assets/logo.png")}
              style={{ alignSelf: "center", width: 55, height: 55 }}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default Register;
