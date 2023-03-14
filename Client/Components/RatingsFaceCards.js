import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

const RatingsFaceCards = ({ data, onPress }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [imageSource, setImageSource] = useState(
    require("../assets/icons/gg_smile-mouth-open.png")
  );
  const [imageSource2, setImageSource2] = useState(
    require("../assets/icons/gg_smile-neutral-white.png")
  );
  const [imageSource3, setImageSource3] = useState(
    require("../assets/icons/gg_smile-sad-white.png")
  );

  const handlePress = (value) => {
    // Reset the state of previously selected button
    if (selectedButton !== null) {
      setImageSource(require("../assets/icons/gg_smile-mouth-open-black.png"));
    }
    setSelectedButton(value);

    // Update the state of newly selected button
    if (value === 0) {
      setImageSource(require("../assets/icons/gg_smile-mouth-open-black.png"));
    } else if (value === 1) {
      setImageSource(require("../assets/icons/gg_smile-neutral-white.png"));
    } else if (value === 2) {
      setImageSource(require("../assets/icons/gg_smile-sad-white.png"));
    }
  };

  const buttonStyle = (value) => {
    if (selectedButton === value) {
      return [styles.containerPressed, styles.textPressed];
    } else {
      return [styles.container];
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={buttonStyle(0)} onPress={() => handlePress(0)}>
        <Image source={imageSource} style={styles.image} />
        <Text style={[styles.title, buttonStyle(0)]}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={buttonStyle(1)} onPress={() => handlePress(1)}>
        <Image source={imageSource2} style={styles.image} />
        <Text style={[styles.title, buttonStyle(1)]}>Maybe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={buttonStyle(2)} onPress={() => handlePress(2)}>
        <Image source={imageSource3} style={styles.image} />
        <Text style={[styles.title, buttonStyle(2)]}>No</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RatingsFaceCards;


const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    width: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#434343",
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 6,
  },
  textPressed: {
    color: "black",
    textAlign: "center",
  },
  containerPressed: {
    width: 70,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#E3C3FF",
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 6,
    
  },
  image: {
    marginVertical: 8,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",

  },
});
