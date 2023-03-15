import React, {useEffect} from "react";
import { StyleSheet, SafeAreaView, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";


const SplashScreen = () => {


    const navigation = useNavigation();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Loading');
      }, 3000); // navigate to the new screen after 2 seconds
  
      // cleanup function to clear the timer when the component unmounts
      return () => {
        clearTimeout(timer);
      };
    }, [navigation]);

  return (
    <SafeAreaView style={styles.layout}>
  
        {/* //< DATA HERE APP Logo can stay in App */}
      <Image source={require("../assets/icons/MainLogo.png")}   />
     
    </SafeAreaView>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#111111",
  },
});
