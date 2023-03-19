import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';

const consCategories = [
  'Difficult to open',
  'Messy',
  'No tactile markers',
  'Tools required',
  'Non-ergonomic design',
  'Difficult to open',
];

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required'),
  cons: yup
    .array()
    .of(yup.string())
    .min(3, 'Select exactly 3 cons')
    .max(3, 'Select exactly 3 cons'),
});

const ReviewForm = () => {
  const [selectedCons, setSelectedCons] = useState([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleConsButtonClick = (cons) => {
    if (selectedCons.includes(cons)) {
      setSelectedCons(selectedCons.filter((item) => item !== cons));
    } else if (selectedCons.length < 3) {
      setSelectedCons([...selectedCons, cons]);
    }
  };

  return (
    <View style={styles.container}>
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

    {/* Cons buttons */}
    <Text style={styles.consLabel}>Cons</Text>
      <View style={styles.consContainer}>
        {consCategories.map((cons, index) => (
          <Button
            key={index}
            title={cons}
            onPress={() => handleConsButtonClick(cons)}
            buttonStyle={[
              styles.consButton,
              selectedCons.includes(cons) && styles.selectedConsButton,
            ]}
            titleStyle={styles.consButtonText}
            accessible={true}
            accessibilityLabel={`Cons button ${cons}`}
            accessibilityHint={`Select ${cons} as a con if applicable`}
            accessibilityRole="button"
          />
        ))}
      </View>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  consLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  consContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  consButton: {
    backgroundColor: 'pink',
    paddingHorizontal: 8,
    margin: 4,
  },
  selectedConsButton: {
    backgroundColor: 'blue',
  },
  consButtonText: {
    color: 'black',
    fontWeight: '700',
  },
});

export default ReviewForm;