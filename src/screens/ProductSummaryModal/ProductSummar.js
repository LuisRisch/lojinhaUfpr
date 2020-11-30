import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import CustomCloseIcon from "../../components/CustomCloseIcon";
import { styles } from "./Styles";
import { ListOfGeneral } from "../../../temp/Products/General";
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

const ProductSummary = ({ navigation, route }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currCircle, setCurrCircle] = useState(0);
  const { item: product } = route.params;

  console.log(product);

  const imgs = [...product.picture];
  const infos = [
    {
      title: "Descrição",
      content: product.description,
    },
    {
      title: "Pagamento",
      content: product.paymentDescription,
    },
    {
      title: "Entrega",
      content: product.deliveryDescription,
    },
    {
      title: "Preço",
      content: product.price,
    },
    {
      title: "Vendido por",
      content: product.seller.name,
    },
  ];

  const HandleScroll = (event) => {
    const VIEW_SIZE = event.nativeEvent.layoutMeasurement.width;
    const CONTENT_OF_SET = event.nativeEvent.contentOffset.x;
    const SELECTED_INDEX = Math.round(CONTENT_OF_SET / VIEW_SIZE);
    setCurrCircle(SELECTED_INDEX);
  };

  const HandleImagePressed = (params) => {
    navigation.navigate("FullScreenImage", { params: params });
  };

  if (fontsLoaded) {
    return (
      <View style={styles.screen}>
        <ScrollView>
          <CustomCloseIcon
            icon="arrow-circle-left"
            onPress={() => navigation.goBack()}
          />

          {/* <View style={styles.sizedBox}></View> */}

          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.sizedBox}></View>

          <TouchableWithoutFeedback onPress={() => HandleImagePressed(imgs)}>
            <View>
              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={HandleScroll}
              >
                {imgs.map((image, index) => (
                  <Image
                    key={index}
                    source={{ uri: image.url }}
                    style={styles.imageStyle}
                    resizeMode="contain"
                  />
                ))}
              </ScrollView>
              <View style={styles.circlesContainer}>
                {imgs.map((img, i) => (
                  <View
                    key={i}
                    style={[
                      currCircle === i
                        ? styles.currCircle
                        : styles.wihiteCircle,
                      { opacity: i === currCircle ? 1 : 0.5 },
                    ]}
                  />
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.sizedBox}></View>
          {infos.map((info, index) => (
            <View key={index} style={{ marginTop: 9 }}>
              <Text style={styles.TitleInfo}>{info.title}</Text>
              <Text style={styles.subTitle}>
                {index === 3 ? info.content + " reais" : info.content}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
};

export default ProductSummary;
