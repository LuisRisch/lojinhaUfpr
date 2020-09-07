import React, { useState} from 'react'; 
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'; 

import Colors from 'constants/Colors'

export default function CustomButtons( props ){ 
    return (
        <View style = {{...styles.buttonContainer, ...props.Color}} >
            <TouchableOpacity>
                <Text style = {styles.buttonLabel}>{props.Label}</Text>
            </TouchableOpacity>
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.mainRed,
        marginTop: 18,  
        height: 35,
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 16
    }, 

    buttonLabel: {
        color: 'white',  
        fontSize: 16, 
        fontWeight: '500'
    }
}); 
