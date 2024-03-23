import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
import styles from "./Navbar.styles";
import { NavbarProps } from "./Navbar.types";

const Navbar: React.FC<NavbarProps> = ({ onIconPress }) => {
  const navigation = useNavigation();


  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={() => onIconPress("home")}>
        <Icon name="home" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onIconPress("search")}>
        <Icon name="search" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LoginForm")}>
        <Icon style={styles.UserIcon} name="user" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
