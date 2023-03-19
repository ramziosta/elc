import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default productCard = ({ item :{item, index}, nav }) => {
    const [favorite, setFavorite] = React.useState(false);
    return (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        nav.navigate("ProductDetails", {item});
      }}
      style={productCardStyles.container}
    >
      <View>
        <Image source={{uri: item.api_featured_image.replace(/^\/\//, "https://")}} style={productCardStyles.image} />
        <TouchableOpacity
          style={productCardStyles.heartIconContainer}
          onPress={() => setFavorite(pv=>!pv)}
        >
          <Image
            source={
                favorite
                ? require("../assets/icons/mdi_cards-heart-pink.png")
                : require("../assets/icons/blackheart.png")
            }
            style={productCardStyles.heart}
          />
        </TouchableOpacity>

        <View style={productCardStyles.pendingIconContainer}>
          <View style={productCardStyles.ratingContainer}>
            <Text style={productCardStyles.rating}>...</Text>
          </View>
        </View>
      </View>

      <View style={productCardStyles.textContainer}>
        <Text style={productCardStyles.brand} numberOfLines={2}>
          {item.brand}
        </Text>
        <Text style={productCardStyles.brandNameText} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={productCardStyles.buyItAgain} numberOfLines={1}>
          {item.reviews ? item.reviews.length : 0} reviews
        </Text>
      </View>
    </TouchableOpacity>
  )};

  
const productCardStyles = StyleSheet.create({
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