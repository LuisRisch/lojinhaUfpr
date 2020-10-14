import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import CustomInputs from "../../components/CustomInputs";
import CustomTopLabel from "../../components/CustomTopLabelInput";
import CustomSubLabel from "../../components/CustomSubLabel";
import BoxProduct from "../../components/CustomBoxesProductInformation";
import CustomButton from "../../components/CustomButtons";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { CategoryList } from "../../data/Categories";
import { styles } from "./styles";

import api from "../../services/api";

const CreateAnnouncement = () => {
  const [isShowCategoryOpen, setIsShowCategory] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [productcategory, setCategory] = useState({
    title: "Nenhuma categoria selecionada",
    id: -1,
  });
  const [productDescription, setProductDescription] = useState("");
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");
  // Categorias pré definidas dos produtos
  // const CategoryList = [
  //     'Salgados', 'Doces', 'Artesanato', 'Roupas', 'Livros', 'Serviços', 'Eletrônicos', 'Móveis',
  //     'Esporte', 'Calçados', 'Outros'
  // ];

  const [categoryList, setCategoryList] = useState([]);

  const loadCategories = async () => {
    const response = await api.get("/categories");

    if (response.status === 200 && response.data) {
      setCategoryList([...response.data]);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // i = index of the category array
  const CategoryHandler = (item) => {
    setCategory(item);
    setIsShowCategory(false);
  };

  const product = [];

  const onButtonPressed = () => {
    product.push({
      title: productTitle,
      category: productcategory,
      description: productDescription,
      payment: payment,
      delivery: delivery,
    });
  };

  const height = Dimensions.get("window").height;

  const content = (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomCloseIcon />
        <Text style={styles.title}>Anunciar produto/serviço</Text>

        {/* Titulo produto */}

        <BoxProduct>
          <CustomTopLabel label="Nome do produto/serviço" />
          <CustomSubLabel content="Este será o título. Lembre-se de que, quando você tiver vendas, não poderá editá-lo" />
          <CustomInputs
            hintText="Ex: Camiseta customizada feita sobre demanda"
            onChangeText={(text) => setProductTitle(text)}
          />
        </BoxProduct>

        {/* Categoria do produto */}

        <BoxProduct>
          <CustomTopLabel label="Categoria do produto" />
          <CustomSubLabel content="Selecione a categoria que melhor descreve o produto que irá ser anunciado" />
          <View style={styles.category_box}>
            <Text>{productcategory.title || ""}</Text>
            <View style={styles.icon_box}>
              <TouchableOpacity
                onPress={() => setIsShowCategory(!isShowCategoryOpen)}
              >
                <Icon name="angle-down" color="white" size={18} />
              </TouchableOpacity>
            </View>
          </View>
        </BoxProduct>

        {/* Descriçaõ do produto */}

        <BoxProduct>
          <CustomTopLabel label="Descrição do produto/serviço" />
          <CustomSubLabel content="Irá contextualizar o interessado sobre do que se trata o produto/serviço a ser divulgado" />
          <CustomInputs
            hintText="Ex: Digite aqui a descrição"
            onChangeText={(text) => setProductDescription(text)}
          />
        </BoxProduct>

        {/* Pagamento */}

        <BoxProduct>
          <CustomTopLabel label="Forma de Pagamento" />
          <CustomSubLabel content="Digite as formas de pagamento" />
          <CustomInputs
            hintText="Ex: Somente dinheiro"
            onChangeText={(text) => setPayment(text)}
          />
        </BoxProduct>

        {/* Entrega */}

        <BoxProduct>
          <CustomTopLabel label="Formas de entrega" />
          <CustomSubLabel content="Quais são os meios de entrega?" />
          <CustomInputs
            hintText="Ex: Por meio do correio"
            onChangeText={(text) => setDelivery(text)}
          />
        </BoxProduct>

        <View style={{ justifyContent: "space-between", flex: 1 }}>
          <CustomButton Label="Anunciar" onButtonPressed={onButtonPressed} />
          <Image
            source={require("../../assets/logo.png")}
            style={{ alignSelf: "center", width: 70, height: 70, bottom: 0 }}
          />
        </View>
        {/* Esse modal mostra as categorias possíveis para se anunciar um produto */}

        <Modal
          visible={isShowCategoryOpen}
          transparent={true}
          animationType={"slide"}
        >
          <View style={styles.BackModalScreen}>
            <View style={styles.BackModalAlert}>
              <CustomCloseIcon
                onIconPressed={() => setIsShowCategory(!isShowCategoryOpen)}
              />
              <Text style={styles.TitleModalStyle}>Categorias</Text>
              <View style={styles.sizedBox}></View>
              {categoryList.map((item) => (
                <View
                  key={item.id}
                  style={{ alignItems: "flex-start", marginVertical: 5 }}
                >
                  <TouchableOpacity onPress={() => CategoryHandler(item)}>
                    <Text style={styles.category_text}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );

  if (height < 670) {
    return <ScrollView>{content}</ScrollView>;
  } else {
    return content;
  }
};

export default CreateAnnouncement;
