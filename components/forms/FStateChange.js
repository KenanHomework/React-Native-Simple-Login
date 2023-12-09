import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function FStateChange({ label, changeLabel, handleChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={handleChange}>
        <Text style={styles.changeLabel}>{changeLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  label: {
    fontSize: 16,
    // fontWeight: "400",
  },
  changeLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#3B49DF",
  },
});
