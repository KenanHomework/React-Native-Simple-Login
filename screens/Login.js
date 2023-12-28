import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import LoginForm from "../components/forms/LoginForm.js";
import FormHeader from "../components/forms/FormHeader.js";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <FormHeader />

        <LoginForm navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  scrollView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
