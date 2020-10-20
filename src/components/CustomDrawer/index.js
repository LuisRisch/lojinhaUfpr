import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Colors from "../../data/Colors";
import Spacing from "../../data/Spacing";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const CustomDrawer = (props) => {
  const { user } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.User_Top_Information}>
        {/* {user.picture.url ? (
          <Image
            source={{ uri: user.picture.url }}
            style={styles.Circle_Box_Photo}
          />
        ) : (
          <View style={styles.Circle_Box_Photo}>
            <Icon name="camera" size={15} color="white" />
          </View>
        )} */}
        <View style={styles.Circle_Box_Photo}>
            <Icon name="camera" size={15} color="white" />
          </View>
        <View
          style={{
            marginLeft: Spacing.MainMargin - 9, //9px
          }}
        >
          <Text style={styles.User_Name}>
            {user ? user.name : "Não logado"}
          </Text>
          <Text style={styles.User_Email}>{user ? user.email : ""}</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
          width: "90%",
          alignSelf: "center",
        }}
      />
      <DrawerItemList {...props} />
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
          width: "90%",
          alignSelf: "center",
        }}
      />
      <Image
        source={require("../../assets/logo.png")}
        style={styles.Bottom_Logo}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
