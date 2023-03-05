import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const nav = useNavigation();
  const handleNavigate = () => {
    nav.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.layout}>
      <Text >Splash Screen</Text>
      <Button onPress={handleNavigate} style={styles.text} title="Click Me!" />
    </SafeAreaView>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

});