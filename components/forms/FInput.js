import { StyleSheet, View, Text, TextInput } from "react-native";

export default function FInput({ placeholder, label }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  label: {
    fontWeight: "500",
    fontSize: 16,
  },
  input: {
    width: "100%",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
  },
});
