import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function KDivider({ selfMargin }) {
  return (
    <View
      style={{
        width: "100%",
        height: 2,
        borderRadius: 8,
        backgroundColor: "#D1D5DB",
        marginVertical: selfMargin ?? 0,
      }}
    ></View>
  );
}
