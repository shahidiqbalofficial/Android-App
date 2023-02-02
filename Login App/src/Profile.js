import React from "react";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [EmaiL, setEmaiL] = useState("");
  useEffect(() => {
    Getemailpa();
    GetName();
  });

  const GetName = async () => {
    const getName = await AsyncStorage.getItem("Name");
    console.log("", getName);
    setName(getName);
  };

  const Getemailpa = async () => {
    const getEmail = await AsyncStorage.getItem("EMAIL");
    console.log("", getEmail);
    setEmaiL(getEmail);
  };
  return (
    <View>
      <Text
        style={{
          padding: 10,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          fontStyle: "",
        }}
      >
        Profile page
      </Text>
      <View
        style={{
          borderWidth: 4,
          textAlign: "center",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 15,
          backgroundColor: "lightpink",
          textAlign: "center",
          margin: 40,
          marginTop: 15,
          marginBottom: 20,
          borderColor: "green",
          padding: 20,
          height: 500,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            margin: 110,
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 15,
            color: "red",
            backgroundColor: "yellow",
            padding: 8,
            fontFamily: "italic",
          }}
        >
          User Details
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 55,
            padding: 50,
            backgroundColor: "lightblue",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              margin: 5,

              fontFamily: "italic",
              color: "green",
            }}
          >
            UserName:{" "}
            <Text
              style={{
                fontSize: 17,
                fontFamily: "italic",

                color: "red",
              }}
            >
              {Name}
            </Text>{" "}
          </Text>
          <Text
            style={{
              fontSize: 20,
              margin: 5,

              fontFamily: "italic",
              color: "green",
            }}
          >
            Email:
            <Text
              style={{
                fontSize: 17,
                fontFamily: "italic",

                color: "red",
              }}
            >
              {EmaiL}
            </Text>
          </Text>
        </View>

        <View
          style={{
            borderWidth: 2,
            borderRadius: 20,
            marginTop: 30,
            backgroundColor: "lightgreen",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize: 15,
              padding: 0,
              marginTop: 10,
              marginBottom: 5,
            }}
          >
            If you want To Go On Login Page Then Press Me
          </Text>
          <TouchableOpacity
            title=""
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                backgroundColor: "blue",
                color: "white",
                margin: 120,
                borderRadius: 15,
                padding: 5,
                fontSize: 17,
                marginTop: 5,
                marginBottom: 10,
              }}
            >
              Press Me
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              textDecorationLine: "underline",
              fontSize: 15,
              padding: 0,
              marginBottom: 5,
            }}
          >
            If you want To Go On SignUp Page Then Press Me
          </Text>
          <TouchableOpacity
            title=""
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              style={{
                backgroundColor: "blue",
                color: "white",
                margin: 120,
                borderRadius: 15,
                padding: 5,
                fontSize: 17,
                marginTop: 5,
                marginBottom: 20,
              }}
            >
              Press Me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textsheet: {
    padding: 40,
    marginTop: 40,
  },
});

export default Profile;
