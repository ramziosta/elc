import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.ReviewCard}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  ReviewCard: {
    borderRadius: 12,
    elevation: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
