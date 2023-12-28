import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FormHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/logo.png")}
        style={{
          width: 70,
          height: 70,
          marginBottom: 10,
        }}
      />
      <Text style={styles.enterTitle}>Join the Clubrick Community</Text>
      <Text style={styles.enterDescription}>
        Clubrick Community is a community of amazing developers
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "auto",
    height: "auto",
    padding: 10,
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  enterTitle: { fontWeight: "bold", fontSize: 24 },
  enterDescription: { fontSize: 16, textAlign: "center" },
});
