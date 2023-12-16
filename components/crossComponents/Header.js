import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Header({ title }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
      }}
    >
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../../assets/logo_s.png")}
      />
      <Text style={{ color: "black", fontSize: 23, marginBottom: 4 }}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
