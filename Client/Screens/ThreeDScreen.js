import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { WebView } from "react-native-webview";
import { useNavigation } from "@react-navigation/native";


const ThreeDScreen = () => {

  const nav = useNavigation();
  // //< FOT THE DATA TO BE DYNAMIC< ROUTE CAN BE SAVED IN DB ↓
  const { uri } = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: "center",fontSize: 20, fontWeight: 700}}>Soft Pink Blush</Text>
     

     {/*//< data that  need so be dynamic  */}
      <WebView
        style={styles.iframe}
        source={{ uri: "https://app.vectary.com/p/6pjbbQ2acabreCDAOL9ZhH"  }}
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
          nav.navigate("ProductDetails");
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

export default ThreeDScreen;
