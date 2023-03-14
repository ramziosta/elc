import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {

  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
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
import { modalStyles } from "../styles/Styles";
import { Formik } from "formik";
import Button from "../Components/Button.js";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";

//yup
const reviewSchema = Yup.object({
  title: Yup.string().required().min(4),
  body: Yup.string().required().min(8),
  rating: Yup.number()
    .required()
    .min(1)
    .max(5)
    .test("is-num-1-5", "Rating must be a number 1- 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
 
});
const ToggleProductDescription = ({ data }) => {
  const [isProductDescriptionModalVisible, setIsProductDescriptionModalVisible] = useState(false);

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
        <Image
          style={styles.toggleImage}
          source={require("../assets/icons/tabler_chevron-down.png")}
        />
      </TouchableOpacity>
      <Modal visible={isProductDescriptionModalVisible} animationType="slide">
        <SafeAreaView>
          <Text style={styles.text}>Product Decription goes here </Text>
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
        <Image
          style={styles.toggleImage}
          source={require("../assets/icons/tabler_chevron-down.png")}
        />
      </TouchableOpacity>
      <Modal visible={isHowToModal} animationType="slide">
        <SafeAreaView>
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
      <TouchableOpacity style={styles.leaveReviewButton} onPress={()=>nav.navigate("Review")}>
        <Text style={styles.leaveReviewText}>Leave Review </Text>
      </TouchableOpacity>
      <Modal visible={isReviewModalVisible} animationType="slide" style={styles.reviewModal}>
        <SafeAreaView>



        <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={modalStyles.container2}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={modalStyles.container}>
          <Formik
            initialValues={{ title: "", body: "", rating: "" }}
            validationSchema={reviewSchema}
  //!  ---------- submit function----------------- 
            onSubmit={(values, actions) => {
             
              // values.key = listKey.toString();

              addDoc(collection(db, "article"), values);
              console.log(values);
              addReview(values);
              actions.resetForm();
              // setListKey(listKey + 1);
              // console.log(listKey);
            }}
          >
            {(props) => (
              <View>
                <View style={modalStyles.formField}>
                  <Text style={modalStyles.lableText}>Title:</Text>
                  <TextInput
                    style={modalStyles.input}
                    placeholder="title"
                    onChangeText={props.handleChange("title")}
                    onBlur={props.handleBlur("title")}
                    value={props.values.title}
                  />
                  <Text style={modalStyles.errorText}>
                    {props.touched.title && props.errors.title}
                  </Text>
                </View>

                <View style={modalStyles.formField}>
                  <Text style={modalStyles.lableText}>Content:</Text>
                  <TextInput
                    style={modalStyles.input}
                    multiline
                    minHeight={60}
                    placeholder="body"
                    onChangeText={props.handleChange("body")}
                    onBlur={props.handleBlur("body")}
                    value={props.values.body}
                  />
                  <Text style={modalStyles.errorText}>
                    {props.touched.body && props.errors.body}
                  </Text>
                </View>

                <View style={modalStyles.formField}>
                  <Text style={modalStyles.lableText}>Rating:</Text>
                  <TextInput
                    style={modalStyles.input}
                    placeholder="rating"
                    onChangeText={props.handleChange("rating")}
                    onBlur={props.handleBlur("rating")}
                    value={props.values.rating}
                    keyboardType="numeric"
                  />
                  <Text style={modalStyles.errorText}>
                    {props.touched.rating && props.errors.rating}
                  </Text>
                </View>

                <Button onPress={props.handleSubmit} buttonTitle="submit" />
                {/* 
                <Button
                  onPress={props.handleSubmit}
                  title="Submit"
                  color="green"
                  style={modalStyles.button}
                /> */}
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
          <Text style={styles.text}>This is the content of the modal</Text>
          <TouchableOpacity onPress={handleModalClose}>
            <Text style={styles.text}>Close modal</Text>
          </TouchableOpacity>







        </SafeAreaView>
      </Modal>
    </View>
  );
};

const Reviews = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.background}>
      <Image />
      <Text style={styles.pageText} numberOfLines={1}>
        {item.numberOfLines} Month Ago
      </Text>
      <Text style={styles.pageText} numberOfLines={1}>
        {item.iconColorNames}
      </Text>
      <Text style={styles.pageText} numberOfLines={1}>
        Title{item.reviewTitle}
      </Text>
      <Text style={styles.pageText} numberOfLines={1}>
        Body{item.reviewBody}
      </Text>
    </View>
  );

  return (
    <View style={{ justifyContent: "center" }}>
      <FlatList
        data={data}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const ColorOptionsIcons = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.colorOptionsContainer}>
      <TouchableOpacity>
        <Image
          source={item.ColorOptionsIcon}
          style={styles.icon}
          data={item.iconHex}
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
        keyExtractor={(item) => item.key}
        numColumns={6}
      />
    </View>
  );
};

const ProductDetailsScreen = (props) => {
  const [favorite, setFavorite] = useState(false);

  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../assets/images/demo.png")}
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
              nav.navigate("ThreeD");
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
            <Text style={styles.brandName}>{}Rare Beauty</Text>
            <Text style={styles.productName}>{}Soft Pinch Liquid Blush</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setFavorite(!favorite);
            }}
          >
            <Image
              style={styles.favoriteIcon}
              source={require("../assets/icons/mdi_cards-heart-outline-white.png")}
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.pageText}>Color Options:</Text>
          <View>
            <ColorOptionsIcons data={productColorsIcons} />
          </View>
        </View>

        <View style={styles.divider}></View>

        <View style={styles.productHighlight}>
          <Text style={styles.highlightHeader}>Product Highlights</Text>

          <ProductAccessibilityTags data={features.slice(0, 3)} />
          <View style={styles.toggleBackground}>
            <ToggleProductDescription data={productColorsIcons} />
          </View>
          <View style={styles.toggleBackground}>
            <ToggleHowToUse data={productColorsIcons} />
          </View>

          <View style={[styles.divider, styles.gap]}></View>
        </View>

        <TouchableOpacity style={styles.howRatingsWork}>
          <MaterialCommunityIcons
            name="help-circle"
            size={32}
            color="white"
            style={styles.questionMark}
          />
          <Text style={styles.howRatingsWorkText}> How Rating Works</Text>
        </TouchableOpacity>

        <View style={styles.ratingsContainer}>
          <Text style={styles.ratingsHeaderText}>Accessibility Rating</Text>
          <Image
            style={styles.ratingsImage}
            source={require("../assets/icons/Rating-circle-large.png")}
          />
          <Text style={styles.numberOfReviewsText}>
            40{productColorsIcons.numberOfReviews} Total Reviews
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
        <Reviews data={productColorsIcons} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;


const Modaltyles = StyleSheet.create({
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
  lableText:{

  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    height: 40,
    borderRadius:4,
  },
  formField:{
    marginVertical: 8
  },
  button:{},
  container2: {
    flex: 1,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },

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
  tagsBackgroundColor: {
    backgroundColor: "#FFF3C3",
    marginHorizontal: 10,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
  },
  tags: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
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
