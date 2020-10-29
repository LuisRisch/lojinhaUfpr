import { StyleSheet, Dimensions } from "react-native";
import Spacing from "../../data/Spacing";
import FontSize from "../../data/FontSizes";
import Colors from "../../data/Colors";
import { StatusBar } from "react-native";
import FontSizes from "../../data/FontSizes";

const { width } = Dimensions.get("window");
const imageSize = Math.floor(width / 2) - 40;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  Products_Card_Horizontally: {
    marginTop: Spacing.MainMargin,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    padding: 12,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1.5,
  },
  Image_Horizontaly_Display: {
    height: 100,
    width: 100,
    alignSelf: "center",
    borderRadius: 10,
  },
  Products_Card_Informations: {
    marginLeft: 12,
    // justifyContent: "space-between",
    alignContent: "flex-start",
  },
  Products_Title_Horizontally: {
    fontSize: FontSize.Normal,
    fontFamily: "ralway-regular-bold",
    color: "#3b3b3b",
    // fontWeight: "bold",
    flexShrink: 1,
    maxWidth: "80%",
  },
  Price_Box_Horizontally: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  Price_Layout: {
    color: Colors.mainRed,
    fontSize: FontSize.Normal,
    fontFamily: "Mplus-bold",
    // fontWeight: "bold",
  },
  Per_Unity_Horizontally: {
    color: Colors.mainGrey,
    fontSize: FontSize.Lower,
    fontWeight: "500",
  },
  AnnouncedBy_Horizontally_Label: {
    fontSize: FontSize.TooLower,
    fontFamily: "ralway-regular-semi",
    color: Colors.mainGrey,
    // fontWeight: "500",
  },
  AnnouncedBy_Horizontally_Name: {
    fontSize: FontSize.TooLower,
    fontFamily: "ralway-regular-bold",
    color: "#3b3b3b",
    // fontWeight: "bold",
  },
  Box_Card_Grid_Products: {
    marginHorizontal: 4,
    marginTop: Spacing.MainMargin,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    width: "48%",
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1.5,
  },
  Image_Layout_Grid: {
    height: imageSize - 12,
    width: imageSize - 12,
    alignSelf: "center",
    borderRadius: 10,
  },
  Product_Title_Grid: {
    fontSize: FontSize.Normal,
    fontFamily: "ralway-regular-bold",
    color: "#3b3b3b",
    flexShrink: 1,
    alignItems: "flex-start",
    maxWidth: "90%",
  },
  Box_Price_Grid: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
  },
  Price_Layout_Grid: {
    color: Colors.mainRed,
    fontSize: FontSize.Normal,
    fontFamily: "Mplus-bold",
    // fontWeight: "bold",
  },
  Top_Container_Icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 20,
  },
  Top_Secundary_Informations: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: -20,
    padding: 20,
  },
  Top_Secundary_Layout_Informations: {
    fontSize: FontSize.Lower,
    fontFamily: "ralway-regular-semi",
    color: Colors.mainGrey,
    // fontWeight: "500",
  },
  Filter_Layout: {
    fontSize: FontSize.Normal,
    fontFamily: "ralway-regular-bold",
    color: Colors.mainRed,
    // fontWeight: "bold",
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
  category_text: {
    color: Colors.mainRed,
    fontFamily: "ralway-regular-semi",
    fontSize: FontSize.Tall,
    // fontWeight: "500",
  },
  sizedBox: {
    height: 18,
  },
  BackModalScreen: {
    paddingVertical: Spacing.TopSpacingScreen,
    flex: 1,
    backgroundColor: "#bfbfbf",
    opacity: 0.88,
    justifyContent: "center",
    alignItems: "center",
  },
  BackModalAlert: {
    backgroundColor: "white",
    marginHorizontal: Spacing.MainMargin,
    padding: Spacing.MainPadding,
    width: "90%",
    opacity: 1,
    borderRadius: 28,
  },
  TitleModalStyle: {
    alignSelf: "center",
    color: Colors.mainGrey,
    fontFamily: "ralway-regular-bold",
    fontSize: FontSize.Tall,
    // fontWeight: "bold",
  },
  SubTitleModalStyle: {
    alignSelf: "center",
    color: Colors.lightGrey,
    fontFamily: "ralway-regular-semi",
    fontSize: FontSize.Normal,
    // fontWeight: "500",
    textAlign: "justify",
  },
  loadMoreProductsContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  loadProductsText: {
    color: Colors.mainGrey,
    fontFamily: "ralway-regular-semi",
    fontSize: FontSize.Tall,
    textAlign: "center",
    // fontWeight: "500",
  },
});

export { styles };
