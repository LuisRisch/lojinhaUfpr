import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    Modal,
    Dimensions,
    TouchableOpacity
} from "react-native";
import CustomButtons from "../../Components/CustomButtons/CustomButtons";
import CustomInputs from "../../Components/CustomInputs/CustomInputs";
import CustomSwitchButton from "../../Components/CustomSwitchButton/CustomSwitchButton";
import CustomTopLabelInput from "../../Components/CustomTopLabelInput/CustomTopLabelInput";
import CustomPasswordInput from '../../Components/CustomPasswordInput/CustomPasswordInput'; 
import CustomCloseIcon from '../../Components/CustomCloseIcon/CustomCloseIcon'; 
import {styles} from '../ScreensStyles/HomeStyling';

const Home = () => {
    const [loginModalVisible, setModalLoginVisible] = useState(true);
    const [isModalResetPassVisible, setIsModalResetPassVisible] = useState(false);

    const changeStateResetPassModal = () => {
        setModalLoginVisible(!loginModalVisible);
        setIsModalResetPassVisible(!isModalResetPassVisible);
    };

    const [isALertModalVisible, setIsAlertModalVisible] = useState(false);
    const changeStateAlertModal = () => {
        setIsAlertModalVisible(!isALertModalVisible);
    } 

    const[ Cpf , setCpf ] = useState(''); 
    const[ Pass, setPass] = useState(''); 

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
                source={require('../../assets/logo_com_nome.png')}
                style={styles.image}
            />
            <View style={{ justifyContent: "space-between" }}>
                <ScrollView>
                    <View style={styles.inputsContainer}>
                        <CustomTopLabelInput label="CPF" />
                        <CustomInputs hintText="Digite o seu CPF" onChangeText = {(text) => setCpf(text)} />
                        <CustomTopLabelInput label="Senha" />
                        <CustomPasswordInput hintText='Digite sua senha' onChangeText = {(text) => setPass(text)} />
                        <View style={styles.saveOrForgotPasswordContainer}>
                            <View style={styles.switchButtonContainer}>
                                <CustomSwitchButton />
                                <Text style={styles.lowerTexT}>Lembrar</Text>
                            </View>
                            <TouchableOpacity onPress={changeStateResetPassModal}>
                                <Text style={styles.redText}>Esqueceu a senha?</Text>
                            </TouchableOpacity>
                        </View>
                        <CustomButtons Label="Fazer login" Color={{ Color: "#ed524a" }} onButtonPressed = {() => console.log(Cpf , Pass)} />
                        <CustomButtons
                            Label="Entrar sem fazer login"
                            Color={{ Color: "#FA8072" }}
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
                            <TouchableOpacity onPress={() => setIsAlertModalVisible(!isALertModalVisible)}>
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
                        <CustomCloseIcon onIconPressed = { changeStateResetPassModal }/>
                        <CustomTopLabelInput label="Redefinir senha" />
                        <CustomInputs hintText="Digite seu email " />
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

            <Modal animationType="fade" visible={loginModalVisible} transparent={true}>
                {height < 670 ? (
                    <ScrollView>{signInContent}</ScrollView>
                ) : (
                        <View style={{ flex: 1 }}>{signInContent}</View>
                    )}
            </Modal>

            {/* O Modal irá mostrar a sessão para recuperar a senha */}

            <Modal animationType="fade" visible={isModalResetPassVisible} transparent={true}>
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
                animationType={'slide'}

            >
                <View style={styles.BackModalScreen}>
                    <View style={styles.BackModalAlert}>
                        <CustomCloseIcon onIconPressed = { changeStateAlertModal }/>
                        <Text style={styles.TitleModalStyle}> Importante! </Text>
                        <View style={styles.SizedBox}></View>
                        <Text style={styles.SubTitleModalStyle}>
                            Você é estudante da UFPR? Caso o usuário que não for aluno,
                            não poderá fazer anúncios no aplicativo, mas terá o direito de
                            fazer compras
                        </Text>

                        {/* A navegação da página de login para a de cadastro, quando
                            o usuário não tiver nenhuma conta, tem que ser feita aqui 
                            a transição. Além disso, deve-se passar um parâmetro booleano
                            indicando qual opção o usuário escolher, haja vista que caso 
                            o usuário a se cadastrar seja um estudante da ufpr, adicionará
                            um textinput a mais
                        */}

                        <CustomButtons 
                            Label='Sim, sou estudante da UFPR' 
                            onButtonPressed={changeStateAlertModal} 
                        />
                        <CustomButtons 
                            Label='Não sou estudante da UFPR' 
                            onButtonPressed={changeStateAlertModal} 

                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Home;
