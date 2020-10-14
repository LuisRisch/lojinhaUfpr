import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomInputs from "../../components/CustomInputs";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import CustomButtons from "../../components/CustomButtons";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { styles } from './Styles';

const UfprRegister = () => {

    const [Grr, setGrr] = useState("");
    const GrrHandler = (text) => {
        if (errorInGrr) {
            setErrorInGrr(true);
        }
        setGrr(text);
    };

    const [Pass, setPass] = useState("");
    const PassHandler = (text) => {
        if (errorInPass) {
            setErrorInPass(true);
        }
        setPass(text);
    };

    const [errorInGrr, setErrorInGrr] = useState(false);
    const [errorInPass, setErrorInPass] = useState(false);

    return (
        <View style={styles.Screen}>
            <ScrollView>
                <CustomCloseIcon icon="arrow-circle-left" link='/' />
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
                        <CustomTopLabelInput label="GRR" />
                        <CustomInputs
                            hintText="Digite o seu GRR"
                            onChangeText={(text) => GrrHandler(text)}
                            error={errorInGrr}
                            errorMessage="Esse Grr não consta na nossa base de dados"
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
                            link="/FinishUfprRegister"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default UfprRegister;
