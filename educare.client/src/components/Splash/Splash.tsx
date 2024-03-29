import React, { useEffect, useRef } from "react";
import { Text, View, Animated } from "react-native";
import styles from "./Splash.styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: { userId: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Splash: React.FC = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation<NavigationProp>();

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
      navigation.navigate("Home", { userId: "Home" });
      console.log("Navigate to the Home screen");
    }, 3000);

    return () => clearTimeout(timer);
  }, [scale, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../assets/splash_logo.jpg")}
        style={[styles.logo, { transform: [{ scale }] }]}
      />
      <Text style={styles.text}>Welcome to Educare Management</Text>
    </View>
  );
};

export default React.memo(Splash);
