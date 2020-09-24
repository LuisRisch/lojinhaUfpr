import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    Modal,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../Constants/Colors";
import { styles } from "../ScreensStyles/MainProductsStlying";
import Spacing from "../../Constants/Spacing";

const MainProducts = () => {
    // Produtos ficticios para teste de Layout

    var product1 = {
        Title: "Vaso de flores feito em casa!",
        Description:
            "Lindo vaso de flores, em que o vaso feito foi á mão. As flores provém do exterior",
        Category: "Artesanato",
        Price: "34.4",
        AnnouncedBy: "Maria Noga Risch",
        imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/lojinhaufpr.appspot.com/o/artesanato.jpg?alt=media&token=e2cb9924-0e7f-4d84-83cd-2265e236fdc0",
        id: "1",
    };
    var product2 = {
        Title: "Brigadeiro",
        Description:
            "Brigadeiros delicioso e caseiros de todos os tipos de sabores",
        Category: "Doce",
        Price: "2.50",
        AnnouncedBy: "Sandra Noga Risch",
        imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/lojinhaufpr.appspot.com/o/Doces.jpeg?alt=media&token=9b8dc0ec-fe2b-4b00-b28d-893e2ed27075",
        id: "2",
    };
    var product3 = {
        Title: "Vaso de flores feito em casa!",
        Description:
            "Lindo vaso de flores, em que o vaso feito foi á mão. As flores provém do exterior",
        Category: "Artesanato",
        Price: "34.4",
        AnnouncedBy: "Maria Noga Risch",
        imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/lojinhaufpr.appspot.com/o/artesanato.jpg?alt=media&token=e2cb9924-0e7f-4d84-83cd-2265e236fdc0",
        id: "3",
    };
    var product4 = {
        Title: "Brigadeiro",
        Description:
            "Brigadeiros delicioso e caseiros de todos os tipos de sabores",
        Category: "Doce",
        Price: "2.50",
        AnnouncedBy: "Sandra Noga Risch",
        imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/lojinhaufpr.appspot.com/o/Doces.jpeg?alt=media&token=9b8dc0ec-fe2b-4b00-b28d-893e2ed27075",
        id: "4",
    };
    var product5 = {
        Title: "Vaso de flores feito em casa!",
        Description:
            "Lindo vaso de flores, em que o vaso feito foi á mão. As flores provém do exterior",
        Category: "Artesanato",
        Price: "34.4",
        AnnouncedBy: "Maria Noga Risch",
        imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/lojinhaufpr.appspot.com/o/artesanato.jpg?alt=media&token=e2cb9924-0e7f-4d84-83cd-2265e236fdc0",
        id: "5",
    };
    var product6 = {
        Title: "Brigadeiro",
        Description:
            "Brigadeiros delicioso e caseiros de todos os tipos de sabores",
        Category: "Doce",
        Price: "2.50",
        AnnouncedBy: "Sandra Noga Risch",
        imgUrl:
            "https://firebasestorage.googleapis.com/v0/b/lojinhaufpr.appspot.com/o/Doces.jpeg?alt=media&token=9b8dc0ec-fe2b-4b00-b28d-893e2ed27075",
        id: "6",
    };

    const ListOfProducts = [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
    ];

    const [
        isListVisualisationSelected,
        setIsListVisualisationSelected,
    ] = useState(false);

    const [isModalOfOptionsSelected, setIsModalOptionsSelected] = useState(false);
    const changeStateOfModalOptionsSelected = () => {
        setIsModalOptionsSelected(!isModalOfOptionsSelected);
        setIsListVisualisationSelected(!isListVisualisationSelected);
    };

    const [isModalUserAreaVisible, setIsModalUserAreaVisible] = useState(true);

    const onProductCardPressed = (name, productId) => {
        // Essa função é responsável por ir para a tela de produto
        // navegação não foi feita ainda.

        console.log(name, productId); //Teste para ver se recebe os dados direito.
    };

    const Items = [
        {
            label: 'Sua conta',
            icon: 'user'
        },
        {
            label: 'Loja',
            icon: 'shopping-cart'
        },
        {
            label: 'Chat',
            icon: 'comments'
        },
        {
            label: 'Sair',
            icon: 'sign-out'
        }
    ]

    const renderItemCard = ({ item }) =>
        isListVisualisationSelected ? (
            <TouchableOpacity
                onPress={() => onProductCardPressed(item.AnnouncedBy, item.id)}
            >
                <View style={styles.Products_Card_Horizontally}>
                    <Image
                        source={{ uri: item.imgUrl }}
                        style={styles.Image_Horizontaly_Display}
                        resizeMode="cover"
                    />
                    <View style={styles.Products_Card_Informations}>
                        <Text numberOfLines={2} style={styles.Products_Title_Horizontally}>{item.Title}</Text>
                        <View style={styles.Price_Box_Horizontally}>
                            <Text style={styles.Price_Layout}>R$ {item.Price}</Text>
                            {/* Espaçamento entre palavras de 5px */}
                            <View style={{ width: 5 }}></View>

                            <Text style={styles.Per_Unity_Horizontally}>a unidade</Text>
                        </View>
                        <View>
                            <Text style={styles.AnnouncedBy_Horizontally_Label}>
                                Anunciado por:
                            </Text>
                            <Text style={styles.AnnouncedBy_Horizontally_Name}>
                                {item.AnnouncedBy}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        ) : (
                <View style={styles.Box_Card_Grid_Products}>
                    <TouchableOpacity
                        onPress={() => onProductCardPressed(item.AnnouncedBy, item.id)}
                    >
                        <Image
                            source={{ uri: item.imgUrl }}
                            style={styles.Image_Layout_Grid}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <Text lineBreakMode={true} style={styles.Product_Title_Grid}>{item.Title}</Text>
                    <View style={styles.Box_Price_Grid}>
                        <Text style={styles.Price_Layout_Grid}>R$ {item.Price}</Text>
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
                            {item.AnnouncedBy}
                        </Text>
                    </View>
                </View>
            );

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.Top_Container_Icons}>
                {/* Não foi adicionado a funcionalidade de quando for pressionado, mas quando
                    for implementado aparecerá um Drawer com informações do usuário */}
                <TouchableOpacity
                    onPress={() => setIsModalUserAreaVisible(!isModalUserAreaVisible)}
                >
                    <Icon name="bars" size={20} />
                </TouchableOpacity>
                {/* Não foi implementado a funcionalidade de quando for pressionado, mas quando 
                    for implementado aparecerá uma área de pesquisa de produtos */}
                <Icon name="search" size={20} />
            </View>
            <View>
                <View style={styles.Top_Secundary_Informations}>
                    <Text style={styles.Top_Secundary_Layout_Informations}>Início</Text>

                    {/* Implementado para ter maior interatividade com o usuário, permitindo-lhe
                        escolher a forma que deseja navegar pelos produtos */}

                    <TouchableOpacity
                        onPress={() => setIsModalOptionsSelected(!isModalOfOptionsSelected)}
                    >
                        <Text style={styles.Top_Secundary_Layout_Informations}>
                            Navegar por: {isListVisualisationSelected ? "Linhas" : "Grades"}
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.Filter_Layout}>Filtrar</Text>
                </View>
                {isListVisualisationSelected ? (
                    <FlatList
                        data={ListOfProducts}
                        renderItem={renderItemCard}
                        key={"_"}
                        keyExtractor={(item) => "_" + item.id}
                        scrollEnabled={true}
                        scrollIndicatorInsets={false}
                    />
                ) : (
                        <FlatList
                            data={ListOfProducts}
                            renderItem={renderItemCard}
                            key={"#"}
                            keyExtractor={(item) => "#" + item.id}
                            numColumns={2}
                            scrollEnabled={true}
                        />
                    )}
            </View>
            {/* Este modal mostra a area do usuário */}
            <Modal
                visible={isModalUserAreaVisible}
                transparent={true}
                animationType="slide"
            >
                <View
                    style={styles.User_Modal_Container}
                >
                    <View>
                        <View style={{ alignSelf: "flex-end" }}>
                            <TouchableOpacity
                                onPress={() => setIsModalUserAreaVisible(!isModalUserAreaVisible)}
                            >
                                <Icon name="arrow-circle-left" size={20} color={Colors.mainPink} />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={styles.User_Top_Information}
                        >
                            <View
                                style={styles.Circle_Box_Photo}
                            >
                                <Icon name="camera" size={15} color="white" />
                            </View>
                            <View
                                style={{
                                    marginLeft: Spacing.MainMargin - 9, //9px
                                }}
                            >
                                <Text
                                    style={styles.User_Name}
                                >
                                    Luis Felipe Risch
                                </Text>
                                <Text style={styles.User_Email}>
                                    lfr20@inf.ufpr.br
                                </Text>
                            </View>
                        </View>
                        {/* Função que cria as abas da área do usuário */}
                        {Items.map((item, index) => (
                            <View style={{ marginTop: Spacing.MainMargin }} key={index}>
                                <View style={styles.Tabs_User_Area}>
                                    <Icon
                                        name={item.icon}
                                        size={20}
                                        color={Colors.mainRed}
                                    />
                                    <Text style={styles.Tabs_User_Label}>{item.label}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.Bottom_Logo}
                    />
                </View>
            </Modal>
            {/* Este modal mostra a área a barra horizontal no final da tela com as opções d
                de visualizar os dados em forma de lista ou grade*/}
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
        </View>
    );
};

export default MainProducts;
