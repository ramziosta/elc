// This page contain use of Stack Navigation only. We have 2 stacks
// 1. Main Stack 2. Product Stack 
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ARScreen,
  HomeScreen,
  CategoryScreen,
  ProductDetailsScreen,
  ProductDetailsScreen2,
  ProductDetailsScreen3,
  ThreeDScreen,
  ThreeDScreen2,
  ThreeDScreen3,
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
      <Stack.Screen name="ProductDetails2" component={ProductDetailsScreen2} />
      <Stack.Screen name="ProductDetails3" component={ProductDetailsScreen3} />
      <Stack.Screen name="ThreeD" component={ThreeDScreen} />
      <Stack.Screen name="ThreeD2" component={ThreeDScreen2} />
      <Stack.Screen name="ThreeD3" component={ThreeDScreen3} />
      <Stack.Screen name="AR" component={ARScreen} />
    </Stack.Navigator>
  );
};



export default ProductStack;
