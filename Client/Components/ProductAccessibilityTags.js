import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,

} from "react-native";

const ProductAccessibilityTags = ({ data }) => {

    const renderItem = ({item, index}) => (
      
      <View key={index}
      style={styles.tagsBackgroundColor}>
        {/* //< DATA HERE ----Tag List------ */}
        <Text style={styles.tags}>{item}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          
          data={data}
          horizontal={false}
          renderItem={renderItem}
          numColumns={3}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          windowSize={3}
        />
      </View>
    );
  };

  export default ProductAccessibilityTags;


  const styles = StyleSheet.create({

      
    tagsBackgroundColor: {
      backgroundColor: "#FFF3C3",
      borderRadius: 50,
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 10,
    },
    tags: {
      width: 100,
      marginVertical: 10,
      marginHorizontal: 10,
      textAlign: "center",
     
    },
   
  });