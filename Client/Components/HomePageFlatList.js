import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import ProductCard from "./ProductCard";

const HomePageFlatList = ({ data, title }) => {
  const nav = useNavigation();
  return (
    <ScrollView>
      <View style={styles.horizontal}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity onPress={() => nav.navigate("Category")}>
          <Text style={styles.text2}>See All ⌲</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={(item, index)=><ProductCard item={item} index={index} nav={nav}/>}
        keyExtractor={(item) => item._id}
      />
    </ScrollView>
  );
};
export default HomePageFlatList;

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

    marginBottom: 20,
    marginLeft: 10,
  }});