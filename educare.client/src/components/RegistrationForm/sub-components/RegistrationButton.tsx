import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { RegistrationButtonProps } from "../RegistrationForm.types";
import buttonStyle from "../RegistrationForm.styles";

const RegistrationButton = ({ onPress, title }: RegistrationButtonProps) => (
  <TouchableOpacity onPress={onPress} style={buttonStyle.button}>
    <Text style={buttonStyle.text}>{title}</Text>
  </TouchableOpacity>
);

export default RegistrationButton;
