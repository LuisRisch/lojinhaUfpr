import React, { useState, useEffect } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Alert, Text, Image } from "react-native";
import Colors from "../../data/Colors";
import Spacing from "../../data/Spacing";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "../../store/modules/user/actions";

import { styles } from "./styles";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Mplus-semi": require("../../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    "Mplus-bold": require("../../assets/fonts/MPLUSRounded1c-Bold.ttf"),
  });

const CustomDrawer = ({ user, navigation, ...props }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [userAbleToSell, setAbleToSell] = useState(false);

  useEffect(() => {
    if (user && user.student) {
      setAbleToSell(true);
    }
  }, []);
  const dispatch = useDispatch();

  const logOut = () => {
    navigation.navigate("Login");
    dispatch(userSignOut());
  };

  const handleLogOut = () => {
    Alert.alert(
      "Tem certeza que quer sair?",
      "Você precisará fazer login novamente!",
      [{ text: "Sair", onPress: logOut }, { text: "Cancelar" }]
    );
  };

  if (fontsLoaded) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.User_Top_Information}>
          {user.avatar ? (
            <Image
              source={{ uri: user.avatar.url }}
              style={styles.Circle_Box_Photo}
            />
          ) : (
            <View style={styles.Circle_Box_Photo}>
              <Icon name="camera" size={15} color="white" />
            </View>
          )}
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
        <DrawerItem
          onPress={() => navigation.navigate("UserPage")}
          label="Sua conta"
          labelStyle={{ fontWeight: "bold", marginLeft: -20 }}
          icon={({}) => (
            <Icon
              name="user-circle"
              size={23}
              color={Colors.mainRed}
              style={{ width: 25 }}
            />
          )}
        />
        <DrawerItem
          onPress={() => navigation.navigate("Products")}
          label="Loja"
          labelStyle={{ fontWeight: "bold", marginLeft: -20 }}
          icon={({}) => (
            <Icon
              name="shopping-basket"
              size={23}
              color={Colors.mainRed}
              style={{ width: 25 }}
            />
          )}
        />
        <DrawerItem
          onPress={() => navigation.navigate("ChatList")}
          label="Chat"
          labelStyle={{ fontWeight: "bold", marginLeft: -20 }}
          icon={({}) => (
            <Icon
              name="comment"
              size={23}
              color={Colors.mainRed}
              style={{ width: 25 }}
            />
          )}
        />
        {userAbleToSell ? (
          <>
            <DrawerItem
              onPress={() => navigation.navigate("MyProducts")}
              label="Meus Produtos"
              labelStyle={{ fontWeight: "bold", marginLeft: -20 }}
              icon={({}) => (
                <Icon
                  name="archive"
                  size={23}
                  color={Colors.mainRed}
                  style={{ width: 25 }}
                />
              )}
            />
            <DrawerItem
              onPress={() => navigation.navigate("CreateAnnouncement")}
              label="Anunciar produto/serviço"
              labelStyle={{ fontWeight: "bold", marginLeft: -20 }}
              icon={({}) => (
                <Icon
                  name="external-link-square"
                  size={23}
                  color={Colors.mainRed}
                  style={{ width: 25 }}
                />
              )}
            />
          </>
        ) : null}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
            width: "90%",
            alignSelf: "center",
          }}
        />
        <DrawerItem
          label="Acolhimento UFPR"
          onPress={() => navigation.navigate("Acolhimento")}
          labelStyle={{ fontWeight: "bold", marginLeft: -20 }}
          icon={({}) => (
            <Icon
              name="bank"
              size={23}
              color={Colors.mainRed}
              style={{ width: 25 }}
            />
          )}
        />
        <DrawerItem
          label="Sair"
          onPress={handleLogOut}
          labelStyle={{ fontWeight: "bold", marginLeft: -20 }}
          icon={({}) => (
            <Icon
              name="sign-out"
              size={23}
              color={Colors.mainRed}
              style={{ width: 25 }}
            />
          )}
        />
        <Image
          source={require("../../assets/logo.png")}
          style={styles.Bottom_Logo}
        />
      </DrawerContentScrollView>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default CustomDrawer;
