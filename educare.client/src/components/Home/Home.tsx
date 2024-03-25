import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./Home.styles";
import { HomeProps } from "./Home.types";
import { Navbar } from "../Navbar";

const Home: React.FC<HomeProps> = (props) => {
  const { userId, title, onPress } = props;

  const handleIconPress = (iconName: string) => {
    console.log(`${iconName} icon pressed`);
  };

  console.log(userId);

  return (
    <ImageBackground
      source={require("../../../assets/home.jpg")}
      style={{ flex: 1 }}
    >
      <View style={styles.blueOverlay} />
      <View style={styles.container}>
        <Text style={styles.textHeader}>{title}</Text>
      </View>
      <Navbar
        onIconPress={handleIconPress}
        title=""
        onPress={() => console.log("Navbar pressed")}
      />
    </ImageBackground>
  );
};

export default React.memo(Home);
