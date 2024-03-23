import React from "react";
import Navbar from "./Navbar";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  LoginForm: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "LoginForm">;

const NavbarContainer: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const onIconPress = (iconName: string) => {
    console.log(`Icon pressed: ${iconName}`);
    if (iconName === "LoginForm") {
      console.log("Attempting to navigate to LoginForm");
      navigation.push("LoginForm");
      console.log(navigation.getState());
    }
  };

  return <Navbar onIconPress={onIconPress} />;
};

export default NavbarContainer;
