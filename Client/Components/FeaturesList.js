import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import globalStyles from "../Styles/Styles";

const FeaturesList = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={globalStyles.item}>
        <Image source={item.image} />
      </View>
      <Text style={globalStyles.iconsText} numberOfLines={2}>
        {item.text}
      </Text>
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

export default FeaturesList;
