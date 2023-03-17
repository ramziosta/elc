import React, { createContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import OnBoardingNavigation from "./routes/OnBoardingNavigation";

const Stack = createNativeStackNavigator();

const App = () => {
  const atlasToken = getAtlasToken();
  return (
    <NavigationContainer
      accessibilityLabel="ELC Makeup App"
      accessibilityText="A mobile app for purchasing makeup products from ELC."
    >
      <AtlasContext.Provider value={atlasToken}>
       <OnBoardingNavigation />
      </AtlasContext.Provider>
    </NavigationContainer>
  );
};

export default App;


export const AtlasContext = createContext(undefined);

export const getAtlasToken = () => {
  const [atlasToken, setAtlasToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("")
  const getToken = async () => {
    try {
      const response = await fetch("https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/app/elc-makeup-app-kerwc/auth/providers/anon-user/login");
      const json = await response.json();
      setAtlasToken(json.access_token);
      setRefreshToken(json.refresh_token);
    } catch (error) {
      console.error(error);
    }
  };
  const reauthToken = async () => {
    try {
      const response = await fetch("https://us-central1.gcp.realm.mongodb.com/api/client/v2.0/auth/session", {method: "POST", token: refreshToken });
      const json = await response.json();
      setAtlasToken(json.access_token);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return atlasToken;
}
