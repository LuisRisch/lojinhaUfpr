import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./Styles";
import Colors from '../../data/Colors';
import fontSize from '../../data/FontSizes';
import FontSizes from "../../data/FontSizes";

export default function CustomInputs(props) {

    return (
        <View>
            <View style={ props.error ? styles.errorContainer : styles.textInputContainer}>
                <TextInput
                    placeholder={props.hintText}
                    onChangeText={(this, props.onChangeText)}
                    value={props.value}
                />
            </View> 
            {
                props.error ? 
                <Text style={styles.errorMessage}>
                    * {props.errorMessage}
                </Text> : null
            }
        </View>
    );
}
