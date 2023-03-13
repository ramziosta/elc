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
import { highlyRated, features } from "../Constants/BeautyData";
import ProductAccessibilityTags from "../Components/ProductAccessibilityTags";

const tag_list = { tag: "Easy Open" };

const HighlyRated = ({ data }) => {
  const nav = useNavigation();
  const renderItem = ({ item }) => (
    <View>
      <View>
        <TouchableOpacity onPress={() => nav.navigate(item.navRoute)}>
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartIconContainer}>
          <Image source={item.heart} style={styles.heart} tintColor="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ratingIconContainer}>
          <Image source={item.pending} style={styles.pending} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.textContainer}>
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
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

const CategoryScreen = (props) => {
  const nav = useNavigation();

  const handlePress = (item, index) => {
    console.log(JSON.stringify(item, null, 2));
    nav.navigate(item.navRoute);
  };

  return (
    <SafeAreaView style={styles.body}>
      <DropdownSearchBar />
      <View style={styles.scroll}>
        <View style={styles.horizontal}>
          <Text style={styles.text2}>Search Results:{tag_list.tag}</Text>
        </View>

        {/* //! ================================= */}
{/* 
        <View>
          <View>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("ProductDetails");
              }}
            >
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.heartIconContainer}>
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.heart}
                tintColor="red"
              />
            </View>
            <View style={styles.ratingIconContainer}>
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.pending}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.brand} numberOfLines={2}>
              Maybe? Maybe Not?
            </Text>
            <Text style={styles.brandNameText} numberOfLines={1}>
              Lipstick Galore
            </Text>
            <ProductAccessibilityTags data={features.slice(0, 1)} />
            <Text style={styles.buyItAgain} numberOfLines={1}>
              1458 Reviews
            </Text>
          </View>
        </View> */}
        {/* //! ================================= */}
        {/* <View>
          <View>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("ProductDetails2");
              }}
            >
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.heartIconContainer}>
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.heart}
                tintColor="red"
              />
            </View>
            <View style={styles.ratingIconContainer}>
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.pending}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.brand} numberOfLines={2}>
              Maybe? Maybe Not?
            </Text>
            <Text style={styles.brandNameText} numberOfLines={1}>
              Lipstick Galore
            </Text>
            <ProductAccessibilityTags data={features.slice(0, 1)} />
            <Text style={styles.buyItAgain} numberOfLines={1}>
              1458 Reviews
            </Text>
          </View>
        </View> */}
        {/* //! ================================= */}
        {/* <View>
          <View>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("ProductDetails3");
              }}
            >
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.heartIconContainer}>
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.heart}
                tintColor="red"
              />
            </View>
            <View style={styles.ratingIconContainer}>
              <Image
                source={require("../assets/icons/Ellipse%48-10.png")}
                style={styles.pending}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.brand} numberOfLines={2}>
              Maybe? Maybe Not?
            </Text>
            <Text style={styles.brandNameText} numberOfLines={1}>
              Lipstick Galore
            </Text>
            <ProductAccessibilityTags data={features.slice(0, 1)} />
            <Text style={styles.buyItAgain} numberOfLines={1}>
              1458 Reviews
            </Text>
          </View>
        </View> */}
        {/* //! ================================= */}

        <HighlyRated handlePress={handlePress} />
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