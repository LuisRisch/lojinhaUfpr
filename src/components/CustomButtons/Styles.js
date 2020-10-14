import { StyleSheet } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";
import Spacing from "../../data/Spacing";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.mainRed,
    marginTop: Spacing.MainMargin,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  buttonLabel: {
    color: "white",
    fontSize: FontSizes.Normal,
    fontWeight: "500",
  },
});

export { styles };
