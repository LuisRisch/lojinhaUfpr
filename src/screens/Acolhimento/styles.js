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
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "ralway-regular-semi",
    fontSize: 18,
  },
  bodyText: {
    fontFamily: "ralway-regular",
    fontSize: 14,
    marginTop: 5,
    textAlign: "justify",
  },
  logo: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginTop: 50,
  },
  timelineBox: {
    height: 310,
    width: 300,
    padding: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  timelineText: {
    textAlign: "justify",
    fontFamily: "ralway-regular",
    fontSize: 14,
  },
  timelineIndexBox: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: Colors.mainRed,
    borderWidth: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    zIndex: 1,
  },
  timelineIndexId: {
    fontFamily: "Mplus-bold",
    fontSize: 14,
    color: Colors.mainRed,
  },
});

export default styles;
