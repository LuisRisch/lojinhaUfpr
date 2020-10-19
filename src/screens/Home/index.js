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
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch, useSelector } from "react-redux";
import isCPFValid from "../../services/cpfValidator";
import { userSignIn, userRemember } from "../../store/modules/user/actions";
import CustomButtons from "../../components/CustomButtons";
import CustomInputs from "../../components/CustomInputs";
import CustomSwitchButton from "../../components/CustomSwitchButton";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";

// Navegacao
import api from "../../services/api";

const Home = ({ navigation }) => {
  const [loginModalVisible, setModalLoginVisible] = useState(true);
  const [isModalResetPassVisible, setIsModalResetPassVisible] = useState(false);

  const userSigned = useSelector((state) => state.user.signed);
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

  useEffect(() => {
    if (userSigned && rememberPassword) {
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

  const [Cpf, setCpf] = useState("");
  const [Pass, setPass] = useState("");

  const height = Dimensions.get("window").height;
  const handleLogin = async () => {
    if (Cpf && Pass) {
      // if (!isCPFValid(Cpf)) {
      //   setErrorInCpf(true);
      //   setCpfError("Número do CPF inválido!");
      //   return 0;
      // } COMENTADO DURANTE O DESENVOLVIMENTO
      await api
        .post("/login", { cpf: Cpf, password: Pass })
        .then((res) => {
          if (res.status === 200) {
            dispatch(userSignIn(res.data));
            navigation.navigate("MainProducts");
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
  };

  const RedifinePassHandler = (text) => {
    if (errorInRedifinePass.error) {
      setErrorInRedifinePass({
        error: false,
        message: "",
      });
      setEmail(text);
    }
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
    navigation.navigate("UfprRegister");
  };

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
            <CustomButtons Label="Enviar" Color={{ Color: "#ed524a" }} />
          </ScrollView>
        </View>
      </View>
      <Text style={styles.TitleModalStyle}> Importante! </Text>
      <View style={styles.SizedBox}></View>
      <Text style={styles.SubTitleModalStyle}>
        Você é estudante da UFPR? Caso o usuário que não for aluno, não poderá
        fazer anúncios no aplicativo, mas terá o direito de fazer compras
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
      <CustomButtons
        Label="Fazer Login"
        Color={{ Color: "#ed524a" }}
        onButtonPressed={handleLogin}
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
              Label="Fazer Login"
              Color={{ Color: "#ed524a" }}
              onButtonPressed={handleLogin}
            />
            <CustomButtons
              Label="Entrar sem fazer login"
              Color={{ Color: "#FA8072" }}
              onButtonPressed={() => navigation.navigate("MainProducts")}
            />
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

  return (
    <SafeAreaView style={styles.screen}>
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
};

export default Home;
