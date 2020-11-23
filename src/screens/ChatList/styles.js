import { StyleSheet, Dimensions, StatusBar } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    padding: 18,
    marginTop: StatusBar.currentHeight,
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
    fontFamily: "ralway-regular-semi",
    width: "90%",
    fontSize: FontSizes.SuperTall,
    // fontWeight: "600",
  },
  content: {
    fontSize: FontSizes.Normal,
    fontFamily: "ralway-regular",
  },
  chatTitle: {
    opacity: 0.6,
    fontFamily: "ralway-regular-bold",
    fontSize: FontSizes.Normal,
  },
  centerTextHolder: {
    justifyContent: "center",
    fontFamily: "ralway-regular",
    width: "55%",
  },
  rightTextHolder: {
    justifyContent: "center",
    fontFamily: "ralway-regular",
    width: "25%",
  },
  rightBoxText: {
    textAlign: "right",
    fontFamily: "ralway-regular",
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
    fontFamily: "ralway-regular",
  },
  ChatTypes: {
    fontFamily: "ralway-regular-semi",
    color: Colors.mainRed,
    fontSize: FontSizes.Tall,
  },
});

export default styles;
