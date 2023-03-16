// A home page for a react-native app. The page has a search bar, a collection of buttons, and three horizontal areas that has cards in them, including all imports for the app.

//TODO handleSearch function
//TODO create a button component that takes the name of the button as an argument and uses that name to call the handleSearch function.
import React from "react";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import DropdownSearchBar from "../Components/DropdownSearchBar";
import FeaturesList from "../Components/FeaturesList";
import HighlyRated from "../Components/HighlyRated";
import AccessibleBrands from "../Components/AccessibleBrands";
import RecentlyAdded from "../Components/RecentlyAdded";
import {
  features,
  highlyRated,
  accessibleBrands,
} from "../Constants/BeautyData";
import {Data} from '../Constants/Data'
console.log(Data);

const HomeScreen = (props) => {
  return (
    <View style={styles.body}>
      <ScrollView>
        {/* //< DATA HERE ICON App logo can stay in App */}
        <Image
          source={require("../assets/icons/NameLogo.png")}
          style={styles.logo}
        />
        <DropdownSearchBar />
        <View style={styles.scroll}>
          <FeaturesList data={features} />
          <HighlyRated data={highlyRated} />
          <AccessibleBrands data={accessibleBrands} />
          <RecentlyAdded data={highlyRated} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#111111",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  scroll: {
    height: "100%",
    marginTop: 20,
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