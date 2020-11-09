import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { ListOfGeneral } from "../../../temp/Products/General";
import { styles } from "./styles";
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state.user.data);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [ListOfProducts, setListOfProduct] = useState([]);

  const loadApi = async () => {
    // setLoadingData(true);
    // const response = await api.get("/products", {
    //   params: {
    //     user: user._id,
    //   },
    // });
    // if (response.status === 200 && response.data) {
    //   console.log(response.data);
    //   setListOfProduct(response.data);
    // }
    // setLoadingData(false);
    setListOfProduct(ListOfGeneral);
  };

  useEffect(() => {
    loadApi();
  }, []);

  const onProductCardPressed = (item) => {
    navigation.navigate("ProductScreen", { item });
  };

  const switchProductPause = async (isActive, id) => {
    const response = await api
      .put(
        `/product/${id}/${user._id}`,
        { active: !isActive },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .catch((err) =>
        Alert.alert(
          "Ocorreu um erro ao atualizar seu produto",
          err.response.data.error
        )
      );

    if (response.status === 200) {
      Alert.alert(
        "Alteração feita com sucesso!",
        "Atualize sua lista de produto para ver as alterações"
      );
    }
  };

  const handlePauseItem = (isActive, id) => {
    if (isActive) {
      Alert.alert(
        "Tem certeza que quer pausar esse produto?",
        "Os outros usuários não conseguirão entrar em contato com você com relação a ele!",
        [
          {
            text: "Pausar",
            onPress: async () => await switchProductPause(isActive, id),
          },
          { text: "Cancelar" },
        ]
      );
    } else {
      Alert.alert(
        "Tem certeza que quer despausar esse produto?",
        "Os outros usuários voltarão a poder fazer contato com você sobre ele!",
        [
          {
            text: "Despausar",
            onPress: async () => await switchProductPause(isActive, id),
          },
          { text: "Cancelar" },
        ]
      );
    }
  };

  //i = index of the product
  const handleDeleteItem = (index, id) => {
    Alert.alert(
      "Tem certeza que quer deletar esse produto?",
      "Os outros NÃO voltarão a poder fazer contato com você sobre ele!",
      [
        {
          text: "Deletar",
          onPress: async () => {
            const arr = [...ListOfProducts];
            arr.splice(index, 1);
            setListOfProduct(arr)
          }
        },
        { text: "Cancelar" },
      ]
    );
  }

  // renderiza cada item da lista de produtos
  const renderItemCard = ({ item, index }) => {
    return (
      <TouchableOpacity style={{}} onPress={() => onProductCardPressed(item)}>
        <View
          style={[
            styles.Products_Card_Horizontally,
            !item.active ? { backgroundColor: "lightgrey", opacity: 0.5 } : {},
          ]}
        >
          <Image
            source={{
              uri: item.picture === null ? null : item.picture[0].url,
            }}
            style={styles.Image_Horizontaly_Display}
            resizeMode="cover"
          />
          <View style={styles.Products_Card_Informations}>
            <Text numberOfLines={2} style={styles.Products_Title_Horizontally}>
              {item.title}
            </Text>
            <View style={styles.Price_Box_Horizontally}>
              <Text style={styles.Price_Layout}>R$ {item.price}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                marginTop: 5,
                justifyContent: "flex-end",
              }}
            >
              <CustomIconButton
                name="trash-2"
                onPress={() => handleDeleteItem(index, item._id)}
                viewStyle={{ marginRight: 7 }}
              />
              <CustomIconButton
                name="edit"
                onPress={() => {
                  navigation.navigate("EditProduct", item);
                }}
                viewStyle={{ marginRight: 7 }}
              />
              <CustomIconButton
                name={item.active ? "pause" : "play"}
                onPress={() => handlePauseItem(item.active, item._id)}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  ///////////////////////////////////////////////////////////////////////////

  return fontsLoaded ? (
    // caso as fontes ja tenham sido carregadas
    <View style={styles.screen}>
      <View>
        <View style={styles.Top_Secundary_Informations}>
          <Text style={styles.Top_Secundary_Layout_Informations}>
            Meus Produtos
          </Text>
        </View>
        <View style={{ padding: 20, marginTop: -30, marginBottom: 100 }}>
          <FlatList
            data={ListOfProducts}
            renderItem={renderItemCard}
            key={"_"}
            keyExtractor={(item) => "_" + item._id}
            scrollEnabled={true}
            scrollIndicatorInsets={false}
            showsVerticalScrollIndicator={false}
            onRefresh={loadApi}
            refreshing={loadingData}
          />
        </View>
      </View>
    </View> // carregando fontes ainda
  ) : (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
}
