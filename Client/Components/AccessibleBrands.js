import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

const AccessibleBrands = ({ data, handlePress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.items}>
        <Image source={item.image} style={styles.accessibleImage} />
        <View style={styles.iconContainer}>
          <Image source={item.brandLogo} style={styles.brandLogo} />
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text
          style={[styles.brand, styles.accessibilityBrand]}
          numberOfLines={2}
        >
          {item.brand}
        </Text>
        <Text style={styles.accessibilityText} numberOfLines={2}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View >
         <View style={styles.horizontal}>
            <Text style={styles.text}>Accessible Brands</Text>
            <TouchableOpacity onPress={handlePress} >
            <Text style={styles.text2}>See All ⌲</Text>
            </TouchableOpacity>
          </View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default AccessibleBrands;

const styles = StyleSheet.create({
  text: {
    display: "flex",
    flexDirection: "column",
    fontSize: 24,
    fontWeight: 700,
    color: "white",
  },
  text2: {
    color: "white",
    textDecorationLine: "underline",
    marginRight: 10,
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 10,
  },
  container: {
    width: 300,
    marginLeft: 10,
    marginBottom: 30,
    borderRadius: 20,
    paddingBottom: 10,
    backgroundColor: "#434343",
  },
  brand: {
    color: "white",
  },
  accessibleImage: {
    width: 300,
    height: 300,
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  accessibilityBrand: {
    marginTop: 15,
    fontWeight: 700,
    fontSize: 18,
  },

  iconContainer: {
    top: 250,
    left: 20,
    position: "absolute",
    borderRadius: 50,
    zIndex: 6,
  },
  brandLogo: {
    top: 20,
    width: 50,
    height: 50,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50,
  },
  textContainer: {
    margin: 10,
  },
  accessibilityText: {
    color: "white",
  },
});
