import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import ProductStack from "./ProductStack";
import { FavoriteScreen, AccountScreen } from "../Screens";
import ProductsListTest from "../Screens/DBComponent";

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="ProductStack"
      screenOptions={{
        activeTintColor: "#E3C3FF",
      }}
    >
      <Tab.Screen
        name="Home"
        style={{ backgroundColor: "#111111" }}
        component={ProductStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../assets/icons/material-symbols_home-rounded-pink.png")
                  : require("../assets/icons/material-symbols_home-outline-rounded-white.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
                backgroundColor: "black",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={ProductsListTest}
        options={{
          tabBarLabel: "Favorite",

          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../assets/icons/mdi_cards-heart-pink.png")
                  : require("../assets/icons/mdi_cards-heart-outline-white.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
                backgroundColor: "black",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../assets/icons/material-symbols_face-2-sharp-pink.png")
                  : require("../assets/icons/material-symbols_face-2-outline-sharp-white.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
                backgroundColor: "black",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;

/*

screenOptions={{headerBackground:()=> <ImageBackground source={require('../assets/icons/icon3.png')}  style={{width:"100%", height:"100%"}}/>}}
*/
