import { StyleSheet } from "react-native";
import React, { useState } from "react";
import SignUp from "./screens/SingUp.js";
import Login from "./screens/Login.js";
import Home from "./screens/Home.js";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/crossComponents/Header.js";
import AnimatedSplash from "react-native-animated-splash-screen";

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(false);

  // SplashScreen.preventAutoHideAsync();
  // setTimeout(SplashScreen.hideAsync, 5000);
  setTimeout(() => {
    setLoading(true);
  }, 1000);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={loading}
      logoImage={require("./assets/logo.png")}
      backgroundColor={"#3B49DF"}
      logoHeight={150}
      logoWidth={150}
    >
      <Router />
    </AnimatedSplash>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            // backgroundColor: "darkblue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => null,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Header title={"Login"} />,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitle: () => <Header title={"SignUp"} />,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Header title={"Home"} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
