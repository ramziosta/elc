// A home page for a react-native app. The page has a search bar, a collection of buttons, and three horizontal areas that has cards in them, including all imports for the app.

//TODO handleSearch function
//TODO create a button component that takes the name of the button as an argument and uses that name to call the handleSearch function.

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  Modal,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";

import DropdownSearchBar from "../Components/DropdownSearchBar";
const features = [
  {
    key: "1",
    text: "Ergonomic\n Design",
    image: require("../Assets/icons/ri_hand-heart-line.png"),
  },
  {
    key: "2",
    text: "Texture",
    image: require("../Assets/icons/icon-park-outline_foundation-makeup.png"),
  },
  {
    key: "3",
    text: "No Tools",
    image: require("../Assets/icons/mdi_lock-open-outline.png"),
  },
  {
    key: "4",
    text: "Tactile\n Markers",
    image: require("../Assets/icons/tabler_brush-off.png"),
  },
  {
    key: "5",
    text: "Easy Open",
    image: require("../Assets/icons/tabler_texture.png"),
  },
  { key: "6", text: "Easy Apply", image: require("../Assets/icons/brail.png") },
];
const highlyRated = [
  {
    key: "1",
    brand: "Rare Beauty",
    name: "Pink Lipstick",
    image: require("../Assets/images/m1.jpeg"),
    accessibility: "Ergonomic Design",
    buyItAgain: 92,
  },
  {
    key: "2",
    brand: "Kohls Kreative",
    name: "Soft Pinch Liquid Blush",
    image: require("../Assets/images/m2.jpeg"),
    accessibility: "Texture",
    buyItAgain: 90,
  },
  {
    key: "3",
    brand: "Nora",
    name: "Zen Zone",
    image: require("../Assets/images/m3.jpeg"),
    accessibility: "Lorem Ipsum",
    buyItAgain: 88,
  },
  {
    key: "4",
    brand: "Neauthy",
    name: "Mineral Plus Night Cream",
    image: require("../Assets/images/m4.jpeg"),
    accessibility: "No Tools",
    buyItAgain: 92,
  },
  {
    key: "5",
    brand: "Cosmetic",
    name: "Daily Dose",
    image: require("../Assets/images/m5.jpeg"),
    accessibility: "Tactile Markers",
    buyItAgain: 97,
  },
  {
    key: "6",
    brand: "CORS",
    name: "Releaf Balm",
    image: require("../Assets/images/m6.jpeg"),
    accessibility: "No Tools",
    buyItAgain: 86,
  },
];
const accessibleBrands = [
  {
    key: "1",
    brand: "Rare Beauty",
    text: "Ergonomic Design",
    image: require("../Assets/images/m7.jpeg"),
    brandLogo: require("../Assets/icons/icon1.png"),
  },
  {
    key: "2",
    brand: "Kohls Kreative",
    text: "Texture",
    image: require("../Assets/images/m8.jpeg"),
    brandLogo: require("../Assets/icons/icon2.png"),
  },
  {
    key: "3",
    brand: "Nora",
    text: "No Tools",
    image: require("../Assets/images/m9.jpeg"),
    brandLogo: require("../Assets/icons/icon3.png"),
  },
  {
    key: "4",
    brand: "CORS",
    text: "Tactile Markers",
    image: require("../Assets/images/m10.jpeg"),
    brandLogo: require("../Assets/icons/icon4.png"),
  },
  {
    key: "5",
    brand: "YSL",
    text: "Easy To Open",
    image: require("../Assets/images/m11.jpeg"),
    brandLogo: require("../Assets/icons/icon5.png"),
  },
  {
    key: "6",
    brand: "Poko",
    text: "Easy To Apply",
    image: require("../Assets/images/m12.jpeg"),
    brandLogo: require("../Assets/icons/icon6.png"),
  },
];
const recentlyAdded = [
  {
    key: "1",
    text: "Brush blissful",
    brand: "YSL",
    image: require("../Assets/images/m11.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
  {
    key: "2",
    text: "Rejuvenate bubbly",
    brand: "Forbiden Beauty",
    image: require("../Assets/images/m14.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
  {
    key: "3",
    text: "Fabulous glowy",
    brand: "Gucci",
    image: require("../Assets/images/m17.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
  {
    key: "4",
    text: "Fluffly cream dream",
    brand: "Bobbi Brown",
    image: require("../Assets/images/m16.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
  {
    key: "5",
    text: "Lipstick Berlin marvelous",
    brand: "Chanel",
    image: require("../Assets/images/m13.jpeg"),
    heart: require("../Assets/images/m13.jpeg"),
    pending: require("../Assets/images/m13.jpeg"),
    review: "Pending Review",
  },
  {
    key: "6",
    text: "Hydrating lotion serene",
    brand: "Miss Swiss",
    image: require("../Assets/images/m15.jpeg"),
    heart: require("../Assets/icons/mdi_cards-heart-outline-white.png"),
    pending: require("../Assets/icons/rating-circle-pending.png"),
    review: "Pending Review",
  },
];

const FeaturesList = ({ data }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image source={item.image} />
      </View>
      <Text style={styles.iconsText} numberOfLines={2}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ justifyContent: "center" }}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const HighlyRated = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.items}>
        <Image source={item.image} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.textContainer}>
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
          {item.buyItAgain}% would buy again
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ justifyContent: "center" }}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};
const AccessibleBrands = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.items}>
        <Image source={item.image} style={styles.accessibleImage} />
        <View style={styles.iconContainer}>
          <Image source={item.brandLogo} style={styles.brandLogo} />
        </View>
      </View>
      <TouchableOpacity style={styles.accessibilityTextContainer}>
        <Text
          style={[styles.brand, styles.accessibilityBrand]}
          numberOfLines={2}
        >
          {item.brand}
        </Text>
        <Text style={styles.accessibilityText} numberOfLines={2}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ justifyContent: "center" }}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};
