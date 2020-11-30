import { StyleSheet } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";
import Spacing from "../../data/Spacing";
import { StatusBar } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.backgroundWhite,
  },

  topContaine: {
    flexDirection: "row",
    width: "100%",
  },

  switchButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  redContainer: {
    backgroundColor: Colors.mainRed,
    height: 22,
    width: 3,
    marginRight: 8,
    borderRadius: 16,
  },

  normalText: {
    color: Colors.mainGrey,
    fontSize: FontSizes.Normal,
    fontFamily : 'ralway-regular-semi',
    // fontWeight: "500",
  },

  saveOrForgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lowerTexT: {
    color: Colors.mainGrey,
    fontFamily : 'ralway-regular-semi',
    fontSize: FontSizes.TooLower,
    // fontWeight: "500",
  },

  redText: {
    color: Colors.mainRed,
    fontFamily : 'ralway-regular-bold',
    fontSize: FontSizes.Lower,
  },

  image: {
    marginVertical: Spacing.MainMargin,
    alignSelf: "center",
    width: 250,
    height: 170,
  },

  inputsContainer: {
    borderRadius: 16,
    backgroundColor: "white",
    paddingHorizontal: Spacing.MainPadding,
    paddingVertical: Spacing.MainPadding + 6, // 24 
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  BackModalScreen: {
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
  },
  TitleModalStyle: {
    alignSelf: "center", 
    fontFamily : 'ralway-regular-bold',
    color: Colors.mainGrey,
    fontSize: FontSizes.Tall,
  },
  SizedBox: {
    height: 18,
  },
  SubTitleModalStyle: { 
    fontFamily : 'ralway-regular-semi',
    alignSelf: "center",
    textAlign: "center",
    color: Colors.lightGrey,
    fontSize: FontSizes.Normal,
    // fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export { styles };
