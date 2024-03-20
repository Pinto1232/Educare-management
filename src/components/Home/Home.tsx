import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./Home.styles";
import { Navbar } from "../Navbar";

interface HomeProps {
  userId: string;
}

const Home: React.FC<HomeProps> = (userId) => {
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
        <Text style={styles.textHeader}>Elevate Education, Simplify School Management!</Text>
      </View>
      <Navbar
        onIconPress={handleIconPress}
        title="Your Title Here"
        onPress={() => console.log("Navbar pressed")}
      />
    </ImageBackground>
  );
};

export default React.memo(Home);
