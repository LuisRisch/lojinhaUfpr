import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../data/Colors";
import Spacing from "../../data/Spacing";
import { ListOfGeneral } from "../../../temp/Products/General";
import { ListOfSweets } from "../../../temp/Products/Sweets";
import { ListOfCrafts } from "../../../temp/Products/Crafts/";
import { Items } from "../../data/Tabs";
import { styles } from "./styles";
import { CategoryList } from "../../data/Categories";

import CustomIconButton from "../../components/CustomIconButton"; 

import api from "../../services/api";
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

export default function MyProducts({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [ListOfProducts, setListOfProduct] = useState(ListOfGeneral);

//   const loadApi = async () => {
//     setLoadingData(true);
//     const response = await api.get("/products");
//     if (response.status === 200 && response.data) {
//       setListOfProduct([...response.data]);
//     }
//     setLoadingData(false);
//     // setListOfProduct(ListOfGeneral);
//   };

//   useEffect(() => {
//     loadApi();
//   }, []);

  const onProductCardPressed = (item) => {
    navigation.navigate("ProductScreen", { item });
  };

  // renderiza cada item da lista de produtos  
  const renderItemCard = ({ item, index }) => {
    console.log(item)
    return <TouchableOpacity style={{}} onPress={() => onProductCardPressed(item)}>
        <View style={[styles.Products_Card_Horizontally, item.status === "INATIVO" ? {backgroundColor: 'lightgrey'} : {}]}>
            <Image
                source={{
                uri: item.picture === null ? null : item.picture[0].url,
                }}
                style={styles.Image_Horizontaly_Display}
                resizeMode="cover"
            />
            <View style={styles.Products_Card_Informations}>
                <Text
                numberOfLines={2}
                style={styles.Products_Title_Horizontally}
                >
                {item.title}
                </Text>
                <View style={styles.Price_Box_Horizontally}>
                    <Text style={styles.Price_Layout}>R$ {item.price}</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 5, justifyContent: 'flex-end'}}>
                    <CustomIconButton
                      name="trash-2"
                      onPress={() => {

                      }}
                      viewStyle={{marginRight: 7}}
                    />
                    <CustomIconButton
                      name="edit"
                      onPress={() => {

                      }}
                      viewStyle={{marginRight: 7}}
                    />
                    <CustomIconButton
                      name={item.status === "ATIVO" ? "pause" : "play" }
                      onPress={() => {

                      }}
                    />
                </View>
            </View>
        </View>
    </TouchableOpacity> 
  }

  ///////////////////////////////////////////////////////////////////////////

  return fontsLoaded 
    ? // caso as fontes ja tenham sido carregadas
    ( <View style={styles.screen}>
    <View>
      <View style={styles.Top_Secundary_Informations}>
        <Text style={styles.Top_Secundary_Layout_Informations}>Meus Produtos</Text>
      </View>
      <View style={{ padding: 20, marginTop: -30 }}>
          <FlatList
            data={ListOfProducts}
            renderItem={renderItemCard}
            key={"_"}
            keyExtractor={(item) => "_" + item._id}
            scrollEnabled={true}
            scrollIndicatorInsets={false}
            showsVerticalScrollIndicator={false}
            // onRefresh={loadApi}
            refreshing={loadingData}
          />
      </View>
    </View>
  </View> ) : ( // carregando fontes ainda
    <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
  )
};