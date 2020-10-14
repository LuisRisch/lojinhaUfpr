import { StyleSheet } from "react-native";
import Colors from "../../data/Colors";
import Spacing from "../../data/Spacing";
import FontSize from "../../data/FontSizes";

const styles = StyleSheet.create({
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
    padding: 18,
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
  Bottom_Logo: {
    alignSelf: "center",
    width: 70,
    height: 70,
    marginTop: 20,
  },
});

export { styles };
