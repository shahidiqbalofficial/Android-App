import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SignUpPage = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setemailpass = async () => {
    try {
      await AsyncStorage.setItem("Name", Name);
      await AsyncStorage.setItem("EMAIL", email);
      await AsyncStorage.setItem("PASSWORD", password);
      navigation.navigate("Login");
    } catch (e) {
      console.log("", e);}};
  return (
    <View
      style={{ backgroundColor: "lightpink", borderRadius: 15, margin: 15 }}>
      <Text style={{
          padding: 10,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          fontStyle: "",
        }}
      >
        SignUp Page
      </Text>

      <View
        style={{
          borderWidth: 3,
          borderRadius: 15,
          backgroundColor: "lightgray",
          textAlign: "center",
          margin: 40,
          marginTop: 20,
          marginBottom: 15,
          borderColor: "green",
          padding: 20,
          height: 400,
        }}
      >
        <Text style={styles.textsheet}>
          UserName{" "}
          <TextInput
            onChangeText={(Name) => setName(Name)}
            style={{
              fontSize: 15,
              backgroundColor: "lightgreen",
              color: "darkpink",
              margin: 5,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
              marginLeft: 50,
            }}
            placeholder="Enter UserName"
          ></TextInput>
        </Text>
        {/* <Text style={styles.textsheet}>
          Last Name{" "}
          <TextInput
            style={{
              fontSize: 15,
              backgroundColor: "lightgreen",
              color: "darkpink",
              margin: 5,
              marginLeft: 50,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Enter LastName"
          ></TextInput>
        </Text> */}
        <Text style={styles.textsheet}>
          Email{" "}
          <TextInput
            onChangeText={(email) => setEmail(email)}
            style={{
              fontSize: 15,
              backgroundColor: "lightgreen",
              color: "darkpink",
              margin: 5,
              marginLeft: 90,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Enter Email"
          ></TextInput>
        </Text>
        <Text style={styles.textsheet}>
          Password{" "}
          <TextInput
            onChangeText={(password) => setPassword(password)}
            style={{
              fontSize: 15,
              backgroundColor: "lightgreen",
              color: "darkpink",
              margin: 5,
              marginLeft: 60,
              borderWidth: 1,
              borderRadius: 5,
              textAlign: "center",
            }}
            placeholder="Enter Password"
            secureTextEntry={true}
          ></TextInput>
        </Text>
        {/* <Text style={styles.textsheet}>
          Confirm Password{" "}
          <TextInput
            style={{
              fontSize: 15,
              backgroundColor: "lightgreen",
              color: "darkpink",
              margin: 5,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 10,
              textAlign: "center",
            }}
            placeholder="Enter Password"
            secureTextEntry={true}
          ></TextInput>
        </Text> */}
        <TouchableOpacity
          onPress={() => {
            setemailpass();
          }}
        >
          <Text
            style={{
              backgroundColor: "blue",
              color: "white",
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 40,
              marginBottom: 40,
            }}
          >
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
            fontSize: 15,
            padding: 0,
            marginBottom: 5,
          }}
        >
          If you have Already Accound
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              backgroundColor: "green",
              textAlign: "center",
              color: "white",
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 2,
              marginBottom: 40,
            }}
          >
            Go to Login Page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textsheet: {
    margin: 10,
    marginRight: 0,
    marginLeft: 0,
    fontSize: 18,
  },
});

export default SignUpPage;
