import React, { useState } from 'react'; 
import { View, TextInput, StyleSheet } from 'react-native';

// import Colors from '../constants/Colors'
import Colors from 'constants/Colors'

export default function CustomInputs ( props ){ 
    return (
        <View style = {styles.textInputContainer}>
            <TextInput placeholder = {props.hintText}/>
        </View> 
    );
};  

const styles = StyleSheet.create({
    textInputContainer: {
        backgroundColor: Colors.ultraLightGrey, 
        height: 35, 
        borderRadius: 16, 
        justifyContent: 'center', 
        paddingStart: 8, 
        marginVertical: 5,
    }
})

