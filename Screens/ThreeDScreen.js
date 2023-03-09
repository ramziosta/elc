import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

const ProductDetailsScreen = () => {
  return (
    <SafeAreaView  style={styles.container}>
      <WebView
        style={styles.iframe}
        source={{ uri: 'https://app.vectary.com/p/7QzjYM09Su4mNhvSTzX0bv' }}
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
    width: '100%',
  },
});

export default ProductDetailsScreen;