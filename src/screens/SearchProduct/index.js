import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomIcon from "../../components/CustomCloseIcon";
import CustomInput from "../../components/CustomInputs";
import Spacing from "../../data/Spacing";
import CustomButton from "../../components/CustomButtons";
import Color from "../../data/Colors";
import FontSizes from "../../data/FontSizes";
const SearchProduct = () => {
    const [search, setSearch] = useState("");
    const InputHandler = (text) => {
        setSearch(text);
        console.log(search);
    };

    const keyWords = [
        "Cerâmica",
        "Cadernos",
        "Inglês",
        "Chaveiros",
        "Sofá",
        "NoteBook",
        "Brincos",
        "Salgados",
        "Tatuagem",
        "Celular",
        "Decorações",
        "Camiseta",
        "Televisão",
        "Aula",
        "Sapato",
        "Coxinha",
        "Torta",
        "Ilustração",
    ];

    return (
        <View>
            <CustomIcon icon="arrow-circle-left" link='/MainProducts' />
            <Text style={{ color: Color.mainRed, fontSize: 40, fontWeight: "500" }}>
                Pesquisar
            </Text>

            {/************** Sized box **************/}
            <View style={{ height: Spacing.MainMargin }}></View>

            <CustomInput
                onChangeText={(text) => InputHandler(text)}
                hintText="Procurar"
                value={search}
            />

            {/************** Sized box **************/}
            <View style={{ height: Spacing.MainMargin }}></View>

            <Text
                style={{
                    color: Color.mainGrey,
                    fontSize: FontSizes.SuperTall,
                    fontWeight: "500",
                }}
            >
                Palavras-chave
      </Text>

            <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
                {keyWords.map((word, index) => (
                    <TouchableOpacity onPress={() => console.log(index)} key={index}>
                        <View
                            style={{
                                padding: 10,
                                backgroundColor: "#F8F8FF",
                                margin: 5,
                                borderWidth: 1,
                                borderColor: Color.mainGrey,
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontWeight: "500" }}>{word}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <CustomButton link='/MainProducts' Label="Buscar" />
        </View>
    );
};

export default SearchProduct;
