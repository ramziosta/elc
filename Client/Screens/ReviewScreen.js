import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "../Components/Card";
import RatingsFaceCards from "../Components/RatingsFaceCards";

const prosCategories = [
  "Easy Open",
  "No Tools",
  "Ergonomic Design",
  "Has Tactile Markers",
  "No Tools ",
  "Easy Apply",
];

const consCategories = [
  "Hard to Open",
  "Tools required",
  "Messy",
  "No tactile markers",
  "Inconvenient Design",
  "Difficult to Apply",
];

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  body: yup.string().required("Body is required"),
  cons: yup
    .array()
    .of(yup.string())
    .min(3, "Select exactly 3 cons")
    .max(3, "Select exactly 3 cons"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Invalid rating")
    .max(2, "Invalid rating"),
});

const ReviewForm = () => {
  const [selectedPros, setSelectedPros] = useState([]);
  const [selectedCons, setSelectedCons] = useState([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const pros = ({ item, index }) => {
    const pros = item;
    return (
      <TouchableOpacity
        key={index}
        onPress={() => handleProsButtonClick(pros)}
        style={[
          styles.consButton,
          selectedPros.includes(pros) && styles.selectedConsButton, // Fix here
        ]}
        accessible={true}
        accessibilityLabel={`Pros button ${pros}`}
        accessibilityHint={`Select ${pros} as a pro if applicable`}
        accessibilityRole="button"
      >
        <Text style={styles.consButtonText}>{pros}</Text>
      </TouchableOpacity>
    );
  };

  const cons = ({ item, index }) => {
    const cons = item;
    return (
      <TouchableOpacity
        key={index}
        onPress={() => handleConsButtonClick(cons)}
        style={[
          styles.consButton,
          selectedCons.includes(cons) && styles.selectedConsButton,
        ]}
        accessible={true}
        accessibilityLabel={`Cons button ${cons}`}
        accessibilityHint={`Select ${cons} as a con if applicable`}
        accessibilityRole="button"
      >
        <Text style={styles.consButtonText}>{cons}</Text>
      </TouchableOpacity>
    );
  };

  // In the render function

  const onSubmit = (data) => {
    console.log(data);
    nav.navigate("Confirmation");
  };

  const handleProsButtonClick = (pros) => {
    if (selectedPros.includes(pros)) {
      setSelectedPros(selectedPros.filter((item) => item !== pros));
    } else if (selectedPros.length < 3) {
      setSelectedPros([...selectedPros, pros]);
    }
  };
  const handleConsButtonClick = (cons) => {
    if (selectedCons.includes(cons)) {
      setSelectedCons(selectedCons.filter((item) => item !== cons));
    } else if (selectedCons.length < 3) {
      setSelectedCons([...selectedCons, cons]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => nav.goBack()}>
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
            What do you{" "}
            <Text style={{ color: "#E3C3FF", fontWeight: 700 }}>LIKE</Text>{" "}
            about this product?
          </Text>
          <Text style={styles.text}>Select up to 3:</Text>
        </View>
        {/* PROS */}
        <View style={styles.buttonsContainer}>
          <FlatList
            data={prosCategories}
            renderItem={pros}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.consContainer}
            numColumns={2}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            What do you{" "}
            <Text style={{ color: "#E3C3FF", fontWeight: 700 }}>DISLIKE</Text>{" "}
            about this product?
          </Text>
          <Text style={styles.text}>Select up to 3:</Text>
        </View>
        {/* CONS */}
        <View style={styles.buttonsContainer}>
          <FlatList
            data={consCategories}
            renderItem={cons}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.consContainer}
            numColumns={2}
          />
        </View>
        <Text style={styles.accessibleText}>
          Overall did you find this product accessible?
        </Text>
        {/* Rating Face Card input */}
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <RatingsFaceCards value={value} onChange={onChange} />
          )}
          name="rating"
        />
        <Text style={styles.formText}>Tell us what you think:</Text>
        <View style={{ backgroundColor: "#434343", marginHorizontal: 10 }}>
          {/* Title input */}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Title"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                errorMessage={errors.title?.message}
                accessible={true}
                accessibilityLabel="Review title input"
                accessibilityHint="Enter the review title"
                style={{ backgroundColor: "#434343", color: "#ffffff", }}
              />
            )}
            name="title"
          />

          {/* Body input */}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="What was your experience with the product?"
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
                errorMessage={errors.body?.message}
                multiline={true}
                numberOfLines={4}
                accessible={true}
                accessibilityLabel="Review body input"
                accessibilityHint="Enter the review body"
                style={{ height: 200, backgroundColor: "#434343", top: -20, color: "#ffffff", }}
              />
            )}
            name="body"
          />
        </View>
        {/* Submit button */}
        <TouchableOpacity
          style={styles.submit}
          onPress={handleSubmit(onSubmit)}
          accessible={true}
          accessibilityLabel="Submit review button"
          accessibilityHint="Press to submit the review"
          accessibilityRole="button"
          title="Submit"
        >
          <Text style={styles.submitText}>Submit Review</Text>
        </TouchableOpacity>

    

        <View style={{ height: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    flex: 1,
    padding: 16,
  },
  consLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  consContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  consButton: {
    width: 180,
    backgroundColor: "#FFFFFF",

    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginHorizontal: 8,
    marginBottom: 16,
  },
  selectedConsButton: {
    backgroundColor: "#fff3c3",
  },
  consButtonText: {
    textAlign: "center",
    color: "black",
    paddingHorizontal: 20,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  textContainer: {
    marginVertical: 10,
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
  buttonsContainer: {
    marginTop: 5,
  },
  submit: {
    alignSelf: "center",
    max: 300,
    backgroundColor: "#e3c3ff",
    paddingHorizontal: 100,
    marginTop: 20,
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
