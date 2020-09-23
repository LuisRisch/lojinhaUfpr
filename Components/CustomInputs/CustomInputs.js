import React, { useState } from 'react'; 
import { View , TextInput , StyleSheet } from 'react-native';
import {styles} from './Styles'

export default function CustomInputs ( props ){  
    // const [ Text , setText ] = useState(''); 
    // const TextHandler = ( EnteredText ) => {
    //     setText(EnteredText); 
    // }

    return (
        <View style = {styles.textInputContainer}>
            <TextInput 
                placeholder = {props.hintText} 
                onChangeText = {this , props.onChangeText}  
                value = {props.value}
            /> 
        </View> 
    );
};  

