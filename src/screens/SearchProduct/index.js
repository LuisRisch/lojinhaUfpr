import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomIcon from "../../components/CustomCloseIcon";
import CustomInput from "../../components/CustomInputs";
import Spacing from "../../data/Spacing";
import CustomButton from "../../components/CustomButtons";
import Color from "../../data/Colors";
import FontSizes from "../../data/FontSizes";

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

const SearchProduct = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [errorInSearch, setError] = useState(false);
  const InputHandler = (text) => {
    setSearch(text);
    console.log(search);
  };

  const handleSearch = () => {
    navigation.navigate("MainProducts", { searchParams: search });
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
  if (fontsLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            height: 40,
            marginTop: StatusBar.currentHeight,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("MainProducts")}>
            <Icon
              name="arrow-left"
              size={20}
              color="#c4c4c4"
              style={{ marginLeft: 18 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 18 }}
        >
          <Text
            style={{
              color: Color.mainRed,
              fontSize: 35,
              // fontWeight: "bold",
              fontFamily: "ralway-regular-bold",
            }}
          >
            Pesquisar
          </Text>

          {/************** Sized box **************/}
          <View style={{ height: Spacing.MainMargin }}></View>
          <CustomInput
            onChangeText={(text) => InputHandler(text)}
            error={errorInSearch}
            errorMessage="Não foi encontado!"
            hintText="Procurar"
            value={search}
          />

          {/************** Sized box **************/}
          <View style={{ height: Spacing.MainMargin }}></View>

          {/* <Text
            style={{
              color: Color.mainGrey,
              fontSize: FontSizes.SuperTall,
              fontWeight: "500",
            }}
            >
            Palavras-chave
          </Text> */}

          {/* <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
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
            </View> */}
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              marginLeft: 18,
              marginBottom: 18,
            }}
          >
            <CustomButton Label="Buscar" onButtonPressed={handleSearch} />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default SearchProduct;
