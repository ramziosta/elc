import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* //< Data Here -------------- item.api_featured_image */}

        <Image
          source={require("../assets/images/demo.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Rare Beauty</Text>
        <Text style={styles.subtitle}>Soft Pinch Liquid Blush </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#434343",
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  imageContainer: {
    justifyContent: "center",
  },
  image: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 16,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 8,
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 700,
  },
});

export default Card;
