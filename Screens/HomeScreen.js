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
  { key: "1", brand: "Rare Beauty", name:"Pink Lipstick",  image: require("../Assets/images/m1.jpeg"), accessibility:"Ergonomic Design", buyItAgain: 92,  },
  { key: "2", brand: "Kohls Kreative", name:"Soft Pinch Liquid....",  image: require("../Assets/images/m2.jpeg"), accessibility:"Texture", buyItAgain: 90,   },
  { key: "3", brand: "Nora", name:"Zen Zone",  image: require("../Assets/images/m3.jpeg"), accessibility:"Lorem Ipsum", buyItAgain: 88,   },
  { key: "4", brand: "Neauthy", name:"Mineral Plus Nigh...",  image: require("../Assets/images/m4.jpeg"), accessibility:"No Tools", buyItAgain: 92,   },
  { key: "5", brand: "Cosmetic", name:"Daily Dose",  image: require("../Assets/images/m5.jpeg"), accessibility:"Tactile Markers", buyItAgain: 97,   },
  { key: "6", brand: "CORS", name:"Releaf Balm",  image: require("../Assets/images/m6.jpeg"), accessibility:"No Tools", buyItAgain: 86,   },
];
const accessibleBrands = [
  { key: "1", text: "Ergonomic Design",  image: require("../Assets/images/m7.jpeg")  },
  { key: "2", text: "Texture",  image: require("../Assets/images/m8.jpeg")  },
  { key: "3", text: "No Tools",  image: require("../Assets/images/m9.jpeg")  },
  { key: "4", text: "Tactile Markers",  image: require("../Assets/images/m10.jpeg")  },
  { key: "5", text: "Easy To Open",  image: require("../Assets/images/m11.jpeg")  },
  { key: "6", text: "Easy To Apply",  image: require("../Assets/images/m12.jpeg")  },
];
const recentlyAdded = [
  { key: "1", text: "Ergonomic Design", brand: "",  image: require("../Assets/images/m13.jpeg")  },
  { key: "2", text: "Texture", brand: "",  image: require("../Assets/images/m14.jpeg")  },
  { key: "3", text: "No Tools", brand: "",  image: require("../Assets/images/m15.jpeg")  },
  { key: "4", text: "Tactile Markers", brand: "",  image: require("../Assets/images/m16.jpeg")  },
  { key: "5", text: "Easy To Open", brand: "",  image: require("../Assets/images/m17.jpeg")  },
  { key: "6", text: "Easy To Apply", brand: "",  image: require("../Assets/images/m18.jpeg")  },
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
    <View style={styles.items}>
      <Image source={item.image} style={styles.image}/>
    </View>
    <View style={styles.textContainer}>
    <Text style={styles.brand} numberOfLines={2}>{item.brand}</Text>
    <Text style={styles.brandNameText} numberOfLines={2}>{item.name}</Text>
    <Text style={styles.accessibility} numberOfLines={1}>{item.accessibility}</Text>
    <Text style={styles.buyItAgain} numberOfLines={1}>{item.buyItAgain}% would buy again</Text>
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
       <HorizontalProducts data={highlyRated} />

         <View style={styles.horizontal}>
          <Text style={styles.text}>Accessible Brands</Text>
          <Text style={styles.text2}>See All ⌲</Text>
        </View>
       {/*  <HorizontalProducts data={recentlyAdded} />
        <View style={styles.horizontal}>
          <Text style={styles.text}>Recently Added</Text>
          <Text style={styles.text2}>See All ⌲</Text>
        </View>
        <HorizontalProducts data={accessibleBrands} /> */}
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
    items:{},

    brand:{
      color: "white",
      
    },
    brandNameText: {
      color: "white",
      fontWeight: 700,
      fontSize: 18,
      paddingBottom:3,

    },
    accessibility: {
      color: "black",
      backgroundColor:"#FFF3C3",
      alignSelf: 'flex-start',
      textAlign: 'center',
      textAlignVertical: 'center',
      padding: 3,

    },
    buyItAgain: {
      color: "white",

    },
    textContainer : {
      width: 200,
      marginLeft: 10,
      paddingLeft: 10,
      paddingBottom: 10,
      paddingTop: 10,
      backgroundColor: "#434343",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    }

});
