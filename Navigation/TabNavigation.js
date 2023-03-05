import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import DrawerNav from "./Drawer";
import {HomeScreen, FavoriteScreen, AccountScreen} from "../Screens";
import { ImageBackground } from "react-native";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home Tab name" component={DrawerNav} /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

/*

screenOptions={{headerBackground:()=> <ImageBackground source={require('../assets/game_bg.png')}  style={{width:"100%", height:"100%"}}/>}}
*/
