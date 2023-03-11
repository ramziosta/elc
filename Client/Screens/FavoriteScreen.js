import React from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";




const Favorite = () => {
 

  return (
    <SafeAreaView style={styles.body}>

      <Text style={styles.text2}>
        Favorites
      </Text>
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  body: {
    
  },
  scroll: {
    height: "100%",
    marginTop: 100,
  },
  
});
