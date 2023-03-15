import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

const HighlyRated = ({ data }) => {
  const nav = useNavigation();

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  const renderItem = ({ item, id }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => {
        nav.navigate(item.navRoute);
      }}
      style={styles.container}
    >
      <View>
        {/* //< --DATA HERE Image------- */}
        <Image source={item.api_featured_image} style={styles.image} />

        <TouchableOpacity
          style={styles.heartIconContainer}
          onPress={() => toggleFavorite(item.id)}
        >
          {/* //<HEART TOGGLE FAVORITE HERE Icon can stay in App----------- */}
          <Image
            source={
              isFavorite(item.id)
                ? require("../assets/icons/mdi_cards-heart-pink.png")
                : require("../assets/icons/blackheart.png")
            }
            style={styles.heart}
          />
        </TouchableOpacity>

        <View style={styles.pendingIconContainer}>
          {/* //< DATA HERE Rating----------- */}
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.brand} numberOfLines={2}>
          {item.brand}
        </Text>
        {/* //< DATA HERE  Name-----------*/}
        <Text style={styles.brandNameText} numberOfLines={1}>
          {item.name}
        </Text>
        <ProductAccessibilityTags data={features.slice(0, 1)} />
        {/* //< ------DATA HERE needs to have logic based YES --------------Buy It Again  */}
        <Text style={styles.buyItAgain} numberOfLines={1}>
          {item.buyAgain}% would buy again
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.horizontal}>
        <Text style={styles.text}>Highly Rated</Text>
        {/* //< navigation only needs to go to category based on search result */}
        <TouchableOpacity onPress={() => nav.navigate("Category")}>
          <Text style={styles.text2}>See All ⌲</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
    marginTop: 30,

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
