import React from "react";
import { View, ImageBackground } from "react-native";
import styles from "./Home.styles";

interface HomeProps {
  userId: string;
}

const Home: React.FC<HomeProps> = (userId) => {
  console.log(userId);

  return (
    <ImageBackground
      source={require("../../../assets/home.jpg")}
      style={{ flex: 1 }}
    >
      <View style={styles.blueOverlay} />
      <View></View>
    </ImageBackground>
  );
};

export default React.memo(Home);
