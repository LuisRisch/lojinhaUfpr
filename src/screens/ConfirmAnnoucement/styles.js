import { StyleSheet } from "react-native";
import Spacing from "../../data/Spacing";
import FontSize from "../../data/FontSizes";
import Color from "../../data/Colors";

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    // fontWeight: "500",
  },
  imageStyle: {
    height: 200,
    borderRadius: 16,
    width: "100%",
  },
  title: {
    fontSize: FontSize.Tall,
    fontFamily : 'ralway-regular-bold',
    // fontWeight: "bold",
    color: Color.mainGrey,
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  priceStyle: {
    color: Color.mainRed,
    fontFamily : 'ralway-regular-bold',
    // fontWeight: "bold",
    fontSize: FontSize.Tall,
  },
  perUnity: {
    color: Color.mainGrey,
    // fontWeight: "500",
    fontFamily : 'ralway-regular-semi',
    fontSize: FontSize.Tall,
  },
  AnnouncedBy: {
    color: Color.mainGrey,
    // fontWeight: "500",
    fontFamily : 'ralway-regular-semi',
    fontSize: FontSize.Lower,
  },
  boxInformation: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  labelStyle: {
    fontFamily : 'ralway-regular-semi',
    fontSize: FontSize.Tall,
    color: Color.mainRed,
    // fontWeight: "500",
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
