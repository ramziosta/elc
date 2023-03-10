// This page contain use of Stack Navigation only. We have 2 stacks
// 1. Main Stack 2. Product Stack 
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ARScreen,
  HomeScreen,
  CategoryScreen,
  ProductDetailsScreen,
  ThreeDScreen,
} from "../Screens/index";

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="ThreeD" component={ThreeDScreen} />
      <Stack.Screen name="AR" component={ARScreen} />
    </Stack.Navigator>
  );
};



export default ProductStack;
