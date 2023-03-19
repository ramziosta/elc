import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Card from "../Components/Card";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const InfoScreen = (props) => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Card />
        </View>
        <Text style={styles.thanks}> Thank you!</Text>
        <Text style={styles.text} numberOfLines={3}>
          Your review has been submitted. Keep sharing insights on products so
          we can make smarter product choices!
        </Text>
        {/* Submit button */}
        <TouchableOpacity
          style={styles.submit}
          //< NEEDS NAVIGATION AND SEND TO DB
          onPress={() => nav.navigate("products")}
        >
          <Text style={styles.submitText}>Back to Products</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    backgroundColor: "#111111",
  },
  cardContainer: {
    marginTop: 100,
  },
  thanks: {
    fontSize: 18,
    color: "#ffffff",
    marginHorizontal: 10,
    marginVertical: 20,
    fontWeight: 700,
  },
  text: {
    color: "#ffffff",
    marginHorizontal: 10,
  },
  submit: {
    alignSelf: "center",
    max: 300,
    backgroundColor: "#e3c3ff",
    paddingHorizontal: 100,
    marginTop: 40,
    marginBottom: 30,
    borderRadius: 50,
  },
  submitText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
  },
});
