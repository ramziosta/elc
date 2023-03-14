import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView
} from "react-native";
import { globalStyles } from "../styles/Styles";
import { Formik } from "formik";
import Button from "../Components/Button.js";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";
import { useState } from 'react';
import {Card, RatingsFaceCards, RatingsButtons} from "../Components/index";
import * as yup from 'yup';



const categories1 = [
  { label: 'Easy open', value: 'easy_open', id: 1 },
  { label: 'No tools', value: 'no_tools' , id: 2},
  { label: 'Texture', value: 'texture', id: 3 },
  { label: 'Ergonomic design', value: 'ergonomic_design', id: 4 },
  { label: 'Easy apply', value: 'easy_apply' , id: 5},
  { label: 'Has tactile markers', value: 'tactile_markers', id: 6 },
];

const categories2 = [
  { label: 'Difficult to open', value: 'difficult_open', id: 1 },
  { label: 'Tools required', value: 'tools_required', id: 2 },
  { label: 'Messy', value: 'messy', id: 3 },
  { label: 'Ergonomic design', value: 'ergonomic_design', id: 4 },
  { label: 'Easy apply', value: 'easy_apply', id: 5 },
  { label: 'Has tactile markers', value: 'tactile_markers', id: 6 },
];




const ReviewScreen = (props) => {
  // const nav = useNavigation();
  const [listKey, setListKey] = useState(88);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={{color: "#ffffff",marginVertical:10,marginLeft: 20,  }}>◀︎ Back</Text>
          </TouchableOpacity>
      <Card />
      <View style={styles.textContainer}>
      <Text style={styles.headerText}>Rate Product</Text>
      <Text style={styles.text}>What do you <Text style={{color:"#E3C3FF"}}>LIKE</Text> about this product?</Text>
      <Text style={styles.text}>Select up to 3:</Text>
      </View>
      <RatingsButtons data={categories1} />
      <View style={styles.textContainer}>
      <Text style={styles.text}>What do you <Text style={{color:"#E3C3FF"}}>DISLIKE</Text> about this product?</Text>
      <Text style={styles.text}>Select up to 3:</Text>
      </View>
      <RatingsButtons data={categories2}/>

      

      <Text style={styles.accessibleText}>Overall did you find this product accessible?</Text>
      <RatingsFaceCards />
      <Text style={styles.formText}>Tell us what you think</Text>
      

      <View style={styles.ReviewFormcontainer}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
        color="#ffffff"
      />
      <Text style={styles.label}>Review:</Text>
      <TextInput
        style={styles.input}
        value={review}
        onChangeText={(text) => setReview(text)}
        multiline={true}
        numberOfLines={8}
        color="#ffffff"
      />
    </View>
        <TouchableOpacity style={styles.submit} onPress={() => props.navigation.navigate("Review")}>
          <Text style={styles.submitText}>Submit Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
  
};

export default ReviewScreen;


const styles = StyleSheet.create({ 
container: {
  display: "flex",
 backgroundColor: "#111111",
 height: "100%",
},
headerText :{
  color: "white",
  fontSize: 16,
  fontWeight: "bold",
  marginVertical: 10,
},
textContainer: {
  marginHorizontal: 20,
  marginBottom: 10,
},
text: {
  color: "#ffffff",

},
accessibleText :{
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
ReviewFormcontainer: {
  backgroundColor: "#434343",
  paddingHorizontal: 10,
  paddingVertical: 10,
  marginHorizontal: 16,
  marginVerical: 30,
},
label: {
  color: "#ffffff",
  color: "white",
  borderBottomWidth: 1,
  marginBottom: 8,
},
titleInput: {
  borderBottomColor: "#ffffff",
  borderBottomWidth: 1,
  marginBottom: 5,
},
input: {
  padding: 8,
  marginBottom: 16,
  height: 100,

},
submit: {
  alignSelf: "center",
  max: 300,
  backgroundColor: "#e3c3ff",
  paddingHorizontal: 100,
  marginTop: 20,
  marginVerical: 30,
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




// <KeyboardAvoidingView
// behavior={Platform.OS === "ios" ? "padding" : "height"}
// style={globalStyles.container2}
// >
// <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//   <View style={globalStyles.container}>
//     <Formik
//       initialValues={{ title: "", body: "", rating: "" }}
//       validationSchema={reviewSchema}
// //!  ---------- submit function----------------- 
//       onSubmit={(values, actions) => {
       
//         // values.key = listKey.toString();

//         addDoc(collection(db, "article"), values);
//         console.log(values);
//         addReview(values);
//         actions.resetForm();
//         // setListKey(listKey + 1);
//         // console.log(listKey);
//       }}
//     >
//       {(props) => (
//         <View>
//           <View style={globalStyles.formField}>
//             <Text style={globalStyles.lableText}>Title:</Text>
//             <TextInput
//               style={globalStyles.input}
//               placeholder="title"
//               onChangeText={props.handleChange("title")}
//               onBlur={props.handleBlur("title")}
//               value={props.values.title}
//             />
//             <Text style={globalStyles.errorText}>
//               {props.touched.title && props.errors.title}
//             </Text>
//           </View>

//           <View style={globalStyles.formField}>
//             <Text style={globalStyles.lableText}>Content:</Text>
//             <TextInput
//               style={globalStyles.input}
//               multiline
//               minHeight={60}
//               placeholder="body"
//               onChangeText={props.handleChange("body")}
//               onBlur={props.handleBlur("body")}
//               value={props.values.body}
//             />
//             <Text style={globalStyles.errorText}>
//               {props.touched.body && props.errors.body}
//             </Text>
//           </View>

//           <View style={globalStyles.formField}>
//             <Text style={globalStyles.lableText}>Rating:</Text>
//             <TextInput
//               style={globalStyles.input}
//               placeholder="rating"
//               onChangeText={props.handleChange("rating")}
//               onBlur={props.handleBlur("rating")}
//               value={props.values.rating}
//               keyboardType="numeric"
//             />
//             <Text style={globalStyles.errorText}>
//               {props.touched.rating && props.errors.rating}
//             </Text>
//           </View>
//           <Button onPress={props.handleSubmit} buttonTitle="submit" />
//           {/* 
//           <Button
//             onPress={props.handleSubmit}
//             title="Submit"
//             color="green"
//             style={globalStyles.button}
//           /> */}
//         </View>
//       )}
//     </Formik>
//   </View>
// </TouchableWithoutFeedback>
// </KeyboardAvoidingView>