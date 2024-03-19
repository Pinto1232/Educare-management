import React, { useEffect, useRef } from "react";
import { Text, View, Animated } from "react-native";
import styles from "./Splash.styles";
/* import { useNavigation } from '@react-navigation/native';  */


const Splash: React.FC = () => {
  const scale = useRef(new Animated.Value(1)).current;
  /* const navigation = useNavigation(); */

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    const timer = setTimeout(() => {
        /* navigation.navigate('<HomeContainer />'); */
        console.log("Navigate to the Home screen");
      }, 3000);
      return () => clearTimeout(timer);
  }, [scale, /* navigation */]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../assets/splash_logo.png")}
        style={[styles.logo, { transform: [{ scale }] }]}
      />
      <Text style={styles.text}>Welcome to Educare Management</Text>
    </View>
  );
};

export default React.memo(Splash);
