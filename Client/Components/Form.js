import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/Styles";
import { Formik } from "formik";
import Button from "./Button.js";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config";
import { useState } from "react";
//yup
const reviewSchema = Yup.object({
  title: Yup.string().required(),
  body: Yup.string().required(),
});

const Form = ({ addReview }) => {
  const [listKey, setListKey] = useState(88);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={globalStyles.container2}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Formik
            initialValues={{ title: "", body: "", rating: "" }}
            validationSchema={reviewSchema}
            //!  ---------- submit function-----------------
            onSubmit={(values, actions) => {
              // values.key = listKey.toString();

              addDoc(collection(db, "article"), values);
              console.log(values);
              addReview(values);
              actions.resetForm();
              // setListKey(listKey + 1);
              // console.log(listKey);
            }}
          >
            {(props) => (
              <View>
                <View style={globalStyles.formField}>
                  <Text style={{ color: "#ffffff" }}>Title:</Text>
                  <TextInput
                    style={{ color: "#ffffff" }}
                    placeholder="title"
                    onChangeText={props.handleChange("title")}
                    onBlur={props.handleBlur("title")}
                    value={props.values.title}
                  />
                  <Text style={globalStyles.errorText}>
                    {props.touched.title && props.errors.title}
                  </Text>
                </View>

                <View s style={{ color: "#ffffff" }}>
                  <Text style={{ color: "#ffffff" }}>Content:</Text>
                  <TextInput
                    style={{ color: "#ffffff" }}
                    multiline
                    minHeight={60}
                    placeholder="body"
                    onChangeText={props.handleChange("body")}
                    onBlur={props.handleBlur("body")}
                    value={props.values.body}
                  />
                  <Text style={{ color: "#ffffff" }}>
                    {props.touched.body && props.errors.body}
                  </Text>
                </View>

                <Button
                  onPress={props.handleSubmit}
                  buttonTitle="Submit Review"
                />
                {/* 
                  <Button
                    onPress={props.handleSubmit}
                    title="Submit"
                    color="green"
                    style={globalStyles.button}
                  /> */}
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
