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
import Card from "../Components/Card"

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
      <ScrollView >

        <Card />
 
  
      {/* PROS */}
      <FlatList
        data={prosCategories}
        renderItem={pros}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.consContainer}
        numColumns={2}
      />
      {/* CONS */}
      <FlatList
        data={consCategories}
        renderItem={cons}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.consContainer}
        numColumns={2}
      />
     {/* Title input */}
     <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Title"
            placeholder="Title"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors.title?.message}
            accessible={true}
            accessibilityLabel="Review title input"
            accessibilityHint="Enter the review title"
          />
        )}
        name="title"
      />

      {/* Body input */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Body"
            placeholder="Body"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            errorMessage={errors.body?.message}
            multiline={true}
            numberOfLines={4}
            accessible={true}
            accessibilityLabel="Review body input"
            accessibilityHint="Enter the review body"
          />
        )}
        name="body"
      />
      {/* Submit button */}
      <Button
        title="Submit"
        icon={<Icon name="paper-plane" size={20} color="white" />}
        onPress={handleSubmit(onSubmit)}
        accessible={true}
        accessibilityLabel="Submit review button"
        accessibilityHint="Press to submit the review"
        accessibilityRole="button"
      />
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
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    margin: 4,
  },
  selectedConsButton: {
    backgroundColor: "#fff3c3",
  },
  consButtonText: {
    color: "black",
    fontWeight: "700",
  },
});
