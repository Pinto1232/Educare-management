import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { RegistrationProps } from "../RegistrationForm/RegistrationForm.types";
import RegistrationButton from "./sub-components/RegistrationButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import styles from "../RegistrationForm/RegistrationForm.styles";

export type ParamList = {
    LoginForm: undefined;
};

const RegistrationForm: React.FC<RegistrationProps> = () => {
  const navigation = useNavigation<StackNavigationProp<ParamList>>();
  const [formState, setFormState] = useState<RegistrationProps>({
    name: "",
    email: "",
    password: "",
    title: "",
    onPress: () => {},
  });


  const handleSubmit = () => {
    console.log(formState);
  };

  const handleChange = (value: string, field: keyof RegistrationProps) => {
    setFormState({ ...formState, [field]: value });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formState.name}
        onChangeText={(value) => handleChange(value, "name")}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formState.email}
        onChangeText={(value) => handleChange(value, "email")}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formState.password}
        onChangeText={(value) => handleChange(value, "password")}
      />
      <RegistrationButton title="Register" onPress={handleSubmit} />
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginForm")}
      >
        <Text style={styles.promptText}>Registered already?</Text>
        <Text style={styles.registerText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(RegistrationForm);
