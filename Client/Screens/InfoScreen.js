import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const InfoScreen = (props) => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => nav.navigate("Tabs")}
      >
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Your Virtual product testing studio</Text>
  
      <View style={styles.layout}>
        <View style={styles.info}>
        <Text style={[styles.text, styles.howItWorks]}>How it works:</Text>
        <View style={styles.infoContainer}>
            {/* //< DATA HERE icon can stay in with the APP */}
            <Image
              source={require("../assets/icons/material-symbols_search-rounded-pink.png")}
            />
            <Text style={styles.text}>
              Find beauty and care products that work for you
            </Text>
          </View>
          
          <View style={styles.infoContainer}>
            {/* //< DATA HERE icon can stay in with the APP */}
            <Image
              source={require("../assets/icons/material-symbols_familiar-face-and-zone-outline-rounded.png")}
            />
            <Text style={styles.text}>
              View and test products virtually using AR technology
            </Text>
          </View>

          <View style={styles.infoContainer}>
            {/* //< DATA HERE icon can stay in with the APP */}
            <Image
              source={require("../assets/icons/Group.png")}
            />
            <Text style={styles.text}>
              Rate products and contribute to the product accessibility score
            </Text>
          </View>
     
      
          <View style={styles.infoContainer}>
            {/* //< DATA HERE icon can stay in with the APP */}
            <Image
              source={require("../assets/icons/Vector.png")}
            />
          
            <Text style={styles.text}>
              Share your experience with others
            </Text>
          </View>
        </View>
  
        <View style={styles.buttonContainer}>
  
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => nav.navigate("SignUp")}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
  
  
            <TouchableOpacity
              style={styles.login}
              onPress={() => nav.navigate("SignIn")}
            >
              <Text style={[styles.buttonText, {color: "#E3C3FF"}]}>LogIn</Text>
            </TouchableOpacity>
          </View>
        </View>
  
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
  layout: {
    justifyContent: "center",
  },
  skip: {
    display: "flex",
    alignSelf: "flex-end",
    marginRight: 30,
    color: "white",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  title: {
    color: "#fff",
    margin: 24,
    fontSize: 28,
    fontWeight: 700,
  },
  howItWorks: {
    color: "#e3c3ff",
    fontWeight: 700,
    left: -10,
  },
  text: {
    color: "white",
    margin: 15,
    fontSize: 18,
    fontWeight: 700,
    paddingVertical: 8,
  },
  infoContainer: {
    maxWidth: "90%",
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    maxWidth: 370,
    backgroundColor: "#434343",
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 1,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  signUp: {
    backgroundColor: "#E3C3FF",
    width: "90%",
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 30,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
  },
  login: {
    borderColor: "#E3C3FF",
    borderWidth: 2,
    width: "90%",
    borderRadius: 50,
    paddingHorizontal: 0,
    paddingVertical: 15,
  },
});
