import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Enter from "./screens/Enter.js";
import SuccessModal from "./components/crossComponents/SuccessModal.js";

export default function App() {
  const [modal, setModal] = useState(null);

  return (
    <View style={styles.container}>
      <Enter onSuccess={setModal} />
      <SuccessModal modal={modal} close={() => setModal(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
