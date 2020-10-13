import React, { useState } from "react";
import { Switch } from "react-native";

export default function CustomSwitchButton(props) {
  return (
    <Switch
      onTouch
      style={{ alignSelf: "center" }}
      trackColor={{ false: "#b9b9b9", true: "#FA8072" }}
      thumbColor={props.value ? "#f4f3f4" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={props.onChange}
      value={props.value}
    />
  );
}
