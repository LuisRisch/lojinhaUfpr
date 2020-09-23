import React from 'react'; 
import { View, Text } from 'react-native'; 
import CustomButton from '../../Components/CustomButtons/CustomButtons';  

//Deve receber o id do produto , id do vendedor  e id do interessado   
const ProductScreen = () => { 
    const onButtonPress = () => {
        // Deve se deslocar para a tela de chat
        console.log('td bão')
    }
    return(
        <View style={{flexDirection : 'column' , justifyContent: 'center' , alignItems : 'center' , flex: 1}}>
            <View style={{width:'100%'}}>
                <CustomButton Label='Comprar' onButtonPressed={() => onButtonPress()}/>
            </View>
        </View>
    ); 
} 

export default ProductScreen; 