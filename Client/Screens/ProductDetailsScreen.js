import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  ScrollView,
} from "react-native";
import { productColorsIcons, features } from "../Constants/BeautyData";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ProductAccessibilityTags from "../Components/ProductAccessibilityTags";
import Card from "../Components/ReviewCard";
import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";

const ToggleProductDescription = ({ item }) => {
  const [
    isProductDescriptionModalVisible,
    setIsProductDescriptionModalVisible,
  ] = useState(false);

  const handleTextClick = () => {
    setIsProductDescriptionModalVisible(true);
  };

  const handleModalClose = () => {
    setIsProductDescriptionModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleTextClick}
        style={styles.toggleContainer}
      >
        <Text style={styles.toggleText}>Product Description</Text>

        {/* //< DATA HERE------ Icon can stay in app */}
        <Image
          style={styles.toggleImage}
          source={require("../assets/icons/tabler_chevron-down.png")}
        />
      </TouchableOpacity>
      <Modal visible={isProductDescriptionModalVisible} animationType="slide">
        <SafeAreaView>
          {/* //< DATA HERE {item.description}  --------------------- */}
          <Text style={styles.text}>{item.description}</Text>

          <TouchableOpacity onPress={handleModalClose}>
            <Text style={styles.text}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const ToggleHowToUse = ({ data }) => {
  const [isHowToModal, setIsHowToModal] = useState(false);

  const handleTextClick = () => {
    setIsHowToModal(true);
  };

  const handleModalClose = () => {
    setIsHowToModal(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleTextClick}
        style={styles.toggleContainer}
      >
        <Text style={styles.toggleText}>How To Use</Text>

        {/* //< DATA HERE --------- Icon can stay in App */}
        <Image
          style={styles.toggleImage}
          source={require("../assets/icons/tabler_chevron-down.png")}
        />
      </TouchableOpacity>
      <Modal visible={isHowToModal} animationType="slide">
        <SafeAreaView>
          {/* //< DATA HERE ----------- {item.content} */}
          <Text style={styles.text}>This is the content of the modal</Text>
          <TouchableOpacity onPress={handleModalClose}>
            <Text style={styles.text}>Close modal</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const LeaveReviewButton = ({ data }) => {
  const [listKey, setListKey] = useState(88);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const nav = useNavigation();
  const handleLeave = () => {
    setIsReviewModalVisible(true);
  };

  const handleModalClose = () => {
    setIsReviewModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.leaveReviewButton}
        onPress={() => nav.navigate("Review")}
      >
        <Text style={styles.leaveReviewText}>Leave Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const Reviews = ({ navigation }) => {
  const nav = useNavigation();

  const [Articles, setArticles] = useState([]);

  //> ------retrieve data from database----------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "article"));
        const Articles = [];
        querySnapshot.forEach((doc) => {
          Articles.push({ ...doc.data() });
        });
        setArticles(Articles);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  //< ---------send data to the database-------------

  return (
    <View>
      <FlatList
        data={Articles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => nav.navigate("ReviewDetails", item)}>
            {/* //< DATA HERE -----------------------  */}
            <Card>
              <Text style={{ color: "black" }}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const PinkButton = () => {
  const [isOnYou, setIsOnYou] = useState(false);
  const nav = useNavigation();

  const handlePress = () => {
    if (isOnYou) {
      setIsOnYou(false);
      nav.navigate("ThreeD");
    } else {
      setIsOnYou(true);
      nav.navigate("AR");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isOnYou ? styles.onYou : null]}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>
            {isOnYou ? "On you" : "View 3d"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//! NEEDS ALL NEW WORK!!!!!!!!!!!!
const ColorOptionsIcons = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.colorOptionsContainer}>
      {/* */}
      <TouchableOpacity>
        <Image
          source={item.product_colors}
          style={styles.icon}
          data={item.colour_name}
        />
      </TouchableOpacity>

      <Text style={styles.iconsText} numberOfLines={1}>
        {item.iconColorName}
      </Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={6}
      />
    </View>
  );
};

const MyModal = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const AccordionModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalHeight, setModalHeight] = useState(new Animated.Value(0));

  const toggleModal = () => {
    if (modalVisible) {
      Animated.timing(modalHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setModalVisible(false));
    } else {
      setModalVisible(true);
      Animated.timing(modalHeight, {
        toValue: 300,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={toggleModal}>
        <View style={{ backgroundColor: "lightblue", padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Accordion Modal
          </Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} transparent={true}>
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <Animated.View
              style={{
                backgroundColor: "white",
                height: modalHeight,
                padding: 20,
              }}
            >
              <Text style={{ fontSize: 16 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                aliquam, erat quis porttitor pharetra, sem mi imperdiet leo, ac
                venenatis tellus nunc eget sapien. Aenean vel neque id arcu
                dictum convallis. Sed sed turpis at lectus aliquet blandit vel
                vitae mi.
              </Text>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const ProductDetailsScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const nav = useNavigation();
  const { item } = props.route.params;
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{uri: item.api_featured_image.replace(/^\/\//, "https://")}}
        />

        <Text
          style={styles.backButton}
          title="Back"
          onPress={() => props.navigation.goBack()}
        >
          ← Back
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.viewInThreeD]}
            title="View In 3D"
            onPress={() => {
              nav.navigate("ThreeD", {item});
            }}
          >
            <Text style={styles.buttonText}>View In 3D</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.tryItOn]}
            title="Try It On"
            onPress={() => {
              nav.navigate("AR");
            }}
          >
            <Text style={[styles.tryItOnText, styles.buttonText]}>
              Try It On
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.productNameContainer}>
          <View>
            <Text style={styles.brandName}>{item.brand}</Text>

            <Text style={styles.productName}>{item.name}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setFavorite(!favorite);
            }}
          >
            <Image
              style={styles.favoriteIcon}
              //< DATA HERE ----------ICON can stay in App
              source={
                favorite
                  ? require("../assets/icons/mdi_cards-heart-pink.png")
                  : require("../assets/icons/mdi_cards-heart-outline-white.png")
              }
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.pageText}>Color Options:</Text>
          <View>
            {/* //< NEEDS TO TO TAKE HEX VALUES --- use item.hex_colors object array */}
            {/* <ColorOptionsIcons data={productColorsIcons} /> */}
          </View>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.productHighlight}>
          <Text style={styles.highlightHeader}>Product Highlights</Text>
          <View style={styles.productAccessibilityTagsContainer}>
            <ProductAccessibilityTags data={item.tag_list.length ? item.tag_list : ["No Tags"]} />
            {/* //! potentially update this to pull features list from existing review
            "pros" */}
          </View>

          <View style={styles.toggleBackground}>
            <ToggleProductDescription item={item} />
          </View>
          <View style={styles.toggleBackground}>
            <ToggleHowToUse data={productColorsIcons} />
          </View>

          <View style={[styles.divider, styles.gap]}></View>
        </View>

        <TouchableOpacity
          style={styles.howRatingsWork}
          onPress={() => setModalVisible(true)}
        >
          <MaterialCommunityIcons
            name="help-circle"
            size={32}
            color="white"
            style={styles.questionMark}
          />
          <Text style={styles.howRatingsWorkText}> How Rating Works</Text>
        </TouchableOpacity>

        <Modal
          visible={modalVisible}
          animationType="none"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={ModalStyles.howRatingsModal}>
            <Text>Rate Products</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close </Text>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <View>
              <Text>
                Customer feedback on whether or not they found the product
                accessible-complient is aggregates into a total rating.
              </Text>
              <Text>
                For example, a positive review can be mapped to an "A" rating, a
                neutral review can be mapped to a "C" rating and a negative
                review can be mapped to an "F" rating.
              </Text>
            </View>
          </View>
        </Modal>

        <View style={styles.ratingsContainer}>
          <Text style={styles.ratingsHeaderText}>Accessibility Rating</Text>
          {/* <Image
            style={styles.ratingsImage}
            source={require("../assets/icons/Rating-circle-large.png")}
          /> */}
          <View style={styles.ratingsTextContainer}>
            <Text style={styles.ratingsText}>Maybe</Text>
          </View>
          <Text style={styles.numberOfReviewsText}>
            {item.reviews ? item.reviews.length : "0"} reviews
          </Text>
        </View>

        <View style={styles.prosConsContainer}>
          <View style={styles.prosContainer}>
            <Text style={styles.prosConsHeader}>Pros</Text>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>Easy Apply</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>Easy Open</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>Ergonomic</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
          </View>
          <View style={styles.consContainer}>
            <Text style={styles.prosConsHeader}>Cons</Text>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>{}Messy</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>{}No Markers</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
            <View style={styles.metersContainer}>
              <Text style={styles.prosConsText}>{}Inconvenient</Text>
              <View style={styles.metersBackground}>
                <View style={styles.ratingsMeter}></View>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.divider, styles.marginTop]}></View>

        <View style={styles.reviewContainer}>
          <Text style={styles.reviewText}>User Reviews</Text>
          <LeaveReviewButton />
        </View>

        {/* <Reviews data={productColorsIcons} /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const ModalStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    padding: 20,
    backgroundColor: "cyan",
  },
  texts: {
    marginTop: 50,
    padding: 40,
    fontSize: 32,
    fontFamily: "Nunito-Black",
    color: "red",
  },
  paragraph: {
    marginTop: 50,
    padding: 40,
    fontSize: 32,
    color: "green",
    marginVertical: 8,
    lineHeight: 18,
  },
  lableText: {},
  input: {
    borderColor: "black",
    borderWidth: 1,
    color: "black",
    height: 40,
    borderRadius: 4,
  },
  formField: {
    marginVertical: 8,
  },
  button: {},
  container2: {
    flex: 1,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
  howRatingsModal:{
    backgroundColor:"red",
    display: "flex",
    flexDirection: "row",

  }
});

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#111111",
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 20,
    fontSize: 24,
  },
  image: {
    width: 450,
    height: 450,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonsContainer: {
    top: -65,
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    position: "relative",
    borderRadius: 50,
    width: 160,
  },
  viewInThreeD: {
    backgroundColor: "#E3C3FF",
  },
  tryItOn: {
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 700,
    paddingVertical: 15,
    textAlign: "center",
  },
  tryItOnText: {
    color: "#E3C3FF",
  },
  productNameContainer: {
    top: -30,
    marginHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  brandName: {
    fontSize: 20,
    color: "white",
  },
  productName: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
  },
  favoriteIcon: {
    marginLeft: 100,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  iconsText: {
    fontSize: 20,
    color: "white",
    marginVertical: 2,
  },
  colorOptionsContainer: {
    alignItems: "center",
    margin: 10,
    padding: 1,
  },
  icon: {
    marginLeft: -10,
    resizeMode: "contain",
    width: 42,
    height: 42,
  },
  divider: {
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  highlightHeader: {
    color: "white",
    fontSize: 16,
  },
  productAccessibilityTagsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  tagsBackgroundColor: {
    backgroundColor: "#FFF3C3",
    marginHorizontal: 10,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  tags: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toggleBackground: {
    backgroundColor: "#434343",
    marginHorizontal: 10,
    marginVertical: 2,
  },
  toggleText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
    paddingVertical: 15,
    paddingLeft: 20,
  },
  toggleImage: {
    marginRight: 20,
  },
  gap: {
    marginTop: 30,
  },
  howRatingsWork: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
    alignItems: "center",
  },
  howRatingsWorkText: {
    color: "white",
  },
  ratingsHeaderText: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    paddingVertical: 15,
    textAlign: "center",
  },
  ratingsContainer: {
    display: "flex",
    alignItems: "center",
  },
  ratingsTextContainer: {
    borderColor: "#E3C3FF",
    borderWidth: 3,
    borderRadius: 50,
    marginHorizontal: 21,
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 27,
  },
  ratingsText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
  ratingsImage: {
    marginVertical: 10,
  },
  numberOfReviewsText: {
    color: "white",
    marginBottom: 30,
  },
  prosConsHeader: {
    color: "white",
    fontSize: 20,
    fontWeight: 700,
    paddingVertical: 5,
  },
  prosConsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3C3FF",
  },
  prosContainer: {
    width: 210,
    height: 150,
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: "#111111",
  },
  consContainer: {
    width: 220,
    height: 150,
    marginLeft: 2,
    paddingRight: 10,
    paddingLeft: 15,
    backgroundColor: "#111111",
  },
  prosConsText: {
    color: "white",
    paddingVertical: 5,
  },
  metersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  metersBackground: {
    backgroundColor: "#434343",
    width: 55,
    height: 5,
  },
  ratingsMeter: {
    backgroundColor: "#E3C3FF",
    width: 35,
    height: 5,
  },
  marginTop: {
    marginTop: 50,
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 0,
  },
  reviewText: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
  leaveReviewButton: {
    borderColor: "#E3C3FF",
    borderRadius: 50,
    borderWidth: 1,
    width: 180,
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leaveReviewText: {
    color: "#E3C3FF",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  modal: {
    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 10,
    color: "blue",
  },
  pageText: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
    marginVertical: 2,
  },
});
