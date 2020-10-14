import React, { useState } from "react";
import { View, TextInput, TouchableWithoutFeedback, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./Styles";

export default function CustomPasswordInput(props) {
    const [isHidden, setIsHidden] = useState(false);
    const changeStateHidden = () => {
        setIsHidden(!isHidden);
    };

    return (
        <View>
            <View style={props.error ? styles.errorContainer : styles.textInputContainer}>
                <TextInput
                    placeholder={props.hintText}
                    onChangeText={(this, props.onChangeText)}
                    secureTextEntry={isHidden} 
                    value={props.value}
                />
                <TouchableWithoutFeedback onPress={changeStateHidden}>
                    <Icon
                        name={isHidden ? "eye" : "eye-slash"}
                        size={18}
                        color={"#666666"}
                    />
                </TouchableWithoutFeedback>
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
