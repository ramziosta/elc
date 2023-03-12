import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const FeaturesList = ({ data, handlePress }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.item}>
        <Image source={item.accessibilityIcon} />
      </View>
      <Text style={styles.iconsText} numberOfLines={2}>
        {item.tag_list}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View >
        <View style={styles.horizontal}>
            <Text style={styles.text}>Browse Features</Text>
            <TouchableOpacity >
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

export default FeaturesList;

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