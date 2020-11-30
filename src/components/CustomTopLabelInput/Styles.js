import { StyleSheet } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";

const styles = StyleSheet.create({
  normalText: {
    color: Colors.mainGrey,
    fontSize: FontSizes.Normal, 
    textAlign : 'left', 
    alignSelf : 'flex-start',
    fontFamily : 'ralway-regular-semi',
    // fontWeight: "500",
  },
});

export { styles };
