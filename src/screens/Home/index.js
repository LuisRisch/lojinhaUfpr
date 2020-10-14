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

  const [errorInCpf, setErrorInCpf] = useState(false);
  const [errorInPass, setErrorInPass] = useState(false);
  const [errorInRedifinePass, setErrorInRedifinePass] = useState(true);

  const [cpfMessage, setCpfError] = useState("Informações inválidas");

  const [imageList, setImageList] = useState([{ url: "", selector: true }]);

  const handleRememberPassword = () => {
    dispatch(userRemember());
  };

  useEffect(() => {
    if (userSigned && rememberPassword) {
      navigation.navigate("MainProducts");
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
          setErrorInCpf(true);
          setErrorInPass(true);
        });
    } else {
      setErrorInCpf(true);
      setErrorInPass(true);
    }
  };

  const handleRegister = () => {
    changeStateAlertModal();

    navigation.navigate("Register");
  };

  // Na tela de login, nas telas menores de celulares menores o Keyboard estava
  // ocupando espaço dos inputs, tanto na parte de login quanto de resetar a senha.
  // Portanto, armazenei os códigos em duas variáveis diferentes, e retornei um operador lógico
  // que dependendo do tamanho da tela, os conteúdos serão dispostos de uma certa forma

  let resetPassContent = (
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
              error={errorInRedifinePass}
              errorMessage="Esse email não consta na nossa base de dados"
            />
            <Text style={styles.lowerTexT}>
              Enviaremos um email com as informações necessárias para a
              redefinação da senha
            </Text>
            <CustomButtons Label="Enviar" Color={{ Color: "#ed524a" }} />
          </ScrollView>
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
        {height < 670 ? (
          <ScrollView>{resetPassContent}</ScrollView>
        ) : (
          <View style={{ flex: 1 }}>{resetPassContent}</View>
        )}
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
              onButtonPressed={changeStateAlertModal}
            />
            <CustomButtons
              Label="Não sou estudante da UFPR"
              onButtonPressed={handleRegister}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.topContaine}>
        <View style={styles.redContainer}></View>
        <Text style={styles.normalText}>Plataforma de ação de venda</Text>
      </View>
      <Image
        source={require("../../assets/logo_com_nome.png")}
        style={styles.image}
      />
      <View style={{ justifyContent: "space-between" }}>
        <ScrollView>
          <View style={styles.inputsContainer}>
            <CustomTopLabelInput label="CPF" />
            <CustomInputs
              hintText="Digite o seu CPF"
              error={errorInCpf}
              errorMessage={cpfMessage}
              onChangeText={(text) => setCpf(text)}
            />
            <CustomTopLabelInput label="Senha" />
            <CustomPasswordInput
              hintText="Digite sua senha"
              error={errorInPass}
              errorMessage="Informações inválidas"
              onChangeText={(text) => setPass(text)}
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
