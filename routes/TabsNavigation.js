import React from "react";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet } from "react-native";
import ProductStack from "./ProductStack";
import { FavoriteScreen, AccountScreen, HomeScreen } from "../Screens";

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabsNavigation = () => {
//   return (
//     <NavigationContainer>
//     <Tab.Navigator
//     screenOptions={{ headerShown: false }}
//     tabBarStyle={{ backgroundColor: "red" }}
 
//   >
//       <Tab.Screen
//         name="Home"
//         component={ProductStack}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: () => (
//             <Image
//               source={require("../Assets/icons/material-symbols_home-rounded-pink.png")}
//               style={styles.tabIcon}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorite"
//         component={FavoriteScreen}
//         options={{
//           tabBarLabel: "Favorite",
//           tabBarIcon: () => (
//             <Image
//               source={require("../Assets/icons/mdi_cards-heart-pink.png")}
//               style={styles.tabIcon}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={AccountScreen}
//         options={{
//           tabBarLabel: "Account",
//           tabBarIcon: () => (
//             <Image
//               source={require("../Assets/icons/material-symbols_face-2-sharp-pink.png")}
//               style={styles.tabIcon}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   tabBar: {
//     borderTopWidth: 0,
//   },
//   tabIcon: {
//     width: 24,
//     height: 24,
//   },
// });




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
          style={{backgroundColor:"#111111"}}
          component={ProductStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require("../Assets/icons/material-symbols_home-rounded-pink.png")
                    : require("../Assets/icons/material-symbols_home-outline-rounded-white.png")
                }
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                  backgroundColor: "black"
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{
            tabBarLabel: "Favorite",
            
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require("../Assets/icons/mdi_cards-heart-pink.png")
                    : require("../Assets/icons/mdi_cards-heart-outline-white.png")
                }
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                  backgroundColor: "black"
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
                    ? require("../Assets/icons/material-symbols_face-2-sharp-pink.png")
                    : require("../Assets/icons/material-symbols_face-2-outline-sharp-white.png")
                }
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                  backgroundColor: "black"
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>

  );
};

export default TabsNavigation;


//export default TabsNavigation;

/*

screenOptions={{headerBackground:()=> <ImageBackground source={require('../Assets/icons/icon3.png')}  style={{width:"100%", height:"100%"}}/>}}
*/
