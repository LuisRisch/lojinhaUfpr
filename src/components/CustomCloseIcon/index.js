import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import Colors from "../../data/Colors";

export default function CustomCloseIcon(props) {
  return (
    <TouchableOpacity style={styles.IconContainer} onPress={props.onPress}>
      <Icon color={Colors.mainRed} size={18} name={props.icon} />
    </TouchableOpacity>
  );
}
