import React, { useState, useEffect } from 'react'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { View, SafeAreaView, Text, Image, Modal } from 'react-native';
import CustomInput from '../../components/CustomInputs'
import CustomButtons from '../../components/CustomButtons'
import CustomTopLabel from '../../components/CustomTopLabelInput'
import CustomPasswordInput from '../../components/CustomPasswordInput';
import { styles } from './styles';
import FontSizes from '../../data/FontSizes';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';

const getFonts = () =>
    Font.loadAsync({
        "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
        "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
        "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
        'Mplus-semi': require('../../assets/fonts/MPLUSRounded1c-Medium.ttf'),
        'Mplus-bold': require('../../assets/fonts/MPLUSRounded1c-Bold.ttf')
    });

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

const ForgotPassword = ({ navigation }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    const [showModalSuccess, setShowModalSuccess] = useState(false)
    const [showModalFail, setShowModalFail] = useState(false)

    const [remainingTime, setRemaininnTime] = useState(10)
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const { mins, secs } = getRemaining(remainingSecs);

    const [code, setCode] = useState('')
    const [DefinePass, setDefinePass] = useState("");
    const [ConfirmPass, setConfirmPass] = useState("");

    const [errorInCode, setErrorInCode] = useState({
        error: false,
        message: ''
    })
    const [errorInPass, setErrorInPass] = useState({
        error: false,
        message: "",
    });
    const [errorInRevPass, setErrorInRevPass] = useState({
        error: false,
        message: "",
    });

    const CodeHandler = (text) => {
        if (errorInCode.error) {
            setErrorInCode({
                error: false,
                message: ''
            })
        }
        setCode(text)
        console.log(code)
    }

    const PassHandler = (text) => {
        if (errorInPass.error) {
            setErrorInPass({
                error: false,
                message: "",
            });
        }
        setDefinePass(text);
    };

    const RevPassHandler = (text) => {
        if (errorInRevPass.error) {
            setErrorInRevPass({
                error: false,
                message: "",
            });
        }
        setConfirmPass(text);
    };

    const ResendCode = () => {

    }

    const isEmpty = (text) => {
        return text.length === 0 ? true : false;
    }

    const onSubmitt = () => {
        if (!isEmpty(code) && !isEmpty(DefinePass) && !isEmpty(ConfirmPass) && DefinePass === ConfirmPass) {
            console.log('continua')
            setShowModalSuccess(true)
        } else {
            if(isEmpty(code)){
                setErrorInCode({
                    error: true,
                    message: 'Este campo precisa ser preenchido'
                })
            }
            if(isEmpty(DefinePass)){
                setErrorInPass({
                    error: true,
                    message: 'Este campo precisa ser preenchido'
                })
            } 
            if(isEmpty(ConfirmPass)){
                setErrorInRevPass({
                    error: true,
                    message: 'Este campo precisa ser preenchido'
                })
            }
            if(DefinePass !== ConfirmPass){
                setErrorInRevPass({
                    error: true,
                    message: 'As senhas não batem'
                })
            }
            
            setShowModalFail(true)
        }
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (remainingSecs == 300) {
                    setIsActive(false)
                } else {
                    setRemainingSecs(remainingSecs => remainingSecs + 1);
                }
            }, 1000);
        } else if (!isActive && remainingSecs !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, remainingSecs]);

    if (fontsLoaded) {
        return (
            <SafeAreaView style={styles.screen}>

                {/* Esse modal irá mostrar um Alerta customizado confirmando de sucessso */}
                <Modal
                    visible={showModalSuccess}
                    transparent={true}
                    animationType={"slide"}
                >
                    <View style={styles.BackModalScreen}>
                        <View style={styles.BackModalAlert}>
                            <Text style={styles.TitleModalStyle}>O código foi verificado com sucesso</Text>
                            <CustomButtons
                                Label="Ok!"
                                onButtonPressed={() => {
                                    setShowModalSuccess(false)
                                    navigation.navigate('Products')
                                }}
                            />
                        </View>
                    </View>
                </Modal>

                {/* Esse modal irá mostrar um Alerta customizado confirmando de Falha */}
                <Modal
                    visible={showModalFail}
                    transparent={true}
                    animationType={"slide"}
                >
                    <View style={styles.BackModalScreen}>
                        <View style={styles.BackModalAlert}>
                            <Text style={styles.TitleModalStyle}>Houve falha na verificação do código</Text>
                            <CustomButtons
                                Label="Ok!"
                                onButtonPressed={() => {
                                    setShowModalFail(false)
                                }}
                            />
                        </View>
                    </View>
                </Modal>

                <ScrollView>
                    <View>
                        <Text style={styles.title}>
                            Recuperar senha         
                        </Text>
                        <View style={{ height: 18 }}></View>
                        <Text style={styles.subTitle}>
                            Essa página é responsável por cadastrar uma nova senha para você!
                        </Text>
                        <View style={{ height: 9 }}></View>
                        <Text style={styles.instructions}>
                            Para isso, precisamos que você entre no email cadastrado, pois enviamos um email com um código que deverá ser inserido
                            no campo a baixo. Além disso, já insira uma nova senha, porque se a verificação for feita com sucesso já iremos recadastrar sua senha
                    </Text>
                    </View>
                    
                    <View style={{ marginTop: 28 }}/>

                    <View style={styles.inputs}>
                        <CustomTopLabel
                            label='Código'
                        />
                        <CustomInput
                            hintText=''
                            error={errorInCode.error}
                            errorMessage={errorInCode.message}
                            onChangeText={(text) => CodeHandler(text)}
                        />
                        <CustomTopLabel label="Defina a senha" />
                        <CustomPasswordInput
                            hintText="Digite uma nova senha"
                            error={errorInPass.error}
                            value={DefinePass}
                            errorMessage={errorInPass.message}
                            onChangeText={(text) => PassHandler(text)}
                        />

                        <CustomTopLabel label="Repita a senha" />
                        <CustomPasswordInput
                            hintText="Repita sua nova senha"
                            error={errorInRevPass.error}
                            value={ConfirmPass}
                            errorMessage={errorInRevPass.message}
                            onChangeText={(text) => RevPassHandler(text)}
                        />
                        <CustomButtons
                            Label='Verificar'
                            onButtonPressed={onSubmitt}
                        />
                        <CustomButtons
                            Label='Reinviar código'
                            onButtonPressed={ResendCode}
                        />
                        <View style={{ marginTop: 18 }}>
                            <Text style={styles.timerWarning}>
                                O código irá expirar quando o timer chegar em 5 minutos
                        </Text>
                            <Text style={styles.timer}>
                                {`${mins}:${secs}`}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    } else {
        return <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontsLoaded(true)}
        />
    }
}

export default ForgotPassword; 