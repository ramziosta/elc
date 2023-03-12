import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, SafeAreaView, Button } from "react-native";

export default function AR(props) {
  const nav = useNavigation();
  return (
    <SafeAreaView>
      <Text>AR Screen</Text>
      <Button title="View In 3D" onPress={()=>{nav.navigate("ThreeD")}}/>
      <Button title="Back" onPress={()=>{nav.navigate("ProductDetails")}}/>
    </SafeAreaView>
  );
}
