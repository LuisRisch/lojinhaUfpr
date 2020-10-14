import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";

import CustomCloseIcon from "../../components/CustomCloseIcon";
import CustomTopLabel from "../../components/CustomTopLabelInput";
import Spacing from "../../data/Spacing";
import { Style } from "./styles";

const UserPage = () => {
    const height = Dimensions.get("window").height;

    const content = (
        <View style={Style.screen}>
            <View style={Style.header}>
                <CustomCloseIcon icon="arrow-circle-left" link='/MainProducts'/>
                <Text style={Style.titleStyle}>Perfil</Text>
            </View>
            <View style={Style.PhotoContainer}>
                <Icon name="camera" size={25} color="white" />
            </View>
            <View style={Style.nameAndChangePhotoBox}>
                <Text style={Style.personNameStyle}>Nome da pessoa</Text>
                <Text style={Style.changePhotoStyle}>Alterar foto de perfil</Text>
            </View>
            <View style={{ marginTop: Spacing.MainMargin * 2 }}>
                <CustomTopLabel label="Nome do usuário" />
                <View style={Style.TextBox}>
                    <Text>Eduardo Silva</Text>
                </View>

                <CustomTopLabel label="Email" />
                <View style={Style.TextBox}>
                    <Text>EduardoSilva@ufpr.br</Text>
                </View>

                <CustomTopLabel label="CPF" />
                <View style={Style.TextBox}>
                    <Text>xxxxxxxxxxxxx</Text>
                </View>
            </View>
            <View style={{ flexDirection: "column-reverse", flex: 1 }}>
                <Image
                    source={require("../../assets/logo.png")}
                    style={Style.logoStyle}
                />
            </View>
        </View>
    );
    if (height < 670) {
        return <ScrollView>{content}</ScrollView>;
    } else {
        return content;
    }
};

export default UserPage;
