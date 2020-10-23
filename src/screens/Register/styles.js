import { StyleSheet, Dimensions, StatusBar } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";
import Spacing from "../../data/Spacing";

const widht = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.backgroundWhite,
    padding: 20,
  },

  topContaine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "58%",
  },

  normalTextTitle: {
    color: Colors.mainGrey,
    fontSize: FontSizes.SuperTall,
    fontFamily: "ralway-regular-bold",
    // fontWeight: "bold",
    alignContent: "center",
  },

  lowerTexT: {
    color: Colors.mainGrey,
    fontFamily: "ralway-regular-semi",
    fontSize: FontSizes.TooLower,
    // fontWeight: "500",
  },

  lowerTextUnderline: {
    color: Colors.mainGrey,
    fontSize: FontSizes.TooLower,
    fontFamily: "ralway-regular-semi",
    // fontWeight: "500",
    textDecorationLine: "underline",
    flexShrink: 1,
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
    fontSize: FontSizes.Tall,
    // fontWeight: "bold",
  },
  SubTitleModalStyle: {
    alignSelf: "center",
    color: Colors.lightGrey,
    fontFamily: "ralway-regular-semi",
    fontSize: FontSizes.Normal,
    // fontWeight: "500",
    textAlign: "justify",
  },
  ChoosePhoto: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    backgroundColor: Colors.lightGrey,
    borderRadius: 75,
    alignSelf: "center",
    marginVertical: Spacing.MainMargin,
  },
  PerfilPhoto: {
    // aspectRatio : 16 / 9,
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginVertical: Spacing.MainMargin,
  },
  CheckBoxContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 18,
  },
  buttonContainer: {
    backgroundColor: Colors.mainRed,
    marginTop: Spacing.MainMargin,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },

  buttonLabel: {
    color: "white",
    fontFamily: "ralway-regular-semi",
    fontSize: FontSizes.Normal,
    // fontWeight: "500",
  },
});

export { styles };
