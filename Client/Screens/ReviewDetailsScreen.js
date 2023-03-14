import React from "react";
import { StyleSheet, Text, Button, View, Image } from "react-native";
import ReviewCard from "../Components/ReviewCard";
// import { Images } from "../styles/Images";
import { useNavigation } from "@react-navigation/native";
export default function ReviewDetailsScreen({ route, navigation }) {
  const { item } = route.params;
  const rating = route.params.rating;
  const nav = useNavigation();
  const pressHandler = () => {
   nav.goBack();
  };

  return (
    <View>
      <Text >Review Details</Text>
      <ReviewCard>
        <Text>{route.params.title} </Text>
        <Text>{route.params.body} </Text>
        {/* <Text>{route.params.rating} </Text> */}
        <View style={styles.rating}>
          <Text>Rating: </Text>
          {/* <Image source={Images.ratings[rating]} /> */}
        </View>
      </ReviewCard>
      <Button title={"Back to review"} onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});
