import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SplashScreen, LoadingScreen, InfoScreen, SignInScreen, SignUpScreen,  } from "../Screens";
import TabsNavigation from "./TabsNavigation";
const Stack = createNativeStackNavigator();

const OnBoardingNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigation;
