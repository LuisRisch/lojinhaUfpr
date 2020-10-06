import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import Colors from "../../data/Colors";

export default function CustomCloseIcon(props) {
  return (
    <View style={styles.IconContainer}>
      <TouchableOpacity onPress={props.onIconPressed}>
        <Icon color={Colors.mainRed} size={18} name={props.icon} />
      </TouchableOpacity>
    </View>
  );
}
