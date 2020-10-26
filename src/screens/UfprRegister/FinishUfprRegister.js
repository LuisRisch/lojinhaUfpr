import React, { useState , useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Image, Dimensions } from 'react-native';
import CustomInputs from "../../components/CustomInputs";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomTopLabelInput from "../../components/CustomTopLabelInput";
import CustomPasswordInput from "../../components/CustomPasswordInput";
import CustomButtons from "../../components/CustomButtons";
import { styles } from './Styles'; 

import * as ImagePicker from "expo-image-picker";

const FinishUfprRegister = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [errorInEmail, setErrorInEmail] = useState({
        state: false,
        message: '',
    })
    const [email, setEmail] = useState('');
    const EmailHandler = (text) => {
        if (errorInEmail.state) {
            const obj = { ...errorInEmail }
            obj.state = false;
            obj.message = '';
            setErrorInEmail(obj)
        }
        setEmail(text)
    }

    const [
        isConfirmRegisterModalVisible,
        setIsConfirmRegisterModalVisible,
    ] = useState(false);

    const changeStateConfirmModal = () => {
        setIsConfirmRegisterModalVisible(!isConfirmRegisterModalVisible);
    };

    const onSubmitt = () => {
        if (email.length <= 1) {
            const obj = { ...email }
            obj.state = true
            obj.message = 'O email é pequeno'
            setErrorInEmail(obj)
        } else if (!email.includes('@')) {

            setErrorInEmail({
                state: true,
                message: 'O email não contem @'
            })
        }

        if (email.length >= 1 && email.includes('@')) {
            changeStateConfirmModal()
        }
    }

    const handleImagePick = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.7,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }

    };

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== "granted") {
                    Alert.alert(
                        "Permissões necessárias",
                        "Necessitamos de algumas permissões para poder cadastrar produtos!"
                    );
                }
            }
        })();
    }, []);

    const height = Dimensions.get("window").height;
    const content = <View style={styles.Screen}>
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
                        onButtonPressed={() => {
                            setIsConfirmRegisterModalVisible(!isConfirmRegisterModalVisible)
                            navigation.navigate('ConfirmRegister')
                        }}
                    />
                </View>
            </View>
        </Modal>

        <View>
            <Text style={styles.Title}>
                Olá, Nome_Discente
        </Text>
            <View style={{ height: 18 }}></View>
            <Text style={styles.Instructions}>
                Agora que você foi autenticado pelo SIGA, precisamos de algumas informações extras para a utilização do App.
                A partir de agora, você poderá logar no App com seu CPF e a senha definidos nos campos inferiores.
        </Text>
            <View style={{ height: 36 }}></View>
            <View>
                <View>
                    <Text style={styles.SubTitle}>
                        Escolha uma foto de perfil
                    </Text>
                    {
                        image === null ?
                            <TouchableOpacity onPress={handleImagePick}>
                                <View style={styles.ChoosePhoto}>
                                    <Icon name="camera" size={25} color="white" />
                                </View>
                            </TouchableOpacity>

                            :

                            <Image
                                style={styles.PerfilPhoto}
                                source={{ uri: image }}
                            />

                    }
                    <CustomTopLabelInput label="Email" />
                    <CustomInputs
                        hintText='beatriznogueira@ufpr.br'
                        error={errorInEmail.state}
                        value={email}
                        errorMessage={errorInEmail.message}
                        onChangeText={(text) => EmailHandler(text)}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={onSubmitt}>
                        <Text style={styles.buttonLabel}>
                            Criar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={{ height: 36 }}></View>
        <View
            style={{
                flexDirection: "column-reverse",
                flex: 1,
                justifyContent: 'flex-start',
                overflow: 'hidden'
            }}
        >
            <Image
                source={require("../../assets/logo.png")}
                style={{ alignSelf: "center", width: 55, height: 55 }}
            />
        </View>
    </View>

    return (
        height <= 670 ? <ScrollView>{content}</ScrollView> : content

    );
}

export default FinishUfprRegister;