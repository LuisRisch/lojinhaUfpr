import React , { useState } from 'react';
import { View , TextInput , TouchableWithoutFeedback , StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {styles} from './Styles';

export default function CustomPasswordInput( props ){

    const [ isHidden , setIsHidden ] = useState( false );  
    const changeStateHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <View style={styles.textInputContainer}>
            <TextInput
                placeholder={props.hintText} 
                onChangeText = { this , props.onChangeText }
                secureTextEntry = {isHidden}
            />
            <TouchableWithoutFeedback onPress = {changeStateHidden}>
                <Icon
                    name={isHidden ? 'eye' : 'eye-slash'}
                    size={18}
                    color={'#666666'}
                />
            </TouchableWithoutFeedback>
        </View>
    );
} 

