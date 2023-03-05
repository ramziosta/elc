// This page contain use of Stack Navigation only. We have 3 stacks
// 1. Main Stack 2. Product Stack 3. Cart Stack
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ARScreen,
  CartScreen,
  CategoryScreen,
  CheckoutScreen,
  HomeScreen,
  LoginScreen,
  PaymentScreen,
  ProductDetailsScreen,
  RegisterScreen,
  SplashScreen,
  ThreeDScreen,
} from "./screens";
import TabsNavigation from "./TabsNavigation";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
    </Stack.Navigator>
  );
};

const ProductStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={ProductDetailsScreen} />
      <Stack.Screen name="CheckoutProduct" component={CheckoutScreen} />
      <Stack.Screen name="PaymentProduct" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="CheckoutCart" component={CheckoutScreen} />
      <Stack.Screen name="PaymentCart" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export { MainStack, ProductStack, CartStack };
