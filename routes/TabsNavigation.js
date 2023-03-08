import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import DrawerNav from "./Drawer";
import {HomeScreen, FavoriteScreen, ProductDetailsScreen} from "../Screens";
import ProductStack from "./ProductStack";
import { ImageBackground } from "react-native";
const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="ProductStack" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;

/*

screenOptions={{headerBackground:()=> <ImageBackground source={require('../assets/game_bg.png')}  style={{width:"100%", height:"100%"}}/>}}
*/
