import { StyleSheet } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";
import Spacing from "../../data/Spacing";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: Spacing.MainMargin,
    marginHorizontal: Spacing.MainMargin,
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
    fontWeight: "500",
  },

  saveOrForgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lowerTexT: {
    color: Colors.mainGrey,
    fontSize: FontSizes.TooLower,
    fontWeight: "500",
  },

  redText: {
    color: Colors.mainRed,
    fontSize: FontSizes.Lower,
    fontWeight: "bold",
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
    borderRadius: 28,
  },
  TitleModalStyle: {
    alignSelf: "center",
    color: Colors.mainGrey,
    fontSize: FontSizes.Tall,
    fontWeight: "bold",
  },
  SizedBox: {
    height: 18,
  },
  SubTitleModalStyle: {
    alignSelf: "center",
    textAlign: "center",
    color: Colors.lightGrey,
    fontSize: FontSizes.Normal,
    fontWeight: "500",
  },
});

export { styles };
