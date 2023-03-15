import React from 'react';
import { TouchableOpacity, Text, StyleSheet,ScrollView, FlatList } from 'react-native';

 const RatingsButtons = ({ data, onPress }) => {
  const renderItem = ({ item }) => (
    
    <TouchableOpacity style={styles.button} onPress={() => onPress(item)}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
   
  );

  return (
    <FlatList
      key={item.id}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      contentContainerStyle={styles.container}
      numColumns={2}
    />
  );
};

export default RatingsButtons;

const styles = StyleSheet.create({
  container:{
      display: "flex",
      alignItems: "center",
  },
  button: {
    width:200,
    backgroundColor: '#FFF3C3',
   
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 700,
  },
});

