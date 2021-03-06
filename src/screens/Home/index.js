import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Modal,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  userSignIn,
  userRemember,
  userSignOut,
} from "../../store/modules/user/actions";
import CustomButtons from "../../components/CustomButtons";
import CustomInputs from "../../components/CustomInputs";
import CustomSwitchButton from "../../components/CustomSwitchButton";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import LoadingModal from "../../components/LoadingModal";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import Colors from "../../data/Colors";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { registerForPushNotificationsAsync } from "../../services/notifications";
import { userUpdateExpoToken } from "../../store/modules/user/actions";
import { excludeRegisterUser } from "../../store/modules/excludedData/actions";
// Navegacao
import api from "../../services/api";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
  });

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loginModalVisible, setModalLoginVisible] = useState(true);
  const [isModalResetPassVisible, setIsModalResetPassVisible] = useState(false);

  const excludedDataUser = useSelector((state) => state.excludedData.user_id);
  const user = useSelector((state) => state.user);
  const rememberPassword = useSelector((state) => state.user.rememberPassword);

  const [Cpf, setCpf] = useState("");
  const [Pass, setPass] = useState("");
  const [Email, setEmail] = useState("");

  const [errorInCpf, setErrorInCpf] = useState({
    error: false,
    message: "",
  });
  const [errorInPass, setErrorInPass] = useState({
    error: false,
    message: "",
  });
  const [errorInRedifinePass, setErrorInRedifinePass] = useState({
    error: false,
    message: "",
  });

  const handleRememberPassword = () => {
    dispatch(userRemember());
  };

  const expoRegister = async () => {
    const token = await registerForPushNotificationsAsync();
    dispatch(userUpdateExpoToken(token));
    return token;
  };

  useEffect(() => {
    if (user.data && rememberPassword) {
      navigation.navigate("Products");
    }
  }, []);

  const dispatch = useDispatch();

  const changeStateResetPassModal = () => {
    setModalLoginVisible(!loginModalVisible);
    setIsModalResetPassVisible(!isModalResetPassVisible);
  };

  const [isALertModalVisible, setIsAlertModalVisible] = useState(false);
  const changeStateAlertModal = () => {
    setIsAlertModalVisible(!isALertModalVisible);
  };

  const ResetPassHandler = async () => {
    setLoading(true);
    console.log(Email);
    if (Email.length >= 1 && Email.includes("@")) {
      const response = await api
        .post("/request_pass_reset", { email: Email })
        .catch((err) =>
          Alert.alert(
            "Ocorreu um erro ao gerar seu código!",
            err.response.data.error
          )
        );
      setLoading(false);
      if (response.data) {
        navigation.navigate("ForgotPassword", { email: Email });
      }
      setIsModalResetPassVisible(false);
      setLoading(false);
    } else {
      setLoading(false);
      if (Email.length === 0) {
        setErrorInRedifinePass({
          error: true,
          message: "Você precisa preencher este campo",
        });
      } else {
        if (!Email.includes("@")) {
          setErrorInRedifinePass({
            error: true,
            message: "O email precisa incluir o caractere @",
          });
        }
      }
    }
    setLoading(false);
  };

  const height = Dimensions.get("window").height;
  const handleLogin = async () => {
    setLoading(true);
    if (Cpf && Pass) {
      // if (!isCPFValid(Cpf)) {
      //   setErrorInCpf(true);
      //   setCpfError("Número do CPF inválido!");
      //   return 0;
      // } COMENTADO DURANTE O DESENVOLVIMENTO
      let notificationToken = null;
      if (!user.expoToken) {
        notificationToken = await expoRegister();
      }
      console.log(notificationToken);

      await api
        .post("/login", {
          cpf: Cpf,
          password: Pass,
          notificationToken,
        })
        .then((res) => {
          if (res.status === 200) {
            if (!excludedDataUser) {
              dispatch(excludeRegisterUser(res.data._id));
            }
            dispatch(userSignIn(res.data));
            navigation.navigate("Products");
            setErrorInCpf(false);
            setErrorInPass(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setErrorInCpf({
            error: true,
            message: "Informações inválidas!",
          });
          setErrorInPass({
            error: true,
            message: "Informações inválidas!",
          });
          Alert.alert(
            "Informações inválidas!",
            "As suas informações de cpf e senha estão inválidas"
          );
        });
    } else {
      setErrorInCpf({
        error: true,
        message: "Este campo não foi preenchido",
      });
      setErrorInPass({
        error: true,
        message: "Este campo não foi preenchido",
      });
    }
    setLoading(false);
  };

  const RedifinePassHandler = (text) => {
    if (errorInRedifinePass.error) {
      setErrorInRedifinePass({
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
    setPass(text);
  };

  const handleRegister = () => {
    changeStateAlertModal();
    navigation.navigate("Register");
  };

  const handleUfprRegister = () => {
    changeStateAlertModal();
    Alert.alert(
      "Olá discente!",
      "O app lojinha utiliza o login com o SIGA. Portanto, é só fazer o login com seus dados na tela de login mesmo! Ah, e não esqueça de nos informar seu email na tela de usuário, e colocar uma boa foto de perfil!"
    );
  };

  // Na tela de login, nas telas menores de celulares menores o Keyboard estava
  // ocupando espaço dos inputs, tanto na parte de login quanto de resetar a senha.
  // Portanto, armazenei os códigos em duas variáveis diferentes, e retornei um operador lógico
  // que dependendo do tamanho da tela, os conteúdos serão dispostos de uma certa forma

  const resetPassContent = (
    <View style={styles.BackModalScreen}>
      <View style={styles.inputsContainer}>
        <View style={{ justifyContent: "space-between" }}>
          <ScrollView>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={changeStateResetPassModal}>
                <Icon name="close" color={Colors.mainRed} size={18} />
              </TouchableOpacity>
            </View>
            <CustomTopLabelInput label="Redefinir senha" />
            <CustomInputs
              hintText="Digite seu email"
              onChangeText={(text) => RedifinePassHandler(text)}
              error={errorInRedifinePass.error}
              errorMessage={errorInRedifinePass.message}
            />
            <Text style={styles.lowerTexT}>
              Enviaremos um email com as informações necessárias para a
              redefinação da senha
            </Text>
            <CustomButtons
              Label="Enviar"
              Color={{ Color: "#ed524a" }}
              onButtonPressed={ResetPassHandler}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );

  const homeContent = (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View style={styles.topContaine}>
        <View style={styles.redContainer}></View>
        <Text style={styles.normalText}>Plataforma de ação de venda</Text>
      </View>
      <Image
        source={require("../../assets/logo_com_nome.png")}
        style={styles.image}
      />
      <View style={{ justifyContent: "space-between" }}>
        <View>
          <View style={styles.inputsContainer}>
            <CustomTopLabelInput label="CPF" />
            <CustomInputs
              hintText="Digite o seu CPF"
              error={errorInCpf.error}
              errorMessage={errorInCpf.message}
              onChangeText={(text) => CpfHandler(text)}
            />
            <CustomTopLabelInput label="Senha" />
            <CustomPasswordInput
              hintText="Digite sua senha"
              error={errorInPass.error}
              errorMessage={errorInPass.message}
              onChangeText={(text) => PassHandler(text)}
            />
            <View style={styles.saveOrForgotPasswordContainer}>
              <View style={styles.switchButtonContainer}>
                <CustomSwitchButton
                  onChange={handleRememberPassword}
                  value={rememberPassword}
                />
                <Text style={styles.lowerTexT}>Lembrar</Text>
              </View>
              <TouchableOpacity onPress={changeStateResetPassModal}>
                <Text style={styles.redText}>Esqueceu a senha?</Text>
              </TouchableOpacity>
            </View>
            <CustomButtons
              Label="fazer login"
              Color={{ Color: "#ed524a" }}
              onButtonPressed={handleLogin}
            />
            <TouchableOpacity
              onPress={() => {
                dispatch(userSignOut());
                navigation.navigate("Products");
              }}
              style={{
                height: 35,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#ddd",
                marginTop: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: "ralway-regular",
                  color: "#c4c4c4",
                }}
              >
                entrar sem uma conta
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 18,
                alignItems: "center",
              }}
            >
              <Text style={styles.lowerTexT}>Não tem conta?</Text>
              <TouchableOpacity
                onPress={() => setIsAlertModalVisible(!isALertModalVisible)}
              >
                <Text style={styles.redText}> Faça o cadastro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  if (fontsLoaded) {
    return (
      <SafeAreaView style={styles.screen}>
        <LoadingModal visible={loading} />
        <Modal
          animationType="fade"
          visible={isModalResetPassVisible}
          transparent={true}
        >
          <View style={{ flex: 1 }}>{resetPassContent}</View>
        </Modal>

        {/* O modal irá mostrar a um Alert personalizado de quando o usuário clicar para se cadastras */}

        <Modal
          visible={isALertModalVisible}
          transparent={true}
          animationType={"slide"}
        >
          <View style={styles.BackModalScreen}>
            <View style={styles.BackModalAlert}>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={changeStateAlertModal}>
                  <Icon name="close" color={Colors.mainRed} size={18} />
                </TouchableOpacity>
              </View>
              <Text style={styles.TitleModalStyle}> Importante! </Text>
              <View style={styles.SizedBox}></View>
              <Text style={styles.SubTitleModalStyle}>
                Você é estudante da UFPR? Caso o usuário que não for aluno, não
                poderá fazer anúncios no aplicativo, mas terá o direito de fazer
                compras
              </Text>
              <CustomButtons
                Label="Sim, sou estudante da UFPR"
                onButtonPressed={handleUfprRegister}
              />
              <CustomButtons
                Label="Não sou estudante da UFPR"
                onButtonPressed={handleRegister}
              />
            </View>
          </View>
        </Modal>
        {height <= 670 ? (
          <ScrollView>{homeContent}</ScrollView>
        ) : (
          <>{homeContent}</>
        )}
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default Home;
