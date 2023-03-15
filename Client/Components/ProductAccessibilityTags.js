import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,

} from "react-native";

const ProductAccessibilityTags = ({ data }) => {

    const renderItem = ({ item }) => (
      
      <View key={item.id}
      style={styles.tagsBackgroundColor}>
        {/* //< DATA HERE ----Tag List------ */}
        <Text style={styles.tags}>{item.tag_list}</Text>
      </View>
    );
  
    return (
      <View>
        <FlatList
          
          data={data}
          horizontal={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
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
    },
    tags: {
      paddingHorizontal: 10,
      marginVertical: 5,
    },
   
  });