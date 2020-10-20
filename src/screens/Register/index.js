import React, { useState } from "react";
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
import CustomButtons from "../../components/CustomButtons";
import CustomInputs from "../../components/CustomInputs";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { styles } from "./styles";
import Colors from '../../data/Colors';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFonts = () => Font.loadAsync({
    'ralway-regular': require('../../assets/fonts/Raleway-Regular.ttf'),
    'ralway-regular-semi': require('../../assets/fonts/Raleway-SemiBold.ttf'),
    'ralway-regular-bold': require('../../assets/fonts/Raleway-Bold.ttf'),
    'Mplus-semi': require('../../assets/fonts/MPLUSRounded1c-Medium.ttf'),
    'Mplus-bold': require('../../assets/fonts/MPLUSRounded1c-Bold.ttf')
})

const Register = ({ navigation }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Cpf, setCpf] = useState("");
    const [DefinePass, setDefinePass] = useState("");
    const [ConfirmPass, setConfirmPass] = useState("");

    // Shows error in input if some information is wrong
    const [errorInName, setErrorInName] = useState({
        error: false,
        message: '',
    });
    const [errorInEmail, setErrorinEmail] = useState({
        error: false,
        message: '',
    });
    const [errorInCpf, setErrorInCpf] = useState({
        error: false,
        message: '',
    });
    const [errorInPass, setErrorInPass] = useState({
        error: false,
        message: '',
    });
    const [errorInRevPass, setErrorInRevPass] = useState({
        error: false,
        message: '',
    });

    // Catch the char of the field
    const NameHandler = (text) => {
        if (errorInName.error) {
            setErrorInName({
                error: false,
                message: '',
            })
        }
        setName(text);
        console.log(Name)
    }

    const EmailHandler = (text) => {
        if (errorInEmail.error) {
            setErrorinEmail({
                error: false,
                message: '',
            })
        }
        setEmail(text)
        console.log(Email)
    }

    const CpfHandler = (text) => {
        if (errorInCpf.error) {
            setErrorInCpf({
                error: false,
                message: '',
            })
        }
        setCpf(text)
        console.log(Cpf)
    }

    const PassHandler = (text) => {
        if (errorInPass.error) {
            setErrorInPass({
                error: false,
                message: '',
            })
        }
        setDefinePass(text)
        console.log(DefinePass)
    }

    const RevPassHandler = (text) => {
        if (errorInRevPass.error) {
            setErrorInRevPass({
                error: false,
                message: '',
            })
        }
        setConfirmPass(text)
        console.log(ConfirmPass);
    }

    function VerifyLenght(text) {
        return text.length >= 1 ? true : false
    }

    function IsEmail(email) {
        return email.includes('@');
    }

    function isValidCPF(cpf) {
        if (typeof cpf !== 'string') return false;
        cpf = cpf.replace(/[\s.-]*/gim, '');
        if (
            !cpf ||
            cpf.length != 11 ||
            cpf == '00000000000' ||
            cpf == '11111111111' ||
            cpf == '22222222222' ||
            cpf == '33333333333' ||
            cpf == '44444444444' ||
            cpf == '55555555555' ||
            cpf == '66666666666' ||
            cpf == '77777777777' ||
            cpf == '88888888888' ||
            cpf == '99999999999'
        ) {
            return false;
        }
        let soma = 0;
        let resto;
        for (let i = 1; i <= 9; i++)
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(cpf.substring(9, 10))) return false;
        soma = 0;
        for (let i = 1; i <= 10; i++)
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        resto = (soma * 10) % 11;
        if (resto == 10 || resto == 11) resto = 0;
        if (resto != parseInt(cpf.substring(10, 11))) return false;
        return true;
    }

    function isValidPass(pass) {
        return pass.length >= 8 ? true : false
    }

    //Function that verifies everything before complete the registration
    const onSubmitt = () => {
        if (!VerifyLenght(Name)) {
            setErrorInName({
                error: true,
                message: 'Preencha o campo'
            })
            setName('')
        }

        if (VerifyLenght(Email)) {
            if (!IsEmail(Email)) {
                setErrorinEmail({
                    error: true,
                    message: 'O email digitado não contêm @'
                })
                setEmail('')
            }
        } else {
            setErrorinEmail({
                error: true,
                message: 'Preencha o campo'
            })
            setEmail('')
        }

        if (!isValidCPF(Cpf)) {
            setErrorInCpf({
                error: true,
                message: 'O cpf não é válido'
            })
            setCpf('')
        }

        if (!isValidPass(DefinePass)) {
            setErrorInPass({
                error: true,
                message: 'A senha tem que ter 8 ou mais caracteres'
            })
            setDefinePass('');
        }

        if (DefinePass !== ConfirmPass) {
            setErrorInRevPass({
                error: true,
                message: 'As senhas digitados não são iguais'
            })
        }
        if (errorInName || errorInCpf || errorInEmail || errorInPass || errorInRevPass) {
            return
        } else {
            setIsConfirmRegisterModalVisible(!isConfirmRegisterModalVisible)
        }

    }

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
            setIsCheckBoxSelected(!isCheckBoxSelected);
        }
        setIsConsentTermsModalVisible(!isConsentTermsModalVisible);
    };

    const BackIconHandler = () => {
        navigation.navigate('Login')
    }

    if (fontsLoaded) {
        return (
            <View style={styles.screen}>
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
                                onButtonPressed={() => navigation.navigate('MainProducts')}
                            />
                        </View>
                    </View>
                </Modal>

                {/* Esse modal irá mostrar os termos de consentimento */}

                <Modal
                    visible={isConsentTermsModalVisible}
                    transparent={true}
                    animationType={"slide"}
                >
                    <View style={styles.BackModalScreen}>
                        <View style={styles.BackModalAlert}>
                            <TouchableOpacity onPress={changeStateTermsModal} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Icon
                                    name='close'
                                    color={Colors.mainRed}
                                    size={18}
                                />
                            </TouchableOpacity>
                            <Text style={styles.TitleModalStyle}>
                                Termos de consentimento
                            </Text>
                            <View style={styles.sizedBox}></View>
                            <ScrollView>
                                <Text style={styles.SubTitleModalStyle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing lit. Nam non
                                    lectus elit. Ut orci ex, pulvinar a efficitur aliquam, faucibus
                                    at mi. Ut in sem magna. In hac habitasse platea dictumst. Cras
                                    imperdiet, odio a egestas aliquet, dui nulla egestas justo, ut
                                    tempus lectus lorem at urna. Phasellus pellentesque id tellus
                                    vel feugiat. Pellentesque bibendum euismod augue, vel vehicula
                                    nibh porttitor non. Fusce molestie a odio et aliquet. Phasellus
                                    faucibus iaculis nulla sodales porttitor. Aenean molestie, urna
                                    vel fermentum cursus, massa velit suscipit nibh, sed mollis quam
                                    augue id nunc. Ut fringilla auctor elit sed gravida. In
                                    ullamcorper eu magna eu dapibus. Phasellus sodales lacus est, id
                                    bibendum urna varius ut. Maecenas elementum sapien sed lacus
                                    commodo, eget ultricies lacus rhoncus. Suspendisse lorem libero,
                                    interdum eget neque et, sagittis dictum mauris. Curabitur ut
                                    erat vitae nisi auctor posuere a eget odio. Nam magna lorem,
                                    hendrerit eget suscipit et, ultricies in elit. Nunc commodo nunc
                                    eget turpis pretium laoreet. Phasellus lacinia id quam eu
                                    tristique. Nulla facilisis sodales bibendum. Quisque consequat
                                    aliquam pellentesque. Proin faucibus tincidunt est, vitae
                                    eleifend nulla vulputate interdum. Curabitur et sodales lacus.
                                    Pellentesque consequat erat auctor gravida varius.
                                </Text>
                                <TouchableOpacity style={styles.buttonContainer} onPress={onConsentTermsButtonPressed}>
                                    <Text style={styles.buttonLabel}>
                                        Entendido
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>

                <ScrollView>
                    <View style={styles.topContaine}>
                        <CustomCloseIcon icon="arrow-circle-left" onPress={BackIconHandler} />
                        <Text style={styles.normalTextTitle}>Cadastro</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.ChoosePhoto}>
                            <Icon name="camera" size={25} color="white" />
                        </View>
                    </TouchableOpacity>
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
                            <TouchableOpacity style={styles.buttonContainer} onPress={onSubmitt}>
                                <Text style={styles.buttonLabel}>
                                    Criar
                                </Text>
                            </TouchableOpacity>
                        ) : (
                                null
                            )}

                        <View style={styles.CheckBoxContainer}>
                            <CheckBox
                                value={isCheckBoxSelected}
                                onValueChange={changeStateCheckBox}
                            />
                            <TouchableWithoutFeedback onPress={changeStateTermsModal}>
                                <Text style={styles.lowerTextUnderline}>
                                    Li e aceito os termos de responsabilidade com a plataforma
                                </Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    {/* Está acontecendo algum bug, por algum motivo separa-se o estilo da imagem em um file 
                        diferente a imagem nao é redenrizada no app*/}
                    <View
                        style={{
                            flexDirection: "column-reverse",
                            flex: 1,
                            justifyContent: 'flex-start',
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
        return <AppLoading 
            startAsync={getFonts} 
            onFinish={() => setFontsLoaded(true)}
        />
    }

};

export default Register;