import { StyleSheet } from "react-native";
import Colors from "../../data/Colors";
import fontSizes from '../../data/FontSizes';
import FontSizes from "../../data/FontSizes";

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems : 'center',
    // width: "100%",
    backgroundColor: Colors.ultraLightGrey,
    height: 35,
    borderRadius: 5,
    paddingStart: 8,
    marginVertical: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1.5,
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.ultraLightGrey,
    borderColor: Colors.mainRed,
    borderWidth: 1,
    height: 35,
    borderRadius: 16,
    paddingHorizontal: 8,
    marginVertical: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1.5,
  },
  errorMessage: {
    color: Colors.mainRed,
    fontFamily : 'ralway-regular-semi',
    fontSize: FontSizes.TooLower,
  }, 
  textInputStyle:{
    fontFamily : 'ralway-regular',
    fontSize: FontSizes.Lower,
  }
});

export { styles };
