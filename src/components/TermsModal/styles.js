import { StyleSheet } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: FontSizes.Tall,
    color: Colors.darkGrey,
    fontFamily: "ralway-regular-bold",
  },
  bodyText: {
    fontSize: FontSizes.Lower,
    color: Colors.darkGrey,
    textAlign: "justify",
    fontFamily: "ralway-regular",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.darkGrey,
    fontSize: FontSizes.Normal,
    textAlign: "justify",
    fontFamily: "ralway-regular-bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});

export { styles };
