import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import LoginButton from "./sub-components/LoginButton";
import loginStyles from "./Login.styles";
import { useNavigation } from "@react-navigation/native";
import { LoginFormProps } from "./Login.types";


// Define a new type for the internal form state
type LoginFormState = {
  username: string;
  password: string;
};

export type ParamList = {
  RegistrationForm: undefined;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const navigation = useNavigation<StackNavigationProp<ParamList>>();

  const handleSubmit = () => {
    console.log(formState.username, formState.password);
    onSubmit(formState.username, formState.password);
  };

  const handleChange = (value: string, field: keyof LoginFormState) => {
    setFormState({ ...formState, [field]: value });
  };

  return (
    <View style={loginStyles.container}>
      <TextInput
        style={loginStyles.input}
        value={formState.username}
        onChangeText={(value) => handleChange(value, "username")}
        placeholder="Username"
      />
      <TextInput
        style={loginStyles.input}
        value={formState.password}
        onChangeText={(value) => handleChange(value, "password")}
        placeholder="Password"
        secureTextEntry
      />
      <LoginButton title="Login" onPress={handleSubmit} />
      <Text style={loginStyles.promptText}>Not registered yet?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("RegistrationForm")}>
        <Text style={loginStyles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
