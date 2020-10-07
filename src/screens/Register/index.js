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
import { Link } from "react-router-native";

const Register = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Cpf, setCpf] = useState("");
    const [Grr, setGrr] = useState("");
    const [DefinePass, setDefinePass] = useState("");
    const [ConfirmPass, setConfirmPass] = useState("");

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

        // console.log(Name);
        // console.log(Email);
        // console.log(Cpf);
        // console.log(Grr);
        // console.log(DefinePass);
        // console.log(ConfirmPass);
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

    // Register screen irá receber um parâmetro através de prop indicando se o usuária a se cadastrar
    // é ou não estudante da ufpr. Se o usuário for estudante da ufpr, irá acrescentar uma input a mais
    // o do GRR.

    // Essa variável é um exemplo de como vai funcionar.
    let isStudentFromUfpr = true;

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
                            link='/MainProducts'
                            onButtonPressed={changeStateConfirmModal}
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
                    <View style={styles.backIcon}>
                        <CustomCloseIcon icon="arrow-circle-left" link='/' />
                    </View>
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
                        onChangeText={(text) => setName(text)}
                    />

                    <CustomTopLabelInput label="Email" />
                    <CustomInputs
                        hintText="beatriznogueira@gmail.com"
                        onChangeText={(text) => setEmail(text)}
                    />

                    <CustomTopLabelInput label="CPF" />
                    <CustomInputs
                        hintText="111111111-11"
                        onChangeText={(text) => setCpf(text)}
                    />

                    {isStudentFromUfpr ? (
                        <View>
                            <CustomTopLabelInput label="GRR" />
                            <CustomInputs
                                hintText="GRR20203940"
                                onChangeText={(text) => setGrr(text)}
                            />
                        </View>
                    ) : (
                            <View></View>
                        )}

                    <CustomTopLabelInput label="Defina a senha" />
                    <CustomPasswordInput
                        hintText="Digite sua senha"
                        onChangeText={(text) => setDefinePass(text)}
                    />

                    <CustomTopLabelInput label="Repita a senha" />
                    <CustomPasswordInput
                        hintText="Repita sua senha"
                        onChangeText={(text) => setConfirmPass(text)}
                    />

                    <Text style={styles.lowerTexT}>
                        *Para a sua segurança, coloque uma senha com letras e números
                    </Text>

                    {isCheckBoxSelected ? (
                        <TouchableOpacity style={styles.buttonContainer} onPress={changeStateConfirmModal}>
                            <Text style={styles.buttonLabel}>
                                Entendido
                            </Text>
                        </TouchableOpacity>
                    ) : (
                            <View></View>
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
                        justifyContent: "space-between",
                    }}
                >
                    <Image
                        source={require("../../assets/logo.png")}
                        style={{ alignSelf: "center", width: 70, height: 70 }}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Register;
