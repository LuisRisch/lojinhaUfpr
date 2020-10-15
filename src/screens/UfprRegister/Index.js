import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInputs from "../../components/CustomInputs";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import CustomButtons from "../../components/CustomButtons";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { styles } from './Styles';

const UfprRegister = ({navigation}) => {

    const [Cpf, setCpf] = useState("");
    const CpfHandler = (text) => {
        if (errorInGrr) {
            setErrorInGrr(false);
        }
        setCpf(text);
    };

    const [Pass, setPass] = useState("");
    const PassHandler = (text) => {
        if (errorInPass) {
            setErrorInPass(false);
        }
        setPass(text);
    };

    const [errorInCpf, setErrorInCpf] = useState(false);
    const [errorInPass, setErrorInPass] = useState(false);  

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
        if(!isValidCPF(Cpf)){
            setErrorInCpf(true)
            setCpf('');
        } 
        if(Pass.length <=1 ){
            setErrorInPass(true)
            setPass('')
        } 
        if(!errorInCpf && !errorInPass){
            navigation.navigate('FinishUfprRegister')
        }
    }

    return (
        <View style={styles.Screen}>
            <ScrollView>
                <View style={{alignSelf : 'flex-end'}}>
                    <CustomCloseIcon icon="arrow-circle-left" onPress={handleBack}/>
                </View>
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
                <View style={{ height: 36 }}></View>
                <View style={styles.RestOfScreen}>
                    <View style={styles.inputsContainer}>
                        <CustomTopLabelInput label="CPF" />
                        <CustomInputs
                            hintText="Digite seu CPF"
                            onChangeText={(text) => CpfHandler(text)}
                            error={errorInCpf}
                            errorMessage="Esse Cpf não consta na nossa base de dados"
                        />

                        <CustomTopLabelInput label="Senha" />
                        <CustomPasswordInput
                            hintText="Digite sua senha"
                            onChangeText={(text) => PassHandler(text)}
                            error={errorInPass}
                            errorMessage="Essa senha não consta na nossa base de dados"
                        />
                        <CustomButtons
                            Label="Entrar"
                            Color={{ Color: "#ed524a" }}
                            onButtonPressed={handleSubmit}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default UfprRegister;
