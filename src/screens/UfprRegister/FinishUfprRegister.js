import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import CustomInputs from "../../components/CustomInputs";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import CustomButtons from "../../components/CustomButtons";
import { styles } from './Styles';

const FinishUfprRegister = () => {
    const [Cpf, setCpf] = useState("");
    const [DefinePass, setDefinePass] = useState("");
    const [ConfirmPass, setConfirmPass] = useState("");

    const [errorInCpf, setErrorInCpf] = useState(false);
    const [errorInPass, setErrorInPass] = useState(false);
    const [errorInRevPass, setErrorInRevPass] = useState(false);

    const [
        isConfirmRegisterModalVisible,
        setIsConfirmRegisterModalVisible,
    ] = useState(false);

    // Catch the char of the field

    const CpfHandler = (text) => {
        if (errorInCpf) {
            setErrorInCpf(!errorInCpf)
        }
        setCpf(text)
        console.log(Cpf)
    }

    const PassHandler = (text) => {
        if (errorInPass) {
            setErrorInPass(!errorInPass)
        }
        setDefinePass(text)
        console.log(DefinePass)
    }

    const RevPassHandler = (text) => {
        if (errorInRevPass) {
            setErrorInRevPass(!errorInRevPass)
        }
        setConfirmPass(text)
        console.log(ConfirmPass);
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

    const onSubmitt = () => {
        if (!isValidCPF(Cpf)) {
            setErrorInCpf(true)
            setCpf('')
        }

        if (!isValidPass(DefinePass)) {
            setErrorInPass(true)
            setDefinePass('');
        }

        if (DefinePass !== ConfirmPass) {
            setErrorInRevPass(true)
        }
        if (!errorInCpf && !errorInPass && !errorInRevPass) {
            setIsConfirmRegisterModalVisible(!isConfirmRegisterModalVisible)
        }
    }

    return (
        <View style={styles.Screen}>

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
                            link='/MainProducts'
                        />
                    </View>
                </View>
            </Modal>

            <ScrollView>
                <Text style={styles.Title}>
                    Olá, Nome_Discente
                </Text>
                <View style={{ height: 18 }}></View>
                <Text style={styles.Instructions}>
                    Agora que você foi autenticado pelo SIGA, precisamos de algumas informações extras para a utilização do App.
                    A partir de agora, você poderá logar no App com seu CPF e a senha definidos nos campos inferiores.
                </Text> 
                <View style={{height: 36}}>
                </View>
                <View style={styles.RestOfScreen}>
                    <View style={styles.inputsContainer}>
                        <Text style={styles.SubTitle}>
                            Escolha uma foto de perfil
                    </Text>
                        <TouchableOpacity>
                            <View style={styles.ChoosePhoto}>
                                <Icon name="camera" size={25} color="white" />
                            </View>
                        </TouchableOpacity>
                        <CustomTopLabelInput label="CPF" />
                        <CustomInputs
                            hintText="111111111-11"
                            error={errorInCpf}
                            value={Cpf}
                            errorMessage='Esse Cpf é inválido'
                            onChangeText={(text) => CpfHandler(text)}
                        />
                        <CustomTopLabelInput label="Defina a senha" />
                        <CustomPasswordInput
                            hintText="Digite sua senha"
                            error={errorInPass}
                            value={DefinePass}
                            errorMessage='Senha inválido'
                            onChangeText={(text) => PassHandler(text)}
                        />

                        <CustomTopLabelInput label="Repita a senha" />
                        <CustomPasswordInput
                            hintText="Repita sua senha"
                            error={errorInRevPass}
                            value={ConfirmPass}
                            errorMessage='O campo digitado não está igual ao da senha'
                            onChangeText={(text) => RevPassHandler(text)}
                        />
                        <TouchableOpacity style={styles.buttonContainer} onPress={onSubmitt}>
                            <Text style={styles.buttonLabel}>
                                Criar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default FinishUfprRegister;