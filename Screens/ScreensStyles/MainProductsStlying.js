import { StyleSheet } from "react-native";
import Spacing from "../../Constants/Spacing";
import FontSize from "../../Constants/FontSizes";
import Colors from "../../Constants/Colors";

const styles = StyleSheet.create({
    Products_Card_Horizontally: {
        marginTop: Spacing.MainMargin,
        backgroundColor: "white",
        borderRadius: 16,
        elevation: 3.0,
        flexDirection: "row",
        padding: 12,
    },
    Image_Horizontaly_Display: {
        height: 100,
        width: 100,
        alignSelf: "center",
        borderRadius: 10,
    },
    Products_Card_Informations: {
        marginLeft: 12,
        justifyContent: "space-between",
        alignContent: "flex-start",
    },
    Products_Title_Horizontally: {
        fontSize: FontSize.Normal,
        color: "#3b3b3b",
        fontWeight: "bold",
        flexShrink: 1,
    },
    Price_Box_Horizontally: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
    },
    Price_Layout: {
        color: Colors.mainRed,
        fontSize: FontSize.Normal,
        fontWeight: "bold",
    },
    Per_Unity_Horizontally: {
        color: Colors.mainGrey,
        fontSize: FontSize.Lower,
        fontWeight: "500",
    },
    AnnouncedBy_Horizontally_Label: {
        fontSize: FontSize.TooLower,
        color: Colors.mainGrey,
        fontWeight: "500",
    },
    AnnouncedBy_Horizontally_Name: {
        fontSize: FontSize.TooLower,
        color: "#3b3b3b",
        fontWeight: "bold",
    },
    Box_Card_Grid_Products: {
        marginHorizontal: 4,
        marginTop: Spacing.MainMargin,
        backgroundColor: "white",
        borderRadius: 16,
        elevation: 3.0,
        padding: 12,
        width: "48%",
        justifyContent: "space-between",
    },
    Image_Layout_Grid: {
        height: 120,
        width: "100%",
        alignSelf: "center",
        borderRadius: 10,
    },
    Product_Title_Grid: {
        fontSize: FontSize.Normal,
        color: "#3b3b3b",
        fontWeight: "bold",
        flexShrink: 1,
        alignItems: "flex-start",
    },
    Box_Price_Grid: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
    },
    Price_Layout_Grid: {
        color: Colors.mainRed,
        fontSize: FontSize.Normal,
        fontWeight: "bold",
    },
    Top_Container_Icons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
    },
    Top_Secundary_Informations: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginTop: Spacing.MainMargin,
    },
    Top_Secundary_Layout_Informations: {
        fontSize: FontSize.Normal,
        color: Colors.mainGrey,
        fontWeight: "500",
    },
    Filter_Layout: {
        fontSize: FontSize.Normal,
        color: Colors.mainRed,
        fontWeight: "bold",
    },
    Bottom_Container_Options_Of_Navigation: {
        height: 50,
        backgroundColor: "white",
        elevation: 10,
        justifyContent: "center",
    },
    Bottom_Spacing_Icons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
    },
    User_Modal_Container: {
        flex: 1,
        width: "70%",
        backgroundColor: "white",
        paddingHorizontal: Spacing.MainPadding,
        justifyContent: "space-between",
        paddingTop: Spacing.MainPadding,
        backgroundColor: Colors.backgroundWhite,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    User_Top_Information: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    Circle_Box_Photo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Colors.mainGrey,
        justifyContent: "center",
        alignItems: "center",
    },
    User_Name: {
        fontSize: FontSize.Tall,
        color: "black",
        fontWeight: "bold",
    },
    User_Email: {
        color: Colors.mainGrey,
        fontWeight: "500",
        fontSize: FontSize.Lower,
    },
    Tabs_User_Area: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: Spacing.MainMargin - 9,
    },
    Tabs_User_Label: {
        color: Colors.mainGrey,
        fontSize: FontSize.Tall,
        marginLeft: Spacing.MainMargin,
    }, 
    Bottom_Logo : {
        alignSelf: "center", 
        width: 70, 
        height: 70 
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
