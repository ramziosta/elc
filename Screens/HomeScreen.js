// A home page for a react-native app. The page has a search bar, a collection of buttons, and three horizontal areas that has cards in them, including all imports for the app.

//TODO handleSearch function
//TODO create a button component that takes the name of the button as an argument and uses that name to call the handleSearch function.

import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

import DropdownSearchBar from "../Components/DropdownSearchBar";

import { features, highlyRated, accessibleBrands, recentlyAdded } from "../Constants/BeautyData"

const FeaturesList = ({ data, handlePress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handlePress}>
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

const HighlyRated = ({ data, handlePress }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.items}>
        <Image source={item.image} style={styles.image} />
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
const AccessibleBrands = ({ data, handlePress }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.items}>
        <Image source={item.image} style={styles.accessibleImage} />
        <View style={styles.iconContainer}>
          <Image source={item.brandLogo} style={styles.brandLogo} />
        </View>
      </View>
      <TouchableOpacity
        onPress={handlePress}
        style={styles.accessibilityTextContainer}
      >
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

const RecentlyAdded = ({ data, handlePress }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.items}>
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
          <Image source={item.pending} style={styles.pending} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.textContainer}>
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
  const nav = useNavigation();
  const handlePress = () => {
    nav.navigate("ProductDetails");
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <DropdownSearchBar />
        <View style={styles.scroll}>
          <View style={styles.horizontal}>
            <Text style={styles.text}>Browse Features</Text>
            <Text style={styles.text2}>See All ⌲</Text>
          </View>
          <FeaturesList data={features} handlePress={handlePress} />

          <View style={styles.horizontal}>
            <Text style={styles.text}>Highly Rated</Text>
            <Text style={styles.text2}>See All ⌲</Text>
          </View>
          <HighlyRated data={highlyRated} handlePress={handlePress} />

          <View style={styles.horizontal}>
            <Text style={styles.text}>Accessible Brands</Text>
            <Text style={styles.text2}>See All ⌲</Text>
          </View>
          <AccessibleBrands data={accessibleBrands} handlePress={handlePress} />
          <View style={styles.horizontal}>
            <Text style={styles.text}>Recently Added</Text>
            <Text style={styles.text2}>See All ⌲</Text>
          </View>
          <RecentlyAdded data={recentlyAdded} handlePress={handlePress} />
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
    top: 160,
    zIndex: 10,
    left: 20,
  },
  heart: {},
  pendingIconContainer: {
    position: "absolute",
    top: 150,
    left: 160,
  },
  pending: {},
});
