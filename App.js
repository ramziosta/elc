import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import OnBoardingNavigation from "./Navigation/OnBoardingNavigation";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "grey",
  },
};

const Stack = createNativeStackNavigator();

const App = () => {



  return (
    <NavigationContainer>
      <OnBoardingNavigation />
    </NavigationContainer>
  );
};

export default App;
