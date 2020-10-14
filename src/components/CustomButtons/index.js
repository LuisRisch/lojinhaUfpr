import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "./Styles";

export default function CustomButtons(props) {
  return (
    <TouchableOpacity
      style={{ ...styles.buttonContainer }}
      onPress={props.onButtonPressed}
    >
      <Text style={styles.buttonLabel}>{props.Label}</Text>
    </TouchableOpacity>
  );
}
