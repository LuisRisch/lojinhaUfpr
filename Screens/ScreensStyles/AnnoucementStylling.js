import { StyleSheet } from "react-native";
import FontSize from '../../Constants/FontSizes'; 
import Colors from '../../Constants/Colors'; 
import Spacing from '../../Constants/Spacing';

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
    },
    title: {
        fontWeight: "bold",
        fontSize: FontSize.SuperTall,
        color: Colors.mainGrey,
    },
    category_box: {
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
        width: "100%",
        backgroundColor: Colors.ultraLightGrey,
        height: 35,
        borderRadius: 16,
        paddingHorizontal: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5,
    },
    icon_box: {
        backgroundColor: Colors.mainRed,
        justifyContent: "center",
        alignItems: "center",
        height: 20,
        width: 20,
        borderRadius: 10,
    }, 
    category_text : {
        color : Colors.mainRed , 
        fontSize : FontSize.Tall , 
        fontWeight : '500'
    },
    sizedBox : {
        height : 18
    },   
    BackModalScreen: {
        paddingVertical : Spacing.TopSpacingScreen,
        flex: 1,
        backgroundColor: '#bfbfbf',
        opacity: 0.88,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BackModalAlert: {
        backgroundColor: 'white',
        marginHorizontal: Spacing.MainMargin,
        padding: Spacing.MainPadding,
        width: '90%',
        opacity: 1,
        borderRadius: 28
    },
    TitleModalStyle: {
        alignSelf: 'center',
        color: Colors.mainGrey,
        fontSize: FontSize.Tall,
        fontWeight: 'bold'
    },
    SubTitleModalStyle: {
        alignSelf: 'center',
        color: Colors.lightGrey,
        fontSize: FontSize.Normal,
        fontWeight: '500', 
        textAlign : 'justify'
    }, 
});

export { styles };
