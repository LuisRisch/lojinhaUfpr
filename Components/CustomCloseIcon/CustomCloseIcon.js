import React from 'react';
import { View , TouchableOpacity , StyleSheet } from 'react-native'; 
import Icon from "react-native-vector-icons/FontAwesome";
import {styles} from './Styles';
import Colors from '../../Constants/Colors';

export default function CustomCloseIcon( props ) {
    return (
        <View
            style={styles.IconContainer}
        >
            <TouchableOpacity onPress={props.onIconPressed}>
                <Icon color={Colors.mainRed} size={18} name="close" />
            </TouchableOpacity>
        </View>
    );
} 

