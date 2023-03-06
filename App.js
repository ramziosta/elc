import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
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
    <NavigationContainer >
      <OnBoardingNavigation />
    </NavigationContainer>
  );
};

export default App;
