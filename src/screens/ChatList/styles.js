import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    margin: -18,
    padding: 18,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    textAlign: "center",
  },
  chatHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginVertical: 5,
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
    width: "100%",
  },
  title: {
    textAlign: "center",
    width: "90%",
    fontSize: FontSizes.SuperTall,
  },
  content: {
    fontSize: FontSizes.Normal,
  },
  chatTitle: {
    fontWeight: "bold",
    fontSize: FontSizes.Normal,
  },
  centerTextHolder: {
    justifyContent: "center",
    width: "55%",
  },
  rightTextHolder: {
    justifyContent: "center",
    width: "25%",
  },
  rightBoxText: {
    textAlign: "right",
    fontSize: FontSizes.TooLower,
  },
  avatar: {
    height: width * 0.15,
    width: width * 0.15,
    zIndex: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  dot: {
    backgroundColor: Colors.mainRed,
    height: 10,
    width: 10,
    borderRadius: 5,
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: 15,
    zIndex: 1,
  },
  subText: {
    fontSize: FontSizes.TooLower,
  },
});

export default styles;
