// A home page for a react-native app. The page has a search bar, a collection of buttons, and three horizontal areas that has cards in them, including all imports for the app.

//TODO handleSearch function
//TODO create a button component that takes the name of the button as an argument and uses that name to call the handleSearch function.

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  Modal,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import DropdownSearchBar from "../Components/DropdownSearchBar";
const features = [
  { key: "1", text: "Ergonomic\n Design", image: require("../Assets/icons/ri_hand-heart-line.png") },
  { key: "2", text: "Texture",  image: require("../Assets/icons/icon-park-outline_foundation-makeup.png")  },
  { key: "3", text: "No Tools",  image: require("../Assets/icons/mdi_lock-open-outline.png")  },
  { key: "4", text: "Tactile\n Markers",  image: require("../Assets/icons/tabler_brush-off.png")  },
  { key: "5", text: "Easy Open",  image: require("../Assets/icons/tabler_texture.png")  },
  { key: "6", text: "Easy Apply",  image: require("../Assets/icons/brail.png")  },
];
const highlyRated = [
  { key: "1", text: "Ergonomic Design",  image: require("../Assets/images/m2.avif")  },
  { key: "2", text: "Texture",  image: require("../Assets/icons/heart.png")  },
  { key: "3", text: "No Tools",  image: require("../Assets/icons/heart.png")  },
  { key: "4", text: "Tactile Markers",  image: require("../Assets/icons/heart.png")  },
  { key: "5", text: "Easy To Open",  image: require("../Assets/icons/heart.png")  },
  { key: "6", text: "Easy To Apply",  image: require("../Assets/icons/heart.png")  },
];
const accessibleBrands = [
  { key: "1", text: "Ergonomic Design",  image: require("../Assets/icons/heart.png")  },
  { key: "2", text: "Texture",  image: require("../Assets/icons/heart.png")  },
  { key: "3", text: "No Tools",  image: require("../Assets/icons/heart.png")  },
  { key: "4", text: "Tactile Markers",  image: require("../Assets/icons/heart.png")  },
  { key: "5", text: "Easy To Open",  image: require("../Assets/icons/heart.png")  },
  { key: "6", text: "Easy To Apply",  image: require("../Assets/icons/heart.png")  },
];
const recentlyAdded = [
  { key: "1", text: "Ergonomic Design",  image: require("../Assets/icons/heart.png")  },
  { key: "2", text: "Texture",  image: require("../Assets/icons/heart.png")  },
  { key: "3", text: "No Tools",  image: require("../Assets/icons/heart.png")  },
  { key: "4", text: "Tactile Markers",  image: require("../Assets/icons/heart.png")  },
  { key: "5", text: "Easy To Open",  image: require("../Assets/icons/heart.png")  },
  { key: "6", text: "Easy To Apply",  image: require("../Assets/icons/heart.png")  },
];

const HorizontalList = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
    <View style={styles.item}>
      <Image source={item.image}/>
      
    </View>
    <Text style={styles.iconsText} numberOfLines={2}>{item.text}</Text>
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

const HorizontalProducts = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
    <View style={styles.item}>
      <Image source={item.image}/>
      
    </View>
    <Text style={styles.iconsText} numberOfLines={2}>{item.text}</Text>
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

const HomeScreen = () => {
  const handleSearch = (text) => {};

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
      <DropdownSearchBar />
      <View style={styles.scroll}>
        <View style={styles.horizontal}>
          <Text style={styles.text}>Browse Features</Text>
          <Text style={styles.text2}>See All ⌲</Text>
        </View>
        <HorizontalList data={features} />
        <View style={styles.horizontal}>
          <Text style={styles.text}>Highly Rated</Text>
          <Text style={styles.text2}>See All ⌲</Text>
        </View>
        <HorizontalList data={highlyRated} />
        <View style={styles.horizontal}>
          <Text style={styles.text}>Accessible Brands</Text>
          <Text style={styles.text2}>See All ⌲</Text>
        </View>
        <HorizontalList data={recentlyAdded} />
        <View style={styles.horizontal}>
          <Text style={styles.text}>Recently Added</Text>
          <Text style={styles.text2}>See All ⌲</Text>
        </View>
        <HorizontalList data={accessibleBrands} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    borderRadius:50,
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
  iconsText:{
    textAlign: "center",
    flexWrap: "wrap",
    color: "white",
  }
});
