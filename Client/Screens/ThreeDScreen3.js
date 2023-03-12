import React from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { WebView } from 'react-native-webview';
import { useNavigation } from "@react-navigation/native";
const ThreeDScreen = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView  style={styles.container}>
      <WebView
        style={styles.iframe}
        source={{ uri: "https://app.vectary.com/p/46e37tHYb6euVgFOCSyzVE" }}
      />

<Button title="Try It On" onPress={()=>{nav.navigate("AR")}}/>
      <Button title="Back" onPress={()=>{nav.navigate("ProductDetails")}}/>
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
    width: '100%',
  },
});

export default ThreeDScreen;