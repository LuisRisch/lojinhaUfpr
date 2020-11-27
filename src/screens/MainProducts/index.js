import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../data/Colors";
import Spacing from "../../data/Spacing";
import { refreshCategories } from "../../store/modules/categories/actions";
import {
  excludeRegisterUser,
  excludeReset,
} from "../../store/modules/excludedData/actions";
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
  const categoriesList = useSelector((state) => state.categories.data);
  const user = useSelector((state) => state.user.data);
  const excludedDataUser = useSelector((state) => state.excludedData.user_id);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(-1);
  const [currentPage, setCurrentPage] = useState(0);
  const [showLoadMoreItem, setShowMoreItem] = useState(false);
  const [ListOfProducts, setListOfProduct] = useState(ListOfGeneral); // just to add one more in lenght
  const [title, setTitle] = useState("Início");

  const dispatch = useDispatch();

  const loadApi = async () => {
    setCurrentPage(0);
    setCurrentCategory(-1);
    setTitle("Início");
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
      dispatch(refreshCategories(categories.data));
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

    console.log(excludedDataUser);
    console.log(user);

    if (user && excludedDataUser != user._id) {
      Alert.alert(
        "Você entrou com uma nova conta!",
        "Seus dados de produtos e chats excluídos serão resetados! Isso significa que se você logar novamente com sua conta antiga, terá que excluir seus produtos e chats novamente. Continuar?",
        [
          {
            text: "Continuar",
            onPress: () => {
              dispatch(excludeReset());
              dispatch(excludeRegisterUser(user._id));
            },
          },
          { text: "Manter dados antigos" },
        ]
      );
    }
  }, []);

  useEffect(() => {
    if (params && params.searchParams) {
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

  const loadWithCategories = async (page, category) => {
    setLoadingData(true);
    if (page === 0 && category !== -1) {
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
        setListOfProduct([...response.data]);
      }
    } else if (page !== 0) {
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
        setListOfProduct([...ListOfProducts, ...response.data]);
      }
    }
    setLoadingData(false);
  };

  const loadProductsWithParams = async (page, category) => {
    setLoadingData(true);
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
        setListOfProduct([...response.data]);
      }
    }
    setLoadingData(false);
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
    if (currentCategory === -1) {
      loadProductsWithParams(newPage, -1);
    } else {
      loadWithCategories(newPage, currentCategory);
    }
  };
  // Filtrará os produtos por uma certa categoria
  const ChangeCategory = (i) => {
    setTitle(defaultTitle + " > " + categoriesList[i].title);
    setCurrentPage(0);
    setCurrentCategory(i);
    loadWithCategories(0, i);
    setShowFilter(!showFilter);
  };

  const renderItemCard = ({ item, index }) =>
    isListVisualisationSelected ? (
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
            <Text numberOfLines={2} style={styles.Products_Title_Horizontally}>
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
        <Text style={styles.Price_Layout_Grid}>R${item.price}</Text>
        <Text
          lineBreakMode={true}
          numberOfLines={2}
          style={styles.Products_Title_Horizontally}
        >
          {item.title}
        </Text>
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
                {isListVisualisationSelected ? "Linhas" : "Grades"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
              <Text style={styles.Filter_Layout}>Filtrar</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: "95%",
              marginTop: -10,
            }}
          >
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
                onEndReached={ChangePage}
                onEndReachedThreshold={0.1}
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
                onEndReached={ChangePage}
                onEndReachedThreshold={0.1}
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
