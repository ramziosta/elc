import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignInScreen = (props) => {
  // const auth = getAuth();
  const nav = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");
  
  const handleLogin = () => {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user);
    //     setUser(user);
        
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
    //   nav.navigate("Home");
  };

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign In Screen</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="email"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          keyboardType="password-address"
          value={password}
          onChangeText={(password) => {
            setPassword(password);
          }}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View>
        <Text style={styles.text}>Dont have an account? </Text>
        <Button
          title="Register"
          onPress={() => nav.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderBottomWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});
