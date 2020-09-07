import React, { useState } from 'react'; 
import { View , TextInput , StyleSheet } from 'react-native';

export default function CustomInputs ( props ){ 
    return (
        <View style = {styles.textInputContainer}>
            <TextInput placeholder = {props.hintText}/>
        </View> 
    );
};  

const styles = StyleSheet.create({
    textInputContainer : {
        backgroundColor : '#f6f6f6' , 
        height : 35 , borderRadius : 16 , 
        justifyContent : 'center' , 
        paddingStart : 8 , 
        marginVertical : 5, 
        shadowColor: "black",
        shadowOffset: {
        width: 0,
        height: 2
        },   
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5
    }
})

