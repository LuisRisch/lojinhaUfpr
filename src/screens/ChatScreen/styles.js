import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../data/Colors";
import FontSizes from "../../data/FontSizes";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: Colors.backgroundWhite,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    width: width - 80,
  },
  submitButton: {
    height: 40,
    width: 40,
    backgroundColor: Colors.mainRed,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 3,
    borderRadius: 25,
    marginLeft: 5,
  },
  chatMessage: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  userMessage: {
    minWidth: "40%",
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    borderBottomRightRadius: 0,
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  userSubTextView: {
    width: "40%",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
  personMessage: {
    minWidth: "40%",
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    backgroundColor: Colors.mainRed,
    alignSelf: "flex-start",
  },
  personSubTextView: {
    width: "40%",
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
  },
  userTextStyle: {
    color: "black",
  },
  chatTextStyle: {
    width: "90%",
    color: "black",
  },
  personTextStyle: {
    color: "white",
  },
  subTextStyle: {
    color: Colors.mainGrey,
    fontSize: FontSizes.TooLower,
    marginBottom: 10,
  },
});

export default styles;
