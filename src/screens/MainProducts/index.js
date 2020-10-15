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

import api from "../../services/api";
import FontSizes from "../../data/FontSizes";

const MainProducts = ({ navigation }) => {
  const arrAddOneInLenght = [""];
  const defaultTitle = "Início";
  const [ListOfProducts, setListOfProduct] = useState(
    ListOfGeneral.concat(arrAddOneInLenght)
  ); // just to add one more in lenght

  const loadApi = async () => {
    const response = await api.get("/products");

    if (response.status === 200 && response.data) {
      setListOfProduct([...response.data]);
    }
    // setListOfProduct(ListOfGeneral);
  };

  useEffect(() => {
    loadApi();
  }, []);

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
    navigation.navigate("ProductScreen", { item });
  };
  const [title, setTitle] = useState(defaultTitle);

  // Filtrará os produtos por uma certa categoria
  const ChangeCategory = (i) => {
    setTitle(defaultTitle + " > " + CategoryList[i]);
    if (i === 0) {
      //Como nao há um arquivo para esse tipo de categoria coloque a lista geral, mas quando haver o backend
      //deve-se ser a lista de salgados aqui
      setListOfProduct(ListOfGeneral);
    } else if (i === 1) {
      //deve-se ser a lista de doces
      setListOfProduct(ListOfSweets);
    } else if (i === 2) {
      //deve-se ser a lista de artesanatos
      setListOfProduct(ListOfCrafts);
    } else if (i === 3) {
      //deve-se ser a lista de Roupas
      setListOfProduct(ListOfGeneral);
    } else if (i === 4) {
      //deve-se ser a lista de Livros
      setListOfProduct(ListOfGeneral);
    } else if (i === 5) {
      //deve-se ser a lista de Servicos
      setListOfProduct(ListOfGeneral);
    } else if (i === 6) {
      //deve-se ser a lista de eletronicos
      setListOfProduct(ListOfGeneral);
    } else if (i === 7) {
      //deve-se ser a lista de moveis
      setListOfProduct(ListOfGeneral);
    } else if (i === 8) {
      //deve-se ser a lista de esporte
      setListOfProduct(ListOfGeneral);
    } else if (i === 9) {
      //deve-se ser a lista de calaçados
      setListOfProduct(ListOfGeneral);
    } else if (i === 10) {
      //deve-se ser a lista de outros
      setListOfProduct(ListOfGeneral);
    }
    setShowFilter(!showFilter);
  };

  const renderItemCard = ({ item, index }) =>
    isListVisualisationSelected ? (
      index === ListOfProducts.length - 1 ? (
        <TouchableOpacity style={styles.loadMoreProductsContainer}>
          <Text style={styles.loadProductsText}>Carregue mais produtos</Text>
          <Icon name="plus-circle" size={22} color={Colors.mainRed} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => onProductCardPressed(item)}>
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

                {/* Espaçamento entre palavras de 5px */}
                <View style={{ width: 5 }}></View>

                <Text style={styles.Per_Unity_Horizontally}>a unidade</Text>
              </View>
              <View>
                <Text style={styles.AnnouncedBy_Horizontally_Label}>
                  Anunciado por:
                </Text>
                <Text style={styles.AnnouncedBy_Horizontally_Name}>
                  {item.user ? item.user.name : ""}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    ) : index === ListOfProducts.length - 1 ? (
      <TouchableOpacity style={styles.loadMoreProductsContainer}>
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
          style={styles.Product_Title_Grid}
        >
          {item.title}
        </Text>
        <View style={styles.Box_Price_Grid}>
          <Text style={styles.Price_Layout_Grid}>R$ {item.price}</Text>
          {/* Espaçamento entre palavras de 5px */}
          <View style={{ width: 5 }}></View>
          {/* Mesmas propriedades */}
          <Text style={styles.Per_Unity_Horizontally}>a unidade</Text>
        </View>
        <View>
          <Text style={styles.AnnouncedBy_Horizontally_Label}>
            Anunciado por:
          </Text>
          <Text style={styles.AnnouncedBy_Horizontally_Name}>
            {item.user ? item.user.name : ""}
          </Text>
        </View>
      </TouchableOpacity>
    );

  return (
    <View style={styles.screen}>
      <View>
        <View style={styles.Top_Secundary_Informations}>
          <Text style={styles.Top_Secundary_Layout_Informations}>{title}</Text>

          {/* Implementado para ter maior interatividade com o usuário, permitindo-lhe
                        escolher a forma que deseja navegar pelos produtos */}

          <TouchableOpacity
            onPress={() => setIsModalOptionsSelected(!isModalOfOptionsSelected)}
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
              renderItem={({ item, index }) => renderItemCard(item, index)}
              key={"_"}
              keyExtractor={(item) => "_" + item.id}
              scrollEnabled={true}
              scrollIndicatorInsets={false}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <FlatList
              data={ListOfProducts}
              renderItem={renderItemCard}
              key={"#"}
              keyExtractor={(item) => "#" + item.id}
              numColumns={2}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
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
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
                <Icon name="close" color={Colors.mainRed} size={18} />
              </TouchableOpacity>
            </View>
            <Text style={styles.TitleModalStyle}>Categorias</Text>
            <View style={styles.sizedBox}></View>
            {CategoryList.map((c, index) => (
              <View
                key={index}
                style={{ alignItems: "flex-start", marginVertical: 5 }}
              >
                <TouchableOpacity onPress={() => ChangeCategory(index)}>
                  <Text style={styles.category_text}>{c}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MainProducts;
