import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function KButton({ title, handlePress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "auto",
    backgroundColor: "#3B49DF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
