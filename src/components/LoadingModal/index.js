import React from "react";
import LottieView from "lottie-react-native";
import { Modal, View } from "react-native";

const LoadingModal = ({ visible }) => {
  return (
    <Modal transparent visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.25)",
        }}
      >
        <LottieView
          style={{ height: 200 }}
          autoPlay
          loop
          source={require("../../assets/lotties/loading.json")}
        />
      </View>
    </Modal>
  );
};

export default LoadingModal;
