import React from "react";
import { StyleSheet, SafeAreaView, Button, Text } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
const ThreeDScreen4 = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: "center",fontSize: 20, fontWeight: 700}} >Eye Color Bold Eyeshadow Palette</Text>
      <WebView
        style={styles.iframe}
        source={{ uri: "https://app.vectary.com/p/4wC3LQIAPyYvvnCHjzTCn9"     }}
      />

      <Button
        title="Try It On"
        onPress={() => {
          nav.navigate("AR");
        }}
      />
      <Button
        title="Back"
        onPress={() => {
          nav.navigate("ProductDetails3");
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iframe: {
    marginTop: 20,
    marginBottom: 0,
    width: "100%",
  },
});
export default ThreeDScreen4;