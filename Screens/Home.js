import React , { useState } from 'react'; 
import { 
    View , 
    Text , 
    StyleSheet , 
    Image ,  
    ScrollView, 
    Modal,
    TouchableHighlight,
    Dimensions, 
} from 'react-native';  
import CustomButtons from '../Components/CustomButtons/CustomButtons'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInputs from '../Components/CustomInputs/CustomInputs'; 
import CustomSwitchButton from '../Components/CustomSwitchButton/CustomSwitchButton';

const Home = () => {   
    const [ modalVisible , setModalVisible ] = useState(false); 

    const changeStateModal = () =>{
        setModalVisible(!modalVisible); 
    }

    return ( 
        <View style = {styles.screen}>
                <View style = {styles.topContaine}>
                    <View style = {styles.redContainer}></View> 
                    <Text style = {styles.normalText}>Plataforma de ação de venda</Text> 
                </View>           
                <View> 
                    <Image
                        source = {require('../assets/logo_com_nome.png')} 
                        style = {styles.image}
                    />
                </View>  

                 {/* O Modal irá mostrar a sessão para recuperar a senha */}
                 
                 <Modal
                    animationType = 'slide' 
                    transparent = {true} 
                    visible = {modalVisible}
                > 
                    <View style = {styles.modalContainer}>
                        <ScrollView>
                            <View style = {{flexDirection : 'row' , justifyContent : 'flex-end'}}>
                                <TouchableHighlight onPress = {changeStateModal}>
                                    <Icon 
                                        color = {'#ed524a'}
                                        size = {15}
                                        name = 'close'
                                    />
                                </TouchableHighlight>
                            </View> 
                            <Text style = {styles.normalText}>Redefinir senha</Text> 
                            <CustomInputs hintText = 'Digite seu email '/> 
                            <Text style = {styles.lowerTexT}>
                                Enviaremos um email com as informações necessárias para a redefinação da senha
                            </Text> 
                            <CustomButtons Label = 'Enviar' Color = {{ Color : '#ed524a' }}/>
                        </ScrollView>
                    </View>
                </Modal>
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
                            <TouchableHighlight onPress = {changeStateModal}>
                                <Text style = {styles.redText}>Esqueceu a senha?</Text>
                            </TouchableHighlight>
                        </View>
                        <CustomButtons Label='Fazer login' Color={{Color:'#ed524a'}}/>   
                        <CustomButtons Label='Entrar sem fazer login' Color={{Color:'#FA8072'}}/>   
                        <View style = {{flexDirection : 'row' , justifyContent : 'center' , marginTop : 18 , alignItems : 'center'}}>
                            <Text style = {styles.lowerTexT}>Não tem conta?</Text>
                            <Text style = {styles.redText}> Faça o cadastro</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
    );
} 

export default Home; 

const height = Dimensions.get('window').height; 

const styles = StyleSheet.create({
    screen : {
        flex : 1 , 
        justifyContent : 'space-between' 
    },  

    topContaine : {
        flexDirection : 'row', 
        width : '100%', 
    },  

    switchButtonContainer : {
        flexDirection : 'row' , 
        alignItems : 'center' , 
        justifyContent : 'flex-start'
    }, 

    redContainer : {
        backgroundColor : '#ed524a', 
        height : 22, 
        width : 3,
        marginRight : 8, 
        borderRadius : 16 
    }, 

    normalText : {
        color : '#666666', 
        fontSize : 16, 
        fontWeight : '500'
    }, 
    
    saveOrForgotPasswordContainer : {
        flexDirection : 'row' , 
        justifyContent : 'space-between'  , 
        alignItems : 'center'
    },

    lowerTexT : {
        color : '#666666' , 
        fontSize : 12 , 
        fontWeight : '500', 
    }, 

    redText : {
        color : '#ed524a' , 
        fontSize : 14 , 
        fontWeight : 'bold'
    },
    
    image : { 
        alignSelf : 'center',
        width : 250, 
        height : 170,
    }, 

    textInputLayout : {
        color : 'red',   
    }, 

    inputsContainer : {
        width : '100%',  
        height : '55%',
        justifyContent : 'space-between',
        borderRadius : 16, 
        backgroundColor : 'white', 
        paddingHorizontal : 18,
        paddingVertical : 24, 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },   
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },  

    modalContainer : {  
        flex : 1 , 
        justifyContent : 'space-around', 
        alignContent : 'stretch', 
        marginTop : height * 0.4,
        marginHorizontal : 18,
        borderRadius : 16, 
        backgroundColor : 'white', 
        paddingHorizontal : 18,
        paddingVertical : 24, 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },   
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,  
    },

    loginButton : { 
        width : '100%',
        backgroundColor : '#ed524a', 
        borderRadius : 16, 
    }

})
