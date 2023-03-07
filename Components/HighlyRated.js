import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import styles from "../Styles";

const HighlyRated = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.items}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.brand} numberOfLines={2}>
          {item.brand}
        </Text>
        <Text style={styles.brandNameText} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.accessibility} numberOfLines={1}>
          {item.accessibility}
        </Text>
        <Text style={styles.buyItAgain} numberOfLines={1}>
          {item.buyItAgain}% would buy again
        </Text>
      </View>
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

export default HighlyRated;