const RecentlyAdded = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.items}>
        <Image source={item.image} style={styles.image} />

        <TouchableOpacity style={styles.heartIconContainer}>
          <Image source={item.heart} style={styles.heart}  tintColor="black"/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pendingIconContainer}>
          <Image source={item.pending} style={styles.pending} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.brand} numberOfLines={2}>
          {item.brand}
        </Text>
        <Text style={styles.brandNameText} numberOfLines={1}>
          {item.text}
        </Text>
        <Text style={styles.buyItAgain} numberOfLines={1}>
          {item.review}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ justifyContent: "center" }}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const HomeScreen = () => {
  const handleSearch = (text) => {};

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <DropdownSearchBar />
        <View style={styles.scroll}>
          <View style={styles.horizontal}>
            <Text style={styles.text}>Browse Features</Text>
            <Text style={styles.text2}>See All ⌲</Text>
          </View>
          <FeaturesList data={features} />

          <View style={styles.horizontal}>
            <Text style={styles.text}>Highly Rated</Text>
            <Text style={styles.text2}>See All ⌲</Text>
          </View>
          <HighlyRated data={highlyRated} />

          <View style={styles.horizontal}>
            <Text style={styles.text}>Accessible Brands</Text>
            <Text style={styles.text2}>See All ⌲</Text>
          </View>
          <AccessibleBrands data={accessibleBrands} />
          <View style={styles.horizontal}>
            <Text style={styles.text}>Recently Added</Text>
            <Text style={styles.text2}>See All ⌲</Text>
          </View>
          <RecentlyAdded data={recentlyAdded} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#111111",
  },
  scroll: {
    height: "100%",
    marginTop: 70,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF3C3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 50,
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
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
  iconsText: {
    textAlign: "center",
    flexWrap: "wrap",
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  items: {},

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
    width: 200,
    marginLeft: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#434343",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  accessibleImage: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  accessibilityTextContainer: {
    width: 300,
    height: 80,
    marginLeft: 10,
    marginBottom: 30,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#434343",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  accessibleBrandNameText: {
    color: "white",
    fontWeight: 700,
    fontSize: 18,
    paddingBottom: 3,
  },
  accessibilityBrand: {
    marginTop: 15,
    fontWeight: 700,
    fontSize: 18,
  },
  accessibilityText: {
    color: "white",
  },
  iconContainer: {
    top: 250,
    left: 20,
    position: "absolute",
    borderRadius: 50,
    zIndex: 6,
  },
  brandLogo: {
    width: 50,
    height: 50,
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 50,
  },
  heartIconContainer: {
    position: "absolute",
    top:160,
    zIndex: 10,
    left:20,
  },
  heart: {},
  pendingIconContainer: {
    position: "absolute",
    top:150,
    left:160,
  },
  pending: {},
});
