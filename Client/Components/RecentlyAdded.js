import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import ProductAccessibilityTags from "./ProductAccessibilityTags";
import { features } from "../Constants/BeautyData";

const HighlyRated = ({ data, handlePress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View>
        <Image source={item.image} style={styles.image} />

        <TouchableOpacity
          onPress={handlePress}
          style={styles.heartIconContainer}
        >
          <Image source={item.heart} style={styles.heart} tintColor="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePress}
          style={styles.pendingIconContainer}
        >
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.pending}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.brand} numberOfLines={2}>
          {item.brand}
        </Text>
        <Text style={styles.brandNameText} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.buyItAgain} numberOfLines={1}>
          Pending Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.horizontal}>
        <Text style={styles.text}>Recently Added</Text>
        <TouchableOpacity onPress={handlePress}>
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

export default HighlyRated;

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
   
    marginBottom: 20,
    marginLeft: 10,
  },
  container: {
    width: 200,
    marginLeft: 10,
    backgroundColor: "#434343",
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    padding: 10,
  },

  brand: {
    color: "white",
  },
  brandNameText: {
    color: "white",
    fontWeight: 700,
    fontSize: 18,
    paddingBottom: 3,
  },

  buyItAgain: {
    color: "white",
  },
  heartIconContainer: {
    position: "absolute",
    top: 16,
    zIndex: 10,
    left: 20,
  },
  heart: {
    top: 136,
  },
  pendingIconContainer: {
    position: "absolute",
    top: 15,
    left: 160,
  },
  ratingContainer: {
    backgroundColor: "black",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 50,
    borderColor: "#E3C3FF",
    borderWidth: 2,
    top: 130,
    right: 20,
  },
  rating: {
    color: "#E3C3FF",
    fontSize: 18,
  },
});
