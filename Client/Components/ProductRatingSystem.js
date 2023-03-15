import React, { useState } from 'react';
import { View, Text } from 'react-native';

function ProductRating() {
  const [yesCount, setYesCount] = useState(0);
  const [maybeCount, setMaybeCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  function handleRatingChange(rating) {
    switch (rating) {
      case 'yes':
        setYesCount(yesCount + 1);
        break;
      case 'maybe':
        setMaybeCount(maybeCount + 1);
        break;
      case 'no':
        setNoCount(noCount + 1);
        break;
      default:
        break;
    }
  }

  function calculateRating() {
    const totalVotes = yesCount + maybeCount + noCount;
    if (totalVotes === 0) {
      return "No rating yet";
    }
    const rating = yesCount / totalVotes;
    if (rating >= 0.9) {
      return "A";
    } else if (rating >= 0.8) {
      return "B";
    } else if (rating >= 0.7) {
      return "C";
    } else if (rating >= 0.6) {
      return "D";
    } else {
      return "F";
    }
  }

  return (
    <View>
      <Text>Product rating: {calculateRating()}</Text>
      <View>
        <Text>Yes: {yesCount}</Text>
        <Text>Maybe: {maybeCount}</Text>
        <Text>No: {noCount}</Text>
      </View>
      <View>
        <Text onPress={() => handleRatingChange('yes')}>Yes</Text>
        <Text onPress={() => handleRatingChange('maybe')}>Maybe</Text>
        <Text onPress={() => handleRatingChange('no')}>No</Text>
      </View>
    </View>
  );
}

export default ProductRating;
