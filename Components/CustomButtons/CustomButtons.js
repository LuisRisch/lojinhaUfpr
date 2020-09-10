import React from 'react'; 
import { View , TouchableOpacity , Text , StyleSheet } from 'react-native'; 
import {styles} from './Styles';

export default function CustomButtons( props ){ 
    return (
        <View style = {{...styles.buttonContainer , ...props.Color}} >
            <TouchableOpacity onPress = { props.onButtonPressed }>
                <Text style = {styles.buttonLabel}>{props.Label}</Text>
            </TouchableOpacity>
        </View>
    ); 
}; 

