import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LoginButtonProps } from "../Login.types";
import buttonStyle from "../Login.styles";

const LoginButton = ({ onPress, title }: LoginButtonProps) => (
  <TouchableOpacity onPress={onPress} style={buttonStyle.button}>
    <Text style={buttonStyle.text}>{title}</Text>
  </TouchableOpacity>
);

export default LoginButton;
