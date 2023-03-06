import { StatusBar } from "expo-status-bar";
import React from "react";
import  { FlatList, Text, View, StyleSheet } from "react-native";

const carouselItems: {
    title: string,
    url: string,
    promp: string,
}

function Carousel() {
  return (
    <View style={styles.container}>
        <FlatList data={carouselItems} renderItem={} keyExtractor={} />
    </View>
  )
}

export default Carousel

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}