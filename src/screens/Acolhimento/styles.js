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
    height: 60,
    width: 60,
    alignSelf: "center",
  },
  timelineBox: {
    height: 280,
    marginTop: 30,
    width: 290,
    padding: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 20,
    marginBottom: 100,
    alignItems: "center",
  },
  timelineText: {
    textAlign: "justify",
    fontFamily: "ralway-regular",
    fontSize: 14,
    marginTop: 10,
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
    position: "absolute",
    top: -25,
    backgroundColor: "#fff",
  },
  timelineIndexId: {
    fontFamily: "Mplus-bold",
    fontSize: 14,
    color: Colors.mainRed,
  },
  dot: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: Colors.mainRed,
    position: "absolute",
    top: -30,
  },
  stageBox: {
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    borderColor: Colors.mainRed,
    borderWidth: 6,
    position: "absolute",
    bottom: -85,
  },
  stageText: {
    textAlign: "center",
    fontFamily: "ralway-regular-bold",
    fontSize: 14,
    opacity: 0.5,
    marginBottom: 3,
  },
  socialView: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default styles;
