import { StyleSheet, StatusBar } from "react-native";
import Colors from "../../data/Colors";
import Spacing from "../../data/Spacing";
import FontSize from "../../data/FontSizes";
import Color from "../../data/Colors";

const Style = StyleSheet.create({
  PhotoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: Colors.mainRed,
    alignSelf: "center",
    marginVertical: Spacing.MainMargin,
  },
  TextBox: {
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    width: "100%",
    backgroundColor: Colors.ultraLightGrey,
    height: 35,
    borderRadius: 5,
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
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 18,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleStyle: {
    fontSize: FontSize.SuperTall,
    fontFamily: "ralway-regular-semi",
    color: Color.mainGrey,
    // fontWeight: "500",
  },
  nameAndChangePhotoBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  personNameStyle: {
    fontSize: FontSize.Tall,
    fontFamily: "ralway-regular-bold",
    color: Color.mainGrey,
    // fontWeight: "bold",
  },
  changePhotoStyle: {
    color: Color.mainRed,
    fontFamily: "ralway-regular-semi",
    fontSize: FontSize.Lower,
    // fontWeight: "500",
  },
  logoStyle: { alignSelf: "center", width: 55, height: 55, overflow: "hidden" },
  TentInfo: {
    fontSize: FontSize.Normal,
    fontFamily: "ralway-regular-semi",
    color: Colors.mainGrey,
  },
});

export { Style };
