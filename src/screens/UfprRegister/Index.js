import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import CustomInputs from "../../components/CustomInputs";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import CustomButtons from "../../components/CustomButtons";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { styles } from './Styles';
import { ScrollView } from "react-native-gesture-handler"; 

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

const UfprRegister = ({ navigation }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [Cpf, setCpf] = useState("");
    const [Pass, setPass] = useState("");
    const [errorInCpf, setErrorInCpf] = useState({
        state: false,
        message: ''
    });
    const [errorInPass, setErrorInPass] = useState({
        state: false,
        message: ''
    });

    const CpfHandler = (text) => {
        if (errorInCpf.state) {
            setErrorInCpf({
                state: false,
                message: ''
            });
        }
        setCpf(text);
    };

    const PassHandler = (text) => {
        if (errorInPass.state) {
            setErrorInPass({
                state: false,
                message: ''
            });
        }
        setPass(text);
    };

    const handleBack = () => {
        navigation.navigate('Login')
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

    const handleSubmit = () => {
        //Se estiver tudo bem com o login com o SIGA, o usuário será direcionado para a pagina de completar o cadatsro, 
        if (!isValidCPF(Cpf)) {
            setErrorInCpf({
                state: true,
                message: 'CPF é inválido'
            })
            setCpf('');
        }
        if (Pass.length <= 1) {
            setErrorInPass({
                state: true,
                message: 'Senha é inválido'
            })
            setPass('')
        }
        if (isValidCPF(Cpf) && Pass.length >= 1) {
            navigation.navigate('FinishUfprRegister')
        }
    }

    const height = Dimensions.get("window").height;
    const content = <View style={styles.Screen}>
        <View>
            <View style={{ alignSelf: 'flex-end' }}>
                <CustomCloseIcon icon="arrow-circle-left" onPress={handleBack} />
            </View>
            <View>
                <Text style={styles.Title}>Instruções</Text>
                <View style={{ height: 18 }}></View>
                <Text style={styles.SubTitle}>Olá discente!</Text>
                <Text style={styles.Instructions}>
                    O Aplicativo utiliza o Login com o SIGA. Desta forma, você não irá
                    precisar preencher todo o formulário de inscrição que pessoas externas a
                    UFPR precisa fazer. Portanto, por agora precisamos que você utiliza as
                    complete os campos a baixo. Após isso, você será direcionado para uma
                    páǵina para completar o cadastro
            </Text>
            </View>
            <View style={{ height: 36 }}></View>
            <View style={{ width: '100%' }}>
                <CustomTopLabelInput label="CPF" />
                <CustomInputs
                    hintText="Digite seu CPF"
                    onChangeText={(text) => CpfHandler(text)}
                    error={errorInCpf.state}
                    errorMessage={errorInCpf.message}
                />

                <CustomTopLabelInput label="Senha" />
                <CustomPasswordInput
                    hintText="Digite sua senha"
                    onChangeText={(text) => PassHandler(text)}
                    error={errorInPass.state}
                    errorMessage={errorInPass.message}
                />
                <CustomButtons
                    Label="Entrar"
                    Color={{ Color: "#ed524a" }}
                    onButtonPressed={handleSubmit}
                />
            </View>
        </View>
        <View style={{height : 36}}></View>
        <View
            style={{
                flexDirection: "column-reverse",
                flex: 1,
                justifyContent: "space-between",
                overflow : 'hidden'
            }}
        >
            <Image
                source={require("../../assets/logo.png")}
                style={{ alignSelf: "center", width: 55, height: 55 }}
            />
        </View>
    </View>
    
    if(fontsLoaded){
        if (height <= 670){
            return(
                <ScrollView>
                    {content}
                </ScrollView>
            )
        } else{
            return(
                content
            )
        }
    } else{
        return <AppLoading
            startAsync={getFonts} 
            onFinish={() => setFontsLoaded(true)}
        />
    }
};

export default UfprRegister;
