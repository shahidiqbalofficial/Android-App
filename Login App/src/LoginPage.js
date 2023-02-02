import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,ImageBackground
} from "react-native";
const LoginPage = ({ navigation }) => {
  // const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  

  const Getemailpass = async () => {
    //  const getName= await AsyncStorage.getItem("Name");
     const getemail= await AsyncStorage.getItem("EMAIL");
     const getpassword = await AsyncStorage.getItem("PASSWORD");
      if( (Email===getemail )&&(Password===getpassword)){
        navigation.navigate('Profile Page');
      }else{
        navigation.navigate('Login')
      }
   
    }
  
  return (
    <View style={{ backgroundColor: "lightgray" }}>
      <Text
        style={{
          padding: 10,
          textAlign: "center",
          fontSize: 30,
          fontWeight: "bold",
          fontStyle: "",
        }}
      >
        Login Page
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
          marginTop: 20,
          marginBottom: 20,
          borderColor: "green",
          padding: 20,
          height: 300,
        }}
      >
      <ImageBackground source={require('../../../assets/images/foodlogo.png')} style={{position:'absolute'}}>
        </ImageBackground>
        {/* <Image
          style={{
            marginTop: 15,
            alignSelf: "center",
            height: 200,
            width: 300,
          }}
          source={require("../../../assets/images/foodlogo.png")}
        ></Image> */}
        {/* <Text style={styles.textsheet}>
          UserName{" "}
          <TextInput
          onChangeText={(Email)=>setName(Name)}
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
            placeholder="Enter UserNmae"
          ></TextInput>
        </Text> */}
        <Text style={styles.textsheet}>
          Email{" "}
          <TextInput
          onChangeText={(Email)=>setEmail(Email)}
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
          Password{""}
          <TextInput
          onChangeText={(Password)=>setPassword(Password)}
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
        <TouchableOpacity onPress={() => {{Getemailpass()}}}>
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
            Login
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
          If you have not Accound Then SignUp Please
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              backgroundColor: "yellow",
              textAlign: "center",
              color: "blue",
              fontWeight: "bold",
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 5,
              marginBottom: 20,
            }}
          >
            Go to SignUp Page
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
          Go To Profile Page
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile Page")}>
          <Text
            style={{
              backgroundColor: "yellow",
              textAlign: "center",
              color: "blue",
              fontWeight: "bold",
              margin: 120,
              borderRadius: 15,
              padding: 5,
              fontSize: 17,
              marginTop: 5,
              marginBottom: 40,
            }}
          >
            Go to Profile Page
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
  Button: {
    padding: 40,
  },
});

export default LoginPage;
