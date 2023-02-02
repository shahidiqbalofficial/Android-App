import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import SignUpPage from "../Project-File/src/Components/AssignmentSigLogProfPages/SignUpPage";
import LoginPage from "./src/Components/AssignmentSigLogProfPages/LoginPage";
import Profile from "./src/Components/AssignmentSigLogProfPages/Profile";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initState();
  }

  initState() {
    return {};
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* it is for AssignmentSigLogProfPages */}
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Profile Page" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default App;
