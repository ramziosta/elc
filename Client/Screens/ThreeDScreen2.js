import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
const ThreeDScreen2 = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
       <Text style={{ textAlign: "center",fontSize: 20, fontWeight: 700}}>Slim Matte Longwear Lipstick</Text>
      <WebView
        style={styles.iframe}
        source={{ uri: "https://app.vectary.com/p/7QzjYM09Su4mNhvSTzX0bv"  }}
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
          nav.navigate("ProductDetails2");
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

export default ThreeDScreen2;
