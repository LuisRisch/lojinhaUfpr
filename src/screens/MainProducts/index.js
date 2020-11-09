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

import api from "../../services/api";
import FontSizes from "../../data/FontSizes";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useSafeArea } from "react-native-safe-area-context";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Mplus-semi": require("../../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    "Mplus-bold": require("../../assets/fonts/MPLUSRounded1c-Bold.ttf"),
  });

const MainProducts = ({ navigation, route }) => {
  const { params } = route;
  const arrAddOneInLenght = [""];
  const defaultTitle = "Início";
  const [categoriesList, setCategories] = useState([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(-1);
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoadMoreItem, setShowMoreItem] = useState(false);
  const [ListOfProducts, setListOfProduct] = useState(
    ListOfGeneral.concat(arrAddOneInLenght)
  ); // just to add one more in lenght

  const loadApi = async () => {
    const response = await api.post(
      "/products",
      {},
      {
        params: {
          onlyActive: true,
        },
      }
    );
    if (response.status === 200 && response.data) {
      setListOfProduct([...response.data]);
    }
    // setListOfProduct(ListOfGeneral);
  };

  const loadCategories = async () => {
    const categories = await api.get("/categories");
    if (categories.status === 200 && categories.data) {
      setCategories(categories.data);
    }
  };

  const loadSearch = async (searchParams) => {
    setLoadingData(true);
    console.log("oi");
    const response = await api.post(
      "/products",
      {},
      {
        params: { title: searchParams, onlyActive: true },
      }
    );
    if (response.status === 200 && response.data) {
      setListOfProduct([...response.data]);
      console.log(response.data);
    }
    setLoadingData(false);
    // setListOfProduct(ListOfGeneral);
  };

  useEffect(() => {
    setLoadingData(true);
    loadApi();
    loadCategories();
    setLoadingData(false);
  }, []);

  useEffect(() => {
    if (params && params.searchParams) {
      console.log("oi");
      loadSearch(params.searchParams);
    }
  }, [params]);

  const [
    isListVisualisationSelected,
    setIsListVisualisationSelected,
  ] = useState(false);

  const [isModalOfOptionsSelected, setIsModalOptionsSelected] = useState(false);
  const changeStateOfModalOptionsSelected = () => {
    setIsModalOptionsSelected(!isModalOfOptionsSelected);
    setIsListVisualisationSelected(!isListVisualisationSelected);
  };

  const [isModalUserAreaVisible, setIsModalUserAreaVisible] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const onProductCardPressed = (item) => {
    navigation.navigate("ProductScreen", {
      item,
      categoryLabel: categoriesList[item.category].title,
    });
  };
  const [title, setTitle] = useState(defaultTitle);

  const loadProductsWithParams = async (page, category) => {
    if (category === -1) {
      const response = await api.post(
        "/products",
        {},
        {
          params: {
            page,
            onlyActive: true,
          },
        }
      );
      if (response.data) {
        setListOfProduct([...ListOfProducts, ...response.data]);
      }
    } else {
      const response = await api.post(
        "/products",
        {},
        {
          params: {
            category,
            page,
            onlyActive: true,
          },
        }
      );

      if (response.data) {
        setListOfProduct(response.data);
      }
    }
  };

  const handleResetCaregories = () => {
    loadApi();
    setCurrentPage(0);
    setTitle(defaultTitle);
    setCurrentCategory(-1);
    setShowFilter(false);
  };

  const ChangePage = () => {
    let newPage = currentPage + 1;
    setCurrentPage(newPage);
    loadProductsWithParams(newPage, currentCategory);
  };
  // Filtrará os produtos por uma certa categoria
  const ChangeCategory = (i) => {
    setTitle(defaultTitle + " > " + categoriesList[i].title);
    setCurrentPage(0);
    setCurrentCategory(i);
    loadProductsWithParams(0, i);
    setShowFilter(!showFilter);
  };

  const renderItemCard = ({ item, index }) =>
    isListVisualisationSelected ? (
      index === ListOfProducts.length - 1 ? (
        <TouchableOpacity
          style={styles.loadMoreProductsContainer}
          onPress={ChangePage}
        >
          <View style={{ height: Spacing.MainMargin }}></View>
          <Text style={styles.loadProductsText}>Carregue mais produtos</Text>
          <Icon name="plus-circle" size={22} color={Colors.mainRed} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={{}} onPress={() => onProductCardPressed(item)}>
          <View style={styles.Products_Card_Horizontally}>
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
              <View>
                <Text
                  numberOfLines={2}
                  style={styles.AnnouncedBy_Horizontally_Label}
                >
                  Vendido por:
                </Text>
                <Text
                  numberOfLines={2}
                  style={styles.AnnouncedBy_Horizontally_Name}
                >
                  {item.user.name}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    ) : index === ListOfProducts.length - 1 ? (
      <TouchableOpacity
        style={styles.loadMoreProductsContainer}
        onPress={ChangePage}
      >
        <Text style={styles.loadProductsText}>Carregue mais produtos</Text>
        <Icon name="plus-circle" size={22} color={Colors.mainRed} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.Box_Card_Grid_Products}
        onPress={() => onProductCardPressed(item)}
      >
        <Image
          source={{
            uri: item.picture === null ? null : item.picture[0].url,
          }}
          style={styles.Image_Layout_Grid}
          resizeMode="cover"
        />
        <Text
          lineBreakMode={true}
          numberOfLines={2}
          style={styles.Products_Title_Horizontally}
        >
          {item.title}
        </Text>
        <View style={styles.Box_Price_Grid}>
          <Text style={styles.Price_Layout_Grid}>R$ {item.price}</Text>
        </View>
        <View>
          <Text numberOfLines={2} style={styles.AnnouncedBy_Horizontally_Label}>
            Vendido por:
          </Text>
          <Text numberOfLines={2} style={styles.AnnouncedBy_Horizontally_Name}>
            {item.user.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  if (fontsLoaded) {
    return (
      <View style={styles.screen}>
        <View>
          <View style={styles.Top_Secundary_Informations}>
            <Text style={styles.Top_Secundary_Layout_Informations}>
              {title}
            </Text>

            {/* Implementado para ter maior interatividade com o usuário, permitindo-lhe
							escolher a forma que deseja navegar pelos produtos */}

            <TouchableOpacity
              onPress={() =>
                setIsModalOptionsSelected(!isModalOfOptionsSelected)
              }
            >
              <Text style={styles.Top_Secundary_Layout_Informations}>
                Navegar por: {isListVisualisationSelected ? "Linhas" : "Grades"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
              <Text style={styles.Filter_Layout}>Filtrar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 20, marginTop: -30 }}>
            {isListVisualisationSelected ? (
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
            ) : (
              <FlatList
                data={ListOfProducts}
                renderItem={renderItemCard}
                key={"#"}
                keyExtractor={(item) => "#" + item._id}
                numColumns={2}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                onRefresh={loadApi}
                refreshing={loadingData}
              />
            )}
          </View>
        </View>

        {/**************** Este modal mostra a area do usuário ***************/}

        <Modal
          visible={isModalOfOptionsSelected}
          animationType="slide"
          transparent={true}
        >
          <View style={{ flexDirection: "column-reverse", flex: 1 }}>
            <View style={styles.Bottom_Container_Options_Of_Navigation}>
              <View style={styles.Bottom_Spacing_Icons}>
                <TouchableOpacity onPress={changeStateOfModalOptionsSelected}>
                  {/* Icone de grade */}

                  <Icon
                    name="th"
                    size={20}
                    color={
                      isListVisualisationSelected
                        ? Colors.mainGrey
                        : Colors.mainRed
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={changeStateOfModalOptionsSelected}>
                  {/* Icone de Lista */}

                  <Icon
                    name="list"
                    size={20}
                    color={
                      isListVisualisationSelected
                        ? Colors.mainRed
                        : Colors.mainGrey
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/**************** Este modal irá mostra o filtro de categorias ****************/}

        <Modal visible={showFilter} transparent={true} animationType={"slide"}>
          <View style={styles.BackModalScreen}>
            <View style={styles.BackModalAlert}>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
                  <Icon name="close" color={Colors.mainRed} size={18} />
                </TouchableOpacity>
              </View>
              <Text style={styles.TitleModalStyle}>Categorias</Text>
              <TouchableOpacity onPress={handleResetCaregories}>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "ralway-regular-semi",
                    marginTop: 10,
                  }}
                >
                  Nenhuma categoria
                </Text>
              </TouchableOpacity>
              <View style={styles.sizedBox}></View>
              {categoriesList.map((item) => (
                <View
                  key={item.id}
                  style={{ alignItems: "flex-start", marginVertical: 5 }}
                >
                  <TouchableOpacity onPress={() => ChangeCategory(item.id)}>
                    <Text style={styles.category_text}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default MainProducts;
