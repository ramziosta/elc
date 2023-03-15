import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ buttonTitle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 50,
    paddingVertical: 10,
    backgroundColor: '#E3c3ff',
      width:300,
    alignSelf:  "center",
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',

    fontSize: 16,
    textAlign: 'center',
  }
});