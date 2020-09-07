import React from 'react'; 
import { 
    View, 
    Text, 
    StyleSheet, 
    Image,  
    ScrollView 
} from 'react-native';  

import CustomButtons from 'components/CustomButtons'; 
import CustomInputs from 'components/CustomInputs'; 
import CustomSwitchButton from 'components/CustomSwitchButton';

import Colors from 'constants/Colors';

export default function LoginScreen({ props }) {    
    return (
        <View style = {styles.screen}>
                <View style = {styles.topContaine}>
                    <View style = {styles.redContainer}></View> 
                    <Text style = {styles.normalText}>Plataforma de ação de venda</Text> 
                </View>           
                <View> 
                    <Image
                        source = {require('assets/logo_com_nome.png')} 
                        style = {styles.image}
                    />
                </View> 
                <View style = {styles.inputsContainer}>
                    <ScrollView>
                        <Text style = {styles.normalText}>CPF</Text>
                        <CustomInputs hintText = 'Digite o seu CPF'/> 
                        <Text style = {styles.normalText}>Senha</Text> 
                        <CustomInputs hintText = 'Digite sua senha'/>
                        <View style = {styles.saveOrForgotPasswordContainer}>
                            <View style = {styles.switchButtonContainer}>
                                <CustomSwitchButton />
                                <Text style = {styles.lowerTexT}>Lembrar</Text>
                            </View> 
                            <Text style = {styles.redText}>Esqueceu a senha?</Text>
                        </View>
                        <CustomButtons Label='Fazer login' Color={{Color: Colors.mainRed}}/>   
                        <CustomButtons Label='Entrar sem fazer login' Color={{Color: Colors.mainPink}}/>   
                        <View style = {{flexDirection: 'row', justifyContent: 'center', marginTop: 18, alignItems: 'center'}}>
                            <Text style = {styles.lowerTexT}>Não tem conta?</Text>
                            <Text style = {styles.redText}> Faça o cadastro</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
    );
} 

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'space-between' 
    },  

    topContaine: {
        flexDirection: 'row', 
        width: '100%', 
    },  

    switchButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    }, 

    redContainer: {
        backgroundColor: Colors.mainRed, 
        height: 22, 
        width: 3,
        marginRight: 8, 
        borderRadius: 16 
    }, 

    normalText: {
        color: Colors.mainGrey, 
        fontSize: 16, 
        fontWeight: '500'
    }, 
    
    saveOrForgotPasswordContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between' , 
        alignItems: 'center'
    },

    lowerTexT: {
        color: Colors.mainGrey, 
        fontSize: 12, 
        fontWeight: '500'
    }, 

    redText: {
        color: Colors.mainRed, 
        fontSize: 14, 
        fontWeight: 'bold'
    },
    
    image: { 
        alignSelf: 'center',
        width: 250, 
        height: 170,
    }, 

    textInputLayout: {
        color: 'red',   
    }, 

    inputsContainer: {
        width: '100%',  
        height: '55%',
        justifyContent: 'space-between',
        borderRadius: 16, 
        backgroundColor: 'white', 
        paddingHorizontal: 18,
        paddingVertical: 24,  
    }, 

    loginButton: { 
        width: '100%',
        backgroundColor: Colors.mainRed, 
        borderRadius: 16, 
    }

})
