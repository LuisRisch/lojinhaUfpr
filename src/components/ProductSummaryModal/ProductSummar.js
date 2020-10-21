import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomCloseIcon from '../CustomCloseIcon';
import { styles } from './Styles'

import { ListOfGeneral } from "../../../temp/Products/General";
import { ScrollView } from 'react-native-gesture-handler'; 

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

const ProductSummary = ({ navigation }) => { 
    const [fontsLoaded, setFontsLoaded] = useState(false); 
    const product = { ...ListOfGeneral[0] }
    const imgs = [...ListOfGeneral[0].picture]

    const infos = [
        {
            title: 'Descrição',
            content: product.description
        },
        {
            title: 'Pagamento',
            content: product.paymentDescription
        },
        {
            title: 'Entrega',
            content: product.deliveryDescription
        },
        {
            title: 'Preço',
            content: product.price
        },
        {
            title: 'Vendido por',
            content: product.user.name
        }
    ]
    if(fontsLoaded){
        return (
            <View style={styles.screen}>
                <CustomCloseIcon
                    icon='arrow-circle-left'
                    onPress={() => navigation.goBack()}
                />
    
                {/* <View style={styles.sizedBox}></View> */}
    
                <Text style={styles.title}>
                    {product.title}
                </Text> 
    
                <View style={styles.sizedBox}></View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.BoxInfo}>
                        <Image
                            source={{
                                uri: imgs[0].url
                            }}
                            style={styles.imageStyle}
                            resizeMode='cover'
                        />
    
                        {
                            infos.map((info, index) => (
                                <View key={index} style={{ marginTop: 9 }}>
                                    <Text style={styles.TitleInfo}>
                                        {info.title}
                                    </Text>
                                    <Text style={styles.subTitle}>
                                        {
                                            index === 3 ? info.content + ' reais' : info.content
                                        }
                                    </Text>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        );
    } else {
        return <AppLoading
            startAsync={getFonts} 
            onFinish={() => setFontsLoaded(true)}
        />
    }
    
}


export default ProductSummary;