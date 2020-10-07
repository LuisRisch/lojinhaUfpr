import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
import { styles } from "./Styles";
import Colors from "../../data/Colors";
import { Link } from "react-router-native";

export default function CustomCloseIcon(props) {
    return (
        <View style={styles.IconContainer}>
            <Link to={props.link} >
                <Icon color={Colors.mainRed} size={18} name={props.icon} />
            </Link>
        </View>
    );
}
