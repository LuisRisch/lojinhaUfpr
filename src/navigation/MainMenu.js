import React, { useState, useEffect } from "react";
import { DrawerItems } from "react-navigation-drawer";
import {
    ScrollView,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Alert,
    AsyncStorage
} from "react-native";
import { Block, theme } from "galio-framework";
//import Constants from "expo-constants";

import { screenWidth } from "../constants/Screen";
import { Divider, Button } from "react-native-elements";

import Colors from "../constants/Colors";
import { auth } from "../constants/LocalStorage";
import TabBarIcon from "../components/TabBarIcon";
//import axios from "../../constants/axios";
//import { Buffer } from "buffer";

let authClass = new auth();

const Drawer = props => {
    const [name, setName] = useState("Usuário não logado");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState(
        "https://storage.googleapis.com/bomlance/usuario.png"
    );

    const getData = async () => {
        let name = await authClass.getName(),
            email = await authClass.getEmail();
        if (!name || !email) {
            return setName("Fazer login");
        }
        setName(name);
        setEmail(email);
    };

    useEffect(() => {
        getData()
    })

    /*        (async () => {
                    axios
                        .get("/api/usuario/buscarporemail/" + (await authClass.getEmail()))
                        .then(async ({ data }) => {
                            if (data.imagem) {
                                return setProfilePic(*/
    /*"http://gteste.alivepro.com.br:8082/api/usuario/download/" +
      (await authClass.getId()) +
      ".png?random=" +
      Math.random()*/
    /*       "https://storage.googleapis.com/bomlance-usuarios/" + (await authClass.getId()) + ".png"
       );
   }
   return setProfilePic(
       "https://storage.googleapis.com/bomlance/usuario.png"
   );
});
})();

getData();
}, []);*/
    const logout = async () => {
        props.navigation.navigate('Auth')
        if ((await authClass.removeId()) === false) {
            return Alert.alert("Erro ao sair", "Por favor tente novamente");
        }
        if ((await authClass.removeEmail()) === false) {
            return Alert.alert("Erro ao sair", "Por favor tente novamente");
        }
        if ((await authClass.removeName()) === false) {
            return Alert.alert("Erro ao sair", "Por favor tente novamente");
        }
        await authClass.removeToken(props.navigation);
    };
    return (
        <Block
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
        >
            <Block flex={0.09} style={styles.header}>
                <Block style={styles.row}>
                    <Block style={{ marginRight: 10 }}>
                        <Image source={{ uri: profilePic }} style={styles.image} />
                    </Block>
                    <Block style={styles.text}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.email}>{email}</Text>
                    </Block>
                </Block>
            </Block>
            <Block flex>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <DrawerItems {...props} />
                    <Divider style={styles.divider} />
                    <Block>
                        {/*    <Text style={styles.info}>Ajuda e contato</Text>
                        <Text style={styles.info}>Termos de uso</Text>
                                    <Text style={styles.info}>Nos avalie na Google Play</Text>
            <Text style={styles.info}>
              Versão: {Constants.nativeBuildVersion}
  </Text>*/}
                    </Block>
                    <TouchableOpacity
                        onPress={() => logout()}
                        style={{ flexDirection: "row" }}
                    >
                        {/*<TabBarIcon
                            src={require("../../assets/icons/logout.png")}
                            size={{ height: 23, width: 24, marginTop: 20, marginLeft: 20 }}
                        />*/}
                        <Text style={styles.info}>Sair</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Block>
        </Block>
    );
};

const Menu = {
    contentComponent: props => <Drawer {...props} />,
    drawerBackgroundColor: "white",
    drawerWidth: screenWidth * 0.8,
    contentOptions: {
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
            width: screenWidth * 0.75,
            backgroundColor: "transparent"
        },
        labelStyle: {
            fontSize: 18,
            marginLeft: 12,
            fontWeight: "normal"
        },
        itemsContainerStyle: {
            paddingVertical: 16,
            paddingHorizonal: 12,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            overflow: "hidden"
        }
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingHorizontal: 28,
        paddingBottom: theme.SIZES.BASE,
        paddingTop: theme.SIZES.BASE * 3,
        justifyContent: "center",
        backgroundColor: Colors.mainBlue
    },
    name: {
        color: "white",
        fontWeight: "bold",
        //   fontFamily: "arial-black"
    },
    email: {
        color: "white"
    },
    image: {
        flexGrow: 1,
        height: 55,
        width: 55,
        borderRadius: 500 / 2,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 1.5
    },
    row: {
        flexDirection: "row",
        marginRight: screenWidth * 0.1
    },
    text: { marginTop: 5 },
    divider: {
        backgroundColor: Colors.mainBlue,
        height: 2.5
    },
    info: {
        color: Colors.mainBlue,
        marginLeft: 25,
        marginTop: 20,
        fontSize: 15
    },
    btn: { backgroundColor: "transparent" },
    btnTitle: {
        color: Colors.basePink,
        fontWeight: "500",
        // fontFamily: "arial-black"
    },
    btnContainer: {}
});

export default Menu;
