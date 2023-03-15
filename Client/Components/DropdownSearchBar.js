import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
const data = [
  { id: 1, name: "Product Feature" },
  { id: 2, name: "Makeup" },
  { id: 3, name: "Skincare" },
  { id: 4, name: "Hair" },
  { id: 5, name: "Tools & Brushes" },
  { id: 6, name: "Brands" },
];

const DropdownSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const newData = data.filter((item) => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
      key={item.id} onPress={() => setModalVisible(false)}>
        {/* //< Data HERE --------- Name */}
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search"
        value={searchTerm}
        onChangeText={handleSearch}
        onFocus={() => setModalVisible(true)}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Modal visible={modalVisible}>
        <View style={styles.modal}>
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    paddingLeft: 10,
    backgroundColor: "lightgrey",
    marginTop: 10,
    height: 40,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
    color: "black",
    borderRadius: 50,
  },
  modal: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: "#111111",
    borderRadius: 4,
    padding: 10,
    maxHeight: "60%",
  },
  item: {
    color: "white",
    backgroundColor: "ok NP tyvm grey",
    fontSize: 18,
    fontWeight: 700,
    padding: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
    margin: 10,
    borderRadius: 4,
  },
  list: {
    marginTop: 50,
  },
});

export default DropdownSearchBar;
