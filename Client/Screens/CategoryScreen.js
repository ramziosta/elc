import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import DropdownSearchBar from "../Components/DropdownSearchBar";
import { highlyRated, features } from "../Constants/BeautyData";
import ProductAccessibilityTags from "../Components/ProductAccessibilityTags";



//from home screen SEE ALL brings user to this screen this page can be used to display the cards from search results or links like see all 




{/* //< -------- data here for search result? ---------- */}
const tag_list = {

  tag: "Tactile Markers",
};


const HighlyRated = ({ data }) => {
  const nav = useNavigation();
  const [favorites, setFavorites] = useState([]);

  //< data comes here for the ratings image item rating is needed 

  const ProductRatingImage = ({ rating }) => {
    const ratingImages = {
      A: require("../assets/icons/badge.png"),
      B: require("../assets/icons/badge.png"),
      C: require("../assets/icons/badge.png"),
      D: require("../assets/icons/badge.png"),
      F: require("../assets/icons/badge.png"),
    };

    return (
      <View>
        {rating ? (
          <Image source={ratingImages[rating]} style={styles.pending} />
        ) : (
          <Image source={require("../assets/icons/badge.png")} style={styles.pending} />
        )}
      </View>
    );
  };


  //> for the favorites list
  const handleFavoriteToggle = (productId) => {

    const isFavorited = favorites.includes(productId);
    if (isFavorited) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const renderItem = ({ item }) => {
    const isFavorited = favorites.includes(item.id);

    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => nav.navigate(item.navRoute)}>
            {/* //< -------- data here ---------- */}
            <Image source={item.image_link} style={styles.image} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.heartIconContainer}
            onPress={() => handleFavoriteToggle(item.id)}
          >
             {/* //< -------- data here toggle icons can stay in DB---------- */}
            <Image
              source={isFavorited ? require("../assets/icons/mdi_cards-heart-pink.png") : require("../assets/icons/blackheart.png")}
              style={styles.heart}
        
            />
          </TouchableOpacity>

          <View style={styles.ratingIconContainer}>
             {/* //< -------- data here  need the rating for the product Pending or ABCDF---------- */}
            <ProductRatingImage rating={item.rating} />
          </View>
        </View>

        <TouchableOpacity style={styles.textContainer}>
          <Text style={styles.brand} numberOfLines={2}>
             {/* //< -------- data here ---------- */}
            {item.brand}
          </Text>

          <Text style={styles.brandNameText} numberOfLines={1}>
             {/* //< -------- data here ---------- */}
            {item.name}
          </Text>

 {/* //< -------- data here THIS NEEDS LOGIC USING TAGS LIST FOR DISPLAY ONLY SHOULD BE item.tag_list---------- */}
          <ProductAccessibilityTags data={features.slice(0, 1)} />

          <Text style={styles.buyItAgain} numberOfLines={1}>
           {/* //< -------- data here ---------- */}
            {item.numberOfReviews} Reviews
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} numColumns={2} horizontal={false} />
    </View>
  );
};

const CategoryScreen = (props) => {
  const nav = useNavigation();

  const handlePress = (item, index) => {
    console.log(JSON.stringify(item, null, 2));
    nav.navigate(item.navRoute);
  };

  return (
    <SafeAreaView style={styles.body}>
      <DropdownSearchBar />
      <View style={styles.scroll}>
        <View style={styles.horizontal}>
          {/* //< -------- data here  using tag list for cosmetic only needs to come from DB for the selected group or search result hard coded now doe tactile markers ---------- */}
          <Text style={styles.text2}>Search Results:{tag_list.tag}</Text>
        </View>
        <HighlyRated data={highlyRated} handlePress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#111111",
  },
  scroll: {
    height: "100%",
    marginTop: 70,
  },
  horizontal: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  text2: {
    color: "white",
    textDecorationLine: "underline",
    marginRight: 10,
  },
  image: {
    width: 180,
    height: 190,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
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
    width: 180,
    marginLeft: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#434343",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heartIconContainer: {
    position: "absolute",
    top: 160,
    zIndex: 10,
    left: 20,
  },
  ratingIconContainer: {
    position: "absolute",
    top: 150,
    left: 140,
  },
});
