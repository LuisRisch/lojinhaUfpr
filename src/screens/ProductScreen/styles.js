import { StyleSheet, Dimensions } from "react-native";
import Spacing from "../../data/Spacing";
import FontSize from "../../data/FontSizes";
import Color from "../../data/Colors";

import { StatusBar } from "react-native";

const { width } = Dimensions.get("window");

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: Color.backgroundWhite,
  },
  sizedBox: {
    height: Spacing.MainMargin,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textCategoryStyle: {
    fontSize: FontSize.Normal,
    fontFamily : 'ralway-regular-semi',
    color: Color.mainGrey,
    // fontWeight: "500",
  },
  popUpContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  deleteAnnoucement: {
    color: Color.mainRed,
    fontFamily : 'ralway-regular-semi',
    // fontWeight: "500",
    fontSize: FontSize.Lower,
  },
  divider: {
    width: "100%",
    borderColor: Color.mainGrey,
    borderWidth: 0.2,
    marginVertical: 2.5,
  },
  editAnnoucement: {
    fontSize: FontSize.Lower,
    fontFamily : 'ralway-regular-semi',
    fontWeight: "500",
  },
  imageStyle: {
    height: width - 36,
    width: width - 36,
    borderRadius: 16,
    width: "100%",
  },
  title: {
    fontSize: FontSize.SuperTall,
    // fontWeight: "bold",
    fontFamily : 'ralway-regular-bold',
    color: "#000",
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  priceStyle: {
    color: Color.mainRed,
    fontFamily : 'Mplus-bold',
    // fontWeight: "bold",
    fontSize: FontSize.Tall,
  },
  perUnity: {
    color: Color.mainGrey,
    fontFamily : 'ralway-regular-semi',
    // fontWeight: "500", 
    fontSize: FontSize.Tall,
  },
  AnnouncedBy: {
    color: Color.mainGrey, 
    fontFamily : 'ralway-regular-semi',
    // fontWeight: "500",
    fontSize: FontSize.Lower,
  },
  boxInformation: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  labelStyle: {
    fontSize: FontSize.Tall,
    color: Color.mainRed, 
    fontFamily : 'ralway-regular-bold',
    // fontWeight: "bold",
    textDecorationLine: "underline",
  },
  subLabel: {
    color: Color.mainGrey,
    fontSize: FontSize.Lower, 
    fontFamily : 'ralway-regular-semi',
    // fontWeight: "500",
  },
  logoBox: {
    flexDirection: "column-reverse",
    flex: 1,
  },
  logoStyle: {
    alignSelf: "center",
    width: 55,
    height: 55,
    bottom: 0,
  },
});

export { Styles };
