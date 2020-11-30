import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../data/Colors";
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CustomButtons(props) {
    return (
        <TouchableOpacity
            style={[styles.viewStyle, props.viewStyle]}
            onPress={props.onPress}
        >
            {
                props.restore ?
                    <FontAwesome5
                        name={props.name}
                        style={[styles.iconStyle, props.iconStyle]}
                    />
                    :
                    <Feather
                        name={props.name}
                        style={[styles.iconStyle, props.iconStyle]}
                    />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: Colors.mainRed,
        height: 40,
        width: 40,
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        color: Colors.backgroundWhite,
        fontSize: 24
    }
});