import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomCloseIcon from '../CustomCloseIcon';
import { styles } from './Styles'

import { ListOfGeneral } from "../../../temp/Products/General";
import { ScrollView } from 'react-native-gesture-handler';

const ProductSummary = ({ navigation }) => {
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
}


export default ProductSummary;