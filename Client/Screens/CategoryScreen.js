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
import { highlyRated, features} from "../Constants/BeautyData";
import ProductAccessibilityTags from "../Components/ProductAccessibilityTags";

const tag_list = {tag: "Easy Open"};


const HighlyRated = ({ data, handlePress }) => {
  const renderItem = ({ item, index }) => (
    <View>
      <View>
        <Image source={item.image} style={styles.image} />

        <TouchableOpacity
           onPress={() => handlePress(index)}
          style={styles.heartIconContainer}
        >
          <Image source={item.heart} style={styles.heart} tintColor="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePress(index)}
          style={styles.ratingIconContainer}
        >
          <Image source={item.pending} style={styles.pending} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity  onPress={() => handlePress(index)} style={styles.textContainer}>
        <Text style={styles.brand} numberOfLines={2}>
          {item.brand}
        </Text>
        <Text style={styles.brandNameText} numberOfLines={1}>
          {item.name}
        </Text>
        <ProductAccessibilityTags data={features.slice(0, 1)} />
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

const CategoryScreen = (props) => {

  const nav = useNavigation();
  const handlePress = (index) => {
    if (index === 0) {
      nav.navigate('ProductDetails');
      console.log(index)
    } else if (index === 1) {
      nav.navigate("ProductDetails2" );
      console.log(index)
    } else if (index === 2) {
      nav.navigate("ProductDetails3" );
      console.log(index)
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <DropdownSearchBar />
      <View style={styles.scroll}>
        <View style={styles.horizontal}>
          <Text style={styles.text2}>
            Search Results:{tag_list.tag}
          </Text>
        </View>
        <HighlyRated data={highlyRated} handlePress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

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
