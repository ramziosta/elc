import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

const MainAR = ({ navigation: nav }) => {
  const [hasCamPerms, setHasCamPerms] = useState(null);
  const [faces, setFaces] = useState([]);

  const onCamPerms = (status) => {
    setHasCamPerms(status.status === "granted");
  };

  const onFacesDetected = (faces) => {
    setFaces(faces.faces);
  };

  const onFaceDetectionError = (err) => {
    console.log(err);
  };

  useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA).then(onCamPerms);
  }, []);

  if (hasCamPerms === null) {
    return <View />;
  }

  if (hasCamPerms === false) {
    return (
      <View style={styles.container}>
        <Text>No access to Camera.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <View style={styles.contentContainer}>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.contentText}>
            Experience our wide collection of frames!
          </Text>
        </View>
        <View style={{ flexDirection: "row", flex: 0.25 }}>
          <View style={{ flex: 0.5 }}>
            <Image
              source={require("../assets/Frapp-03.png")}
              style={{ height: 64, width: 160 }}
            />
          </View>
          <View style={{ flex: 0.5 }}>
            <Image
              source={require("../assets/Frapp-02.png")}
              style={{ height: 64, width: 160 }}
            />
          </View>
        </View>
      </View>
      <View style={styles.cameraStyle}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.front}
          onFacesDetected={onFacesDetected}
          onFacesDetectionError={onFaceDetectionError}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.accurate,
            detectLandmarks: FaceDetector.Constants.Landmarks.all,
            runClassifications: FaceDetector.Constants.Classifications.all,
          }}
        >
          <View style={styles.framesContainer}>
            <View style={styles.categoryContainer}>
              <TouchableOpacity style={styles.filterImageContainer}>
                <Image
                  source={require("../assets/Frapp-03.png")}
                  style={{ height: 32, width: 32 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterImageContainer}>
                <Image
                  source={require("../assets/Frapp-02.png")}
                  style={{ height: 32, width: 32 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterImageContainer}>
                <Image
                  source={require("../assets/Frapp-01.png")}
                  style={{ height: 32, width: 32 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterImageContainer}>
                <Image
                  source={



export default MainAR;
// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   droidSafeArea: {
//     marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
//   headingContainer: {
//     flex: 0.15,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#6278e4",
//   },
//   titleText1: {
//     fontSize: RFValue(30),
//     fontWeight: "bold",
//     color: "#efb141",
//     fontStyle: "italic",
//     textShadowColor: "rgba(0, 0, 0, 0.75)",
//     textShadowOffset: { width: -3, height: 3 },
//     textShadowRadius: 1,
//   },
//   titleText2: {
//     fontSize: RFValue(30),
//     fontWeight: "bold",
//     color: "white",
//     fontStyle: "italic",
//     textShadowColor: "rgba(0, 0, 0, 0.75)",
//     textShadowOffset: { width: -3, height: 3 },
//     textShadowRadius: 1,
//   },
//   subheading1: {
//     fontSize: RFValue(20),
//     color: "#efb141",
//     fontStyle: "italic",
//     textShadowColor: "rgba(0, 0, 0, 0.75)",
//     textShadowOffset: { width: -3, height: 3 },
//     textShadowRadius: 1,
//   },
//   subheading2: {
//     fontSize: RFValue(20),
//     color: "white",
//     fontStyle: "italic",
//     textShadowColor: "rgba(0, 0, 0, 0.75)",
//     textShadowOffset: { width: -3, height: 3 },
//     textShadowRadius: 1,
//   },
//   cameraStyle: { flex: 0.65 },
//   framesContainer: {
//     flex: 0.2,
//     paddingLeft: RFValue(20),
//     paddingRight: RFValue(20),
//     paddingTop: RFValue(30),
//     backgroundColor: "#6278e4",
//   },
//   filterImageContainer: {
//     height: RFPercentage(8),
//     width: RFPercentage(15),
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#e4e7f8",
//     borderRadius: 30,
//     marginRight: 20,
//   },
//   categoryContainer: {
//     flex: 0.4,
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//     marginBottom: RFValue(10),
//   },
//   categoryBox: {
//     flex: 0.2,
//     borderRadius: 30,
//     borderWidth: 1,
//     backgroundColor: "white",
//     width: "100%",
//     padding: RFValue(3),
//     margin: 1,
//     alignItems: "center",
//   },
//   categoryBoxSelected: {
//     flex: 0.2,
//     borderRadius: 30,
//     borderWidth: 1,
//     backgroundColor: "#efb141",
//     width: "100%",
//     padding: RFValue(3),
//     margin: 1,
//     alignItems: "center",
//   },
// });
const styles = StyleSheet.create({
  container: { flex: 1 , marginTop: 300},
  droidSafeArea: {
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headingContainer: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6278e4",
  },
  titleText1: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    color: "#efb141",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  titleText2: {
    fontSize: RFValue(30),
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  subheading1: {
    fontSize: RFValue(20),
    color: "#efb141",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  subheading2: {
    fontSize: RFValue(20),
    color: "white",
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 1,
  },
  cameraStyle: { flex: 0.65 },
  framesContainer: {
    flex: 0.2,
    paddingLeft: RFValue(20),
    paddingRight: RFValue(20),
    paddingTop: RFValue(10),
    backgroundColor: "#6278e4",
  },
  filterImageContainer: {
    height: RFPercentage(8),
    width: RFPercentage(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e4e7f8",
    borderRadius: 30,
    marginRight: 20,
  },
  categoryContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: RFValue(10),
  },
});
