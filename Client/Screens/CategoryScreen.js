import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import DropdownSearchBar from "../Components/DropdownSearchBar";
import { highlyRated } from "../Constants/BeautyData";

const HighlyRated = ({ data, handlePress }) => {
  const renderItem = ({ item }) => (
    <View>
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
          style={styles.ratingIconContainer}
        >
          <Image source={item.pending} style={styles.pending} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handlePress} style={styles.textContainer}>
        <Text style={styles.brand} numberOfLines={2}>
          {item.brand}
        </Text>
        <Text style={styles.brandNameText} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.accessibility} numberOfLines={1}>
          {item.accessibility}
        </Text>
        <Text style={styles.buyItAgain} numberOfLines={1}>
          {item.numberOfReviews} Reviews
        </Text>
      </TouchableOpacity>
      
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

const ProductDetailsScreen = () => {
  const nav = useNavigation();
  const handlePress = () => {
    nav.navigate("ProductDetails");
  };

  return (
    <SafeAreaView style={styles.body}>
      <DropdownSearchBar />
      <View style={styles.scroll}>
        <View style={styles.horizontal}>
          <Text data={highlyRated} style={styles.text2}>
            Search Results:{highlyRated.accessibility}
          </Text>
        </View>
        <HighlyRated data={highlyRated} handlePress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#111111",
  },
  scroll: {
    height: "100%",
    marginTop: 70,
  },
  horizontal: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  text2: {
    color: "white",
    textDecorationLine: "underline",
    marginRight: 10,
  },
  image: {
    width: 180,
    height: 190,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
  accessibility: {
    color: "black",
    backgroundColor: "#FFF3C3",
    alignSelf: "flex-start",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 3,
  },
  buyItAgain: {
    color: "white",
  },
  textContainer: {
    width: 180,
    marginLeft: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#434343",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heartIconContainer: {
    position: "absolute",
    top: 160,
    zIndex: 10,
    left: 20,
  },
  ratingIconContainer: {
    position: "absolute",
    top: 150,
    left: 140,
  },
});
