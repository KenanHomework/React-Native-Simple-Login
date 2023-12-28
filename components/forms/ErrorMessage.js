import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderColor: "#7f1d1d",
    borderWidth: 1,
    borderRadius: 8,
  },
  text: {
    color: "#b91c1c",
  },
});
