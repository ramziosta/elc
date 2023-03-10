import React from "react";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../Styles/Styles";
const SplashScreen = () => {
  const nav = useNavigation();
  const handleNavigate = () => {
    nav.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.layout}>
      <Text style={globalStyles.accentText}>Splash Screen</Text>
      <Button onPress={handleNavigate} color="white" title="Click Me!" />
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
    backgroundColor: "#111111",
  },
});
