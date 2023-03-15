import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Card from "./ReviewCard";


import { db } from "../config";
import { collection, getDocs } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";

function FireBaseCard({ navigation }) {
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
    <View >
      <FlatList
        data={Articles}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => nav.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={{color: "black",}}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default FireBaseCard;