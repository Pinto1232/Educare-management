import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeContainer from "../src/components/Home/HomeContainer";
import LoginContainer from "../src/components/Login/LoginContainer";
import RegistrationFormContainer from "../src/components/RegistrationForm/RegistrationFormContainer";
import Splash from "../src/components/Splash/Splash";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeContainer} />
      <Stack.Screen name="LoginForm" component={LoginContainer} />
      <Stack.Screen name="RegistrationForm" component={RegistrationFormContainer} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
