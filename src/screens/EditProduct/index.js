import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AppLoading } from "expo";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import Colors from "../../data/Colors";
import BoxProduct from "../../components/CustomBoxesProductInformation";
import CustomTopLabel from "../../components/CustomTopLabelInput";
import CustomInputs from "../../components/CustomInputs";
import CustomSubLabel from "../../components/CustomSubLabel";
import CustomButton from "../../components/CustomButtons";
import * as ImagePicker from "expo-image-picker";
import api from "../../services/api";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const getFonts = () =>
  Font.loadAsync({
    "ralway-regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "ralway-regular-semi": require("../../assets/fonts/Raleway-SemiBold.ttf"),
    "ralway-regular-bold": require("../../assets/fonts/Raleway-Bold.ttf"),
    "Mplus-semi": require("../../assets/fonts/MPLUSRounded1c-Medium.ttf"),
    "Mplus-bold": require("../../assets/fonts/MPLUSRounded1c-Bold.ttf"),
  });

const EditProduct = ({ route, navigation }) => {
  const obj = { ...route.params };
  console.log(obj);
  const user = useSelector((state) => state.user.data);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [productTitle, setProductTitle] = useState(obj.title);
  const [productcategory, setCategory] = useState({
    title: obj.category,
    id: -1,
  });
  const [productDescription, setProductDescription] = useState(obj.description);
  const [payment, setPayment] = useState(obj.paymentDescription);
  const [delivery, setDelivery] = useState(obj.deliveryDescription);
  const [price, setPrice] = useState(obj.price);

  const [categoryList, setCategoryList] = useState([]);
  const [isShowCategoryOpen, setIsShowCategory] = useState(false);
  const [imageList, setImageList] = useState([...obj.picture]);
  const [newImageList, setNewImages] = useState([]);

  const handleImagePick = async () => {
    if (imageList.length < 5) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 0.7,
      });

      if (!result.cancelled) {
        let array = [...newImageList];
        console.log(array);
        array.push({
          url: result.uri,
        });
        setNewImages(array);
        console.log(array);
      }
      console.log(newImageList);
    } else {
      Alert.alert(
        "Por favor, remova imagens",
        "O máximo de imagens para publicação é 5."
      );
    }
  };

  const loadCategories = async () => {
    if (categoryList != []) {
      const response = await api.get("/categories");

      if (response.status === 200 && response.data) {
        setCategoryList([...response.data]);
      }
    }
  };

  const handleSubmit = async () => {
    if (!user.student) {
      return Alert.alert(
        "Infelizmente você não pode fazer isso.",
        "Apenas estudantes da UFPR podem anunciar produtos!"
      );
    }

    let data = {
      price,
      title: productTitle,
      description: productDescription,
      paymentDescription: payment,
      deliveryDescription: delivery,
    };

    let realPrice = price.split("$");

    if (realPrice[1]) {
      data.price = realPrice[1];
    } else {
      data.price = realPrice[0];
    }

    let response = null;

    let picture = imageList;
    console.log(newImageList);
    if (newImageList.length > 0) {
      const form = new FormData();

      newImageList.forEach((item) => {
        form.append("files", {
          uri: item.url,
          name: "image.jpg",
          type: "image/jpeg",
        });
      });

      response = await api
        .post("/files", form, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .catch((err) => console.log(err));

      if (response && response.status === 200) {
        picture = [...picture, ...response.data];
      }
    }

    const productResponse = await api
      .put(
        `/product/${obj._id}/${user._id}`,
        { ...data, picture },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .catch((err) =>
        Alert.alert(
          "Ocorreu um erro ao atualizar o produto",
          err.response.data.error
        )
      );

    if (productResponse.status === 200) {
      navigation.navigate("MainProducts");
    }
  };

  const HandleDeletePhoto = () => {
    setImageList([]);
    setNewImages([]);
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

  if (fontsLoaded) {
    return (
      <View style={styles.screen}>
        <ScrollView>
          <BoxProduct>
            <CustomTopLabel label="Nome do produto/serviço" />
            <CustomSubLabel content="Este será o título. Lembre-se de que, quando você tiver vendas, não poderá editá-lo" />
            <CustomInputs
              hintText="Ex: Camiseta customizada feita sobre demanda"
              onChangeText={(text) => setProductTitle(text)}
              value={productTitle}
            />
          </BoxProduct>

          <BoxProduct>
            <CustomTopLabel label="Preço" />
            <CustomSubLabel content="Qual o valor a cobrar?" />
            <CustomInputs
              hintText="Ex: 9,99"
              onChangeText={(text) => setPrice(text)}
              value={price}
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
              value={productDescription}
            />
          </BoxProduct>

          {/* Pagamento */}

          <BoxProduct>
            <CustomTopLabel label="Forma de Pagamento" />
            <CustomSubLabel content="Digite as formas de pagamento" />
            <CustomInputs
              hintText="Ex: Somente dinheiro"
              onChangeText={(text) => setPayment(text)}
              value={payment}
            />
          </BoxProduct>

          {/* Entrega */}

          <BoxProduct>
            <CustomTopLabel label="Formas de entrega" />
            <CustomSubLabel content="Quais são os meios de entrega?" />
            <CustomInputs
              hintText="Ex: Por meio do correio"
              onChangeText={(text) => setDelivery(text)}
              value={delivery}
            />
          </BoxProduct>

          <TouchableOpacity style={styles.pictureBox} onPress={handleImagePick}>
            {imageList.length === 0 ? (
              newImageList.length === 0 ? (
                <>
                  <Icon name="camera" size={40} color={Colors.mainRed} />
                  <Text style={{ color: Colors.darkGrey }}>
                    Adicione suas fotos aqui
                  </Text>
                </>
              ) : null
            ) : (
              imageList.map((item) => (
                <Image
                  style={styles.pictureComponent}
                  source={{ uri: item.url }}
                  key={item.url}
                />
              ))
            )}
            {newImageList.length === 0
              ? null
              : newImageList.map((item) => (
                  <Image
                    style={styles.pictureComponent}
                    source={{ uri: item.url }}
                    key={item.url}
                  />
                ))}
          </TouchableOpacity>

          <View style={{ justifyContent: "space-between", flex: 1 }}>
            <CustomButton
              Label="Postar novas informações"
              onButtonPressed={handleSubmit}
            />
            {imageList.length >= 1 || newImageList.length >= 1 ? (
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
        </ScrollView>

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
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default EditProduct;
