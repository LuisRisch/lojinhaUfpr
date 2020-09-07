import React , { useState }from 'react'; 
import { 
    View , 
    StyleSheet , 
    Text , 
    Dimensions , 
    ScrollView , 
    CheckBox, 
    Alert,
    TouchableOpacity,
    Modal, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import CustomButtons from '../Components/CustomButtons/CustomButtons'; 
import CustomInputs from '../Components/CustomInputs/CustomInputs'; 
import CustomTopLabelInput from '../Components/CustomTopLabelInput/CustomTopLabelInput'; 
 
const widht = Dimensions.get('window').width; 

const Register = () => { 

    const [ isCheckBoxSelected , setIsCheckBoxSelected ] = useState( false ); 
    const changeStateCheckBox = () => {
        setIsCheckBoxSelected(!isCheckBoxSelected);
    }   

    const createButtonAlertCameraOrGallery  = () =>
    Alert.alert(
      "Escolha uma foto",
      "Você deseja abrir a galeria ou a câmera?",
      [
        {
            text: "Câmera",
            onPress: () => console.log("Open camera"),
        },
        {   
            text: "Galeria", 
            onPress: () => console.log("Open gallery"), 
        }
      ],
      { cancelable: false }
    ); 

    const [ isModalVisible , setIsModalVisible ] = useState( false ); 

    // Register screen irá receber um parâmetro através de prop indicando se o usuária a se cadastrar 
    // é ou não estudante da ufpr. Se o usuário for estudante da ufpr, irá acrescentar uma input a mais 
    // o do GRR.

    let isStudentFromUfpr = true;

    return (
        <View style = {styles.screen}> 
            <Modal
                visible = { isModalVisible }
                transparent = { true } 
                animationType = { 'slide' }
    
            >
                <View style = {{ flex : 1 , backgroundColor : '#bfbfbf' , opacity : 0.65 , justifyContent : 'center' , alignItems : 'center'}}>
                    <View style = {{ backgroundColor : 'white' ,  marginHorizontal : 18 , height : 200 , width : '80%' , opacity : 1}}>

                    </View>
                </View>
            </Modal>
            <ScrollView>
                <View style = {styles.topContaine}>
                    <View style = {styles.backIcon}>
                        <Icon
                            name = 'close'
                            size = {18}
                            color = '#FA8072'
                        />
                    </View>
                    <Text style = {styles.normalTextTitle}>Cadastro</Text>
                </View> 
                <TouchableOpacity onPress = { () => setIsModalVisible(!isModalVisible) }>
                    <View style = {{ justifyContent : 'center' , alignItems : 'center'  , height : 150 , width : 150 , backgroundColor : '#b8b8b8' , borderRadius : 75 , alignSelf : 'center' , marginVertical : 18,}}>
                        <Icon 
                            name = 'camera' 
                            size = {25} 
                            color = 'white'
                        />
                    </View>
                </TouchableOpacity> 
                <View>
        
                    <CustomTopLabelInput label = 'Nome'/>
                    <CustomInputs hintText = 'Beatriz Nogueira'/>  
                    
                    <CustomTopLabelInput label = 'Email'/>
                    <CustomInputs hintText = 'beatriznogueira@gmail.com'/>
                    
                    <CustomTopLabelInput label = 'CPF'/>
                    <CustomInputs hintText = '111111111-11'/> 

                    {isStudentFromUfpr ? 
                        <View>
                            <CustomTopLabelInput label = 'GRR'/>
                            <CustomInputs hintText = 'GRR20203940'/>
                        </View> 
                        
                        : 
                        
                        <View>
                        </View>
                    }
                    
                    <CustomTopLabelInput label = 'Defina a senha'/>
                    <CustomInputs hintText = ''/>
                    
                    <CustomTopLabelInput label = 'Repita a senha'/>
                    <CustomInputs hintText = ''/> 

                    <Text style = {styles.lowerTexT}>
                        *Para a sua segurança, coloque uma senha com letras e números
                    </Text> 

                    {isCheckBoxSelected ? <CustomButtons Label = 'Concluir'/> : <View></View>}

                    <View style = {{ flexDirection : 'row' , justifyContent : 'flex-start' , alignItems : 'center' , marginVertical : 18}}>
                        <CheckBox
                            value = { isCheckBoxSelected } 
                            onValueChange = { changeStateCheckBox } 
                        /> 
                        <Text style = {styles.lowerTextUnderline}>Li e aceito os termos de responsabilidade com a plataforma</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}; 

const styles = StyleSheet.create({
    screen : {
        flex : 1 , 
        justifyContent : 'space-between' , 
    },  

    topContaine : {
        flexDirection : 'row',
        alignItems : 'center',
        position : 'relative',  
        width : '100%', 
    }, 

    normalTextTitle : {
        color : '#666666', 
        fontSize : 20, 
        fontWeight : 'bold',  
        alignContent : 'center', 
        left : widht / 3.3
    }, 

    backIcon : { 
        top : 0, 
        left : 0, 
    }, 
    
    lowerTexT : {
        color : '#666666' , 
        fontSize : 12 , 
        fontWeight : '500', 
    },

    lowerTextUnderline : {
        color : '#666666' , 
        fontSize : 12 , 
        fontWeight : '500', 
        textDecorationLine : 'underline',
    },
});

export default Register;