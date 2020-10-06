import React from 'react';
import { View } from 'react-native'; 
import { Styles } from './Styles';

const BoxProduct = ( props ) => {
    return(
        <View style={Styles.box_container}> 
            {props.children}
        </View>
    ); 
} 

export default BoxProduct; 