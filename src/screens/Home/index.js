import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    Modal,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import CustomButtons from '../../components/CustomButtons';
import CustomInputs from "../../components/CustomInputs";
import CustomSwitchButton from "../../components/CustomSwitchButton";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import { Link } from "react-router-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";

const Home = () => {
    const [loginModalVisible, setModalLoginVisible] = useState(true);
    const [isModalResetPassVisible, setIsModalResetPassVisible] = useState(false); 

    // Se tiver algum erro com os dados inseridos, o campo do input ficará vermelho e aparecerá uma mensagem de erro
    const [errorInCpf , setErrorInCpf] = useState(false);
    const [errorInPass , setErrorInPass] = useState(false);
    const [errorInRedifinePass , setErrorInRedifinePass] = useState(true);

    const changeStateResetPassModal = () => {
        setModalLoginVisible(!loginModalVisible);
        setIsModalResetPassVisible(!isModalResetPassVisible);
    };

    const [isALertModalVisible, setIsAlertModalVisible] = useState(false);
    const changeStateAlertModal = () => {
        setIsAlertModalVisible(!isALertModalVisible);
    };

    const [Cpf, setCpf] = useState("");
    const CpfHandler = (text) => {
        if(errorInCpf) {
            setErrorInCpf(!errorInCpf); 
        } 
        setCpf(text);
        console.log(Cpf);
    }

    const [Pass, setPass] = useState("");
    const PassHandler = (text) => {
        if(errorInPass) {
            setErrorInPass(!errorInPass)
        } 
        setPass(text);
        console.log(Pass);
    } 

    const [redifinePass ,  setRedifinePass] = useState(''); 
    const RedifinePassHandler = (text) => {
        if(errorInRedifinePass){
            setErrorInRedifinePass(!redifinePass)
        } 
        setRedifinePass(text);
        console.log(redifinePass);
    }

    const height = Dimensions.get("window").height;

    // Na tela de login, nas telas menores de celulares menores o Keyboard estava
    // ocupando espaço dos inputs, tanto na parte de login quanto de resetar a senha.
    // Portanto, armazenei os códigos em duas variáveis diferentes, e retornei um operador lógico
    // que dependendo do tamanho da tela, os conteúdos serão dispostos de uma certa forma

    let signInContent = (
        <View style={styles.screen}>
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
                        <CustomTopLabelInput label="CPF ou GRR" />
                        <CustomInputs
                            hintText="Digite o seu CPF"
                            onChangeText={(text) => CpfHandler(text)}
                            error = {errorInCpf}
                            errorMessage = 'Esse Cpf não consta na nossa base de dados'
                        />

                        <CustomTopLabelInput label="Senha" />
                        <CustomPasswordInput
                            hintText="Digite sua senha"
                            onChangeText={(text) => PassHandler(text)}
                            error = {errorInPass}
                            errorMessage = 'Essa senha não consta na nossa base de dados'
                        />

                        <View style={styles.saveOrForgotPasswordContainer}>
                            <View style={styles.switchButtonContainer}>
                                <CustomSwitchButton />
                                <Text style={styles.lowerTexT}>Lembrar</Text>
                            </View>
                            <TouchableOpacity onPress={changeStateResetPassModal}>
                                <Text style={styles.redText}>Esqueceu a senha?</Text>
                            </TouchableOpacity>
                        </View>
                        <CustomButtons
                            Label="Fazer Login"
                            Color={{ Color: "#ed524a" }}
                            link='/MainProducts'
                            onButtonPressed={() => console.log(Cpf, Pass)}
                        />
                        <CustomButtons
                            Label="Entrar sem fazer login"
                            Color={{ Color: "#FA8072" }}
                            link='/MainProducts'
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
        </View>
    );

    let resetPassContent = (
        <View style={styles.screen}>
            <View style={styles.topContaine}>
                <View style={styles.redContainer}></View>
                <Text style={styles.normalText}>Plataforma de ação de venda</Text>
            </View>
            <View>
                <Image
                    source={require("../../assets/logo_com_nome.png")}
                    style={styles.image}
                />
            </View>
            <View style={styles.inputsContainer}>
                <View style={{ justifyContent: "space-between" }}>
                    <ScrollView>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={changeStateResetPassModal}>
                                <Icon
                                    name='close'
                                    color={Colors.mainRed}
                                    size={18}
                                />
                            </TouchableOpacity>
                        </View>
                        <CustomTopLabelInput label="Redefinir senha" />
                        <CustomInputs 
                            hintText="Digite seu email"
                            onChangeText={(text) => RedifinePassHandler(text)}
                            error = {errorInRedifinePass}
                            errorMessage = 'Esse email não consta na nossa base de dados'
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
        <View>
            {/* O Modal irá mostrar os inputs para o login */}

            <Modal
                animationType="fade"
                visible={loginModalVisible}
                transparent={true}
            >
                {height < 670 ? (
                    <ScrollView>{signInContent}</ScrollView>
                ) : (
                        <View style={{ flex: 1 }}>{signInContent}</View>
                    )}
            </Modal>

            {/* O Modal irá mostrar a sessão para recuperar a senha */}

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
                                <Icon
                                    name='close'
                                    color={Colors.mainRed}
                                    size={18}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.TitleModalStyle}> Importante! </Text>
                        <View style={styles.SizedBox}></View>
                        <Text style={styles.SubTitleModalStyle}>
                            Você é estudante da UFPR? Caso o usuário que não for aluno, não
                            poderá fazer anúncios no aplicativo, mas terá o direito de fazer
                            compras
                        </Text>

                        {/* A navegação da página de login para a de cadastro, quando
                            o usuário não tiver nenhuma conta, tem que ser feita aqui 
                            a transição. Além disso, deve-se passar um parâmetro booleano
                            indicando qual opção o usuário escolher, haja vista que caso 
                            o usuário a se cadastrar seja um estudante da ufpr, adicionará
                            um textinput a mais
                        */}

                        <CustomButtons
                            Label="Sim, sou estudante da UFPR"
                            onButtonPressed={changeStateAlertModal} 
                            link='/UfprRegister'
                        />
                        <CustomButtons
                            Label="Não sou estudante da UFPR"
                            onButtonPressed={changeStateAlertModal}
                            link='/Register'
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Home;
