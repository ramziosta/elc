import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const App = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ padding: 10 }}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

export default App;