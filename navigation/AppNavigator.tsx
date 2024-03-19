import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeContainer from "../src/components/Home/HomeContainer";


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeContainer} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
