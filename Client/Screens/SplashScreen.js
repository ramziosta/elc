import React from "react";
import { StyleSheet, SafeAreaView, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/Styles";
import { TouchableOpacity } from "react-native-gesture-handler";
const SplashScreen = () => {
  const nav = useNavigation();
  const handleNavigate = () => {
    nav.navigate("Loading");
  };

  return (
    <SafeAreaView style={styles.layout}>
      <TouchableOpacity onPress={handleNavigate} >
      <Image source={require("../assets/icons/MainLogo.png")}   />
      </TouchableOpacity>
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
