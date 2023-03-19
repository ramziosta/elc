import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import {
  Card,
  RatingsFaceCards,
  RatingsButtons,
  Form,
} from "../Components/index";
import { useNavigation, useRoute } from "@react-navigation/native";
const categories1 = [
  { label: "Easy open", value: "easy_open", id: 1 },
  { label: "No tools", value: "no_tools", id: 2 },
  { label: "Texture", value: "texture", id: 3 },
  { label: "Ergonomic design", value: "ergonomic_design", id: 4 },
  { label: "Easy apply", value: "easy_apply", id: 5 },
  { label: "Has tactile markers", value: "tactile_markers", id: 6 },
];

const categories2 = [
  { label: "Difficult to open", value: "difficult_open", id: 1 },
  { label: "Tools required", value: "tools_required", id: 2 },
  { label: "Messy", value: "messy", id: 3 },
  { label: "Ergonomic design", value: "ergonomic_design", id: 4 },
  { label: "Easy apply", value: "easy_apply", id: 5 },
  { label: "No tactile markers", value: "tactile_markers", id: 6 },
];



const ReviewScreen = (props) => {

  const nav = useNavigation();
  const [Articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");

  const [listKey, setListKey] = useState(88);
  const addReview = (review) => {
    review.key = listKey.toString();
    setArticles((currentReviews) => {
      return [review, ...currentReviews];
    });
  
    setListKey(listKey + 1);
    console.log(listKey);
    nav.goBack();
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text
            style={{ color: "#ffffff", marginVertical: 10, marginLeft: 20 }}
          >
            ◀︎ Back
          </Text>
        </TouchableOpacity>
        <Card />
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Rate Product</Text>
          <Text style={styles.text}>
            What do you <Text style={{ color: "#E3C3FF" }}>LIKE</Text> about
            this product?
          </Text>
          <Text style={styles.text}>Select up to 3:</Text>
        </View>
        <RatingsButtons data={categories1} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            What do you <Text style={{ color: "#E3C3FF" }}>DISLIKE</Text> about
            this product?
          </Text>
          <Text style={styles.text}>Select up to 3:</Text>
        </View>
        <RatingsButtons data={categories2} />

        <Text style={styles.accessibleText}>
          Overall did you find this product accessible?
        </Text>
        <RatingsFaceCards />
        <Text style={styles.formText}>Tell us what you think</Text>

        {/* //! FORM HERE*/}

  

        <Form addReview={addReview} />

        <TouchableOpacity
          style={styles.submit}
          onPress={() => props.navigation.navigate("Review")}
        >
          <Text style={styles.submitText}>Submit Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#111111",
    height: "100%",
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  textContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  text: {
    color: "#ffffff",
  },
  accessibleText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    maxWidth: 300,
    alignSelf: "center",
  },
  formText: {
    color: "#ffffff",
    marginLeft: 20,
    marginVertical: 10,
  },
  ReviewFormcontainer: {
    backgroundColor: "#434343",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginVerical: 30,
  },
  label: {
    color: "#ffffff",
    color: "white",
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  titleInput: {
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  input: {
    padding: 8,
    marginBottom: 16,
    height: 100,
  },
  submit: {
    alignSelf: "center",
    max: 300,
    backgroundColor: "#e3c3ff",
    paddingHorizontal: 100,
    marginTop: 20,
    marginVerical: 30,
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
