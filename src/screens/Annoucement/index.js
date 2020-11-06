import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

import * as Yup from "yup";

import CustomInputs from "../../components/CustomInputs";
import CustomTopLabel from "../../components/CustomTopLabelInput";
import CustomSubLabel from "../../components/CustomSubLabel";
import BoxProduct from "../../components/CustomBoxesProductInformation";
import CustomButton from "../../components/CustomButtons";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { CategoryList } from "../../data/Categories";

import { styles } from "./styles";

import api from "../../services/api";
import Colors from "../../data/Colors";
import { useSelector } from "react-redux";

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

const CreateAnnouncement = ({ navigation }) => {
  const user = useSelector((state) => state.user);

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isShowCategoryOpen, setIsShowCategory] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [productcategory, setCategory] = useState({
    title: "Nenhuma categoria selecionada",
    id: -1,
  });
  const [productDescription, setProductDescription] = useState("");
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");
  const [price, setPrice] = useState("");

  const [categoryList, setCategoryList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const loadCategories = async () => {
    if (categoryList != []) {
      const response = await api.get("/categories");

      if (response.status === 200 && response.data) {
        setCategoryList([...response.data]);
      }
    }
  };

  const HandleDeletePhoto = () => {
    setImageList([]);
  };

  useEffect(() => {
    loadCategories();
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permissões necessárias",
            "Necessitamos de algumas permissões para poder cadastrar produtos!"
          );
        }
      }
    })();
  }, []);

  // i = index of the category array
  const CategoryHandler = (item) => {
    setCategory(item);
    setIsShowCategory(false);
  };

  const product = [];

  const handleSubmit = async () => {
    if (!user.data.student) {
      return Alert.alert(
        "Infelizmente você não pode fazer isso.",
        "Apenas estudantes da UFPR podem anunciar produtos!"
      );
    }
    const schema = Yup.object().shape({
      price: Yup.string().required(),
      title: Yup.string().required(),
      deliveryDescription: Yup.string().required().max(250),
      paymentDescription: Yup.string().required().max(60),
      category: Yup.number().positive().required(),
    });

    let data = {
      price,
      title: productTitle,
      description: productDescription,
      paymentDescription: payment,
      deliveryDescription: delivery,
      category: parseInt(productcategory.id),
      user: user.data._id,
    };

    if (!(await schema.isValid(data))) {
      Alert.alert(
        "Informações inválidas",
        "Por favor, verifique as informações inseridas"
      );
      return 1;
    }
    const form = new FormData();

    let realPrice = price.split("$");

    if (realPrice[1]) {
      data.price = realPrice[1];
    } else {
      data.price = realPrice[0];
    }

    if (imageList.length > 0 && imageList.length <= 5) {
      imageList.forEach((item) => {
        form.append("files", {
          uri: item,
          name: "image.jpg",
          type: "image/jpeg",
        });
      });
    } else {
      if (imageList.length === 0) {
        Alert.alert(
          "Por favor, adicione uma imagem",
          "É necessário pelo menos 1 imagem para publicar."
        );
      } else if (imageList.length > 5) {
        Alert.alert(
          "Por favor, remova imagens",
          "O máximo de imagens para publicação é 5."
        );
      }
      return 1;
    }

    const response = await api.post("/files", form, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    let picture = [];
    if (response.status === 200) {
      picture = response.data;
    }

    const productResponse = await api
      .post(
        "/product",
        { ...data, picture },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .catch((err) =>
        Alert.alert(
          "Ocorreu um erro ao postar o produto",
          err.response.data.error
        )
      );

    if (productResponse.status === 200) {
      navigation.navigate("MainProducts");
    }
  };

  const height = Dimensions.get("window").height;

  const handleImagePick = async () => {
    if (imageList.length < 5) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.7,
      });

      if (!result.cancelled) {
        let array = [...imageList];
        array.push(result.uri);
        setImageList(array);
        console.log(array);
      }
    } else {
      Alert.alert(
        "Por favor, remova imagens",
        "O máximo de imagens para publicação é 5."
      );
    }
  };

  const content = (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon
            name="align-left"
            size={20}
            color="#c4c4c4"
            style={{ marginLeft: 18 }}
          />
        </TouchableOpacity>
      </View>
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

        <BoxProduct>
          <CustomTopLabel label="Preço" />
          <CustomSubLabel content="Qual o valor a cobrar?" />
          <CustomInputs
            hintText="Ex: 9,99"
            onChangeText={(text) => setPrice(text)}
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

        <TouchableOpacity style={styles.pictureBox} onPress={handleImagePick}>
          {imageList.length === 0 ? (
            <>
              <Icon name="camera" size={40} color={Colors.mainRed} />
              <Text style={{ color: Colors.darkGrey }}>
                Adicione suas fotos aqui
              </Text>
            </>
          ) : (
            imageList.map((item) => (
              <Image
                style={styles.pictureComponent}
                source={{ uri: item }}
                key={item}
              />
            ))
          )}
        </TouchableOpacity>

        <View style={{ justifyContent: "space-between", flex: 1 }}>
          <CustomButton Label="Anunciar" onButtonPressed={handleSubmit} />
          {imageList.length >= 1 ? (
            <CustomButton
              Label="Deletar as fotos"
              onButtonPressed={HandleDeletePhoto}
            />
          ) : (
            <View />
          )}
          <Image
            source={require("../../assets/logo.png")}
            style={{
              alignSelf: "center",
              width: 55,
              height: 55,
              bottom: 0,
              marginTop: 20,
            }}
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
              <View style={{ alignSelf: "flex-end" }}>
                <CustomCloseIcon
                  icon="close"
                  onPress={() => setIsShowCategory(!isShowCategoryOpen)}
                />
              </View>
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

  if (fontsLoaded) {
    if (height < 670) {
      return <ScrollView>{content}</ScrollView>;
    } else {
      return content;
    }
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default CreateAnnouncement;
