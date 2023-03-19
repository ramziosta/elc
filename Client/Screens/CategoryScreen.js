import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import DropdownSearchBar from "../Components/DropdownSearchBar";
import ProductAccessibilityTags from "../Components/ProductAccessibilityTags";
import ProductCard from "../Components/ProductCard";
import { FetchSearchData } from "../Components/FetchSearchData";

//from home screen SEE ALL brings user to this screen this page can be used to display the cards from search results or links like see all

{
  /* //< -------- data here for search result? ---------- */
}
const tag_list = {
  tag: "Tactile Markers",
};

const renderProducts = ()=>{
    return (<FlatList
          data={data}
          renderItem={(item, index)=><ProductCard item={item} index={index} nav={nav}/>}
          numColumns={2}
          numRows={6}
          horizontal={false}
    />)
}

const CategoryScreen = (props) => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
      <DropdownSearchBar />
      <View style={styles.scroll}>
        <View style={styles.horizontal}>
          {/* //< -------- data here  using tag list for cosmetic only needs to come from DB for the selected group or search result hard coded now doe tactile markers ---------- */}
          <Text style={styles.text2}>Search Results: {props.queryTerm}</Text>
        </View>
        <FetchSearchData term="elf" RenderComponent={HomePageFlatList} title={"Highly Rated"}/>
        
      </View>
      </ScrollView>
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
