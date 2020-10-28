import React, { useState, useEffect } from 'react'
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { View, SafeAreaView, Text, Image, Modal } from 'react-native';
import CustomInput from '../../components/CustomInputs'
import CustomButtons from '../../components/CustomButtons'
import CustomTopLabel from '../../components/CustomTopLabelInput'
import { styles } from './styles';
import FontSizes from '../../data/FontSizes';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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

const ConfirmRegister = ({ navigation }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false)
    const [showModalSuccess, setShowModalSuccess] = useState(false)
    const [showModalFail, setShowModalFail] = useState(false)

    const [remainingTime, setRemaininnTime] = useState(10)
    const [remainingSecs, setRemainingSecs] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const { mins, secs } = getRemaining(remainingSecs);

    const [code, setCode] = useState('')
    const [errorInCode, setErrorInCode] = useState({
        error: false,
        message: ''
    })

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

    const ResendCode = () => {

    }

    const isEmpty = (text) => {
        return text.length === 0 ? true : false;
    }

    const onSubmitt = () => {
        if (!isEmpty(code)) {
            console.log('continua')
            setShowModalSuccess(true)
        } else {
            setErrorInCode({
                error: true,
                message: 'Este campo precisa ser preenchido'
            })
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

                <View>
                    <Text style={styles.title}>
                        Seja Bem vindo novo usuário!
                    </Text>
                    <View style={{ height: 18 }}></View>
                    <Text style={styles.subTitle}>
                        Agora que você já se cadastrou na nossa plataforma, precisamos que você confirme o seu email.
                    </Text>
                    <View style={{ height: 9 }}></View>
                    <Text style={styles.instructions}>
                        Para isso, precisamos que você entre no email cadastrado, pois enviamos um email com um código que deverá ser inserido
                        no campo a baixo
                    </Text>
                </View>

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

                <View
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        bottom: 0,
                        overflow: 'hidden'
                    }}
                >
                    <Image
                        source={require("../../assets/logo.png")}
                        style={{ alignSelf: "center", width: 55, height: 55 }}
                    />
                </View>


            </SafeAreaView>
        )
    } else {
        return <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontsLoaded(true)}
        />
    }
}

export default ConfirmRegister; 