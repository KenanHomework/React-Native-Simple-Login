import { StyleSheet, View, ScrollView } from "react-native";
import React, { useState } from "react";
import SignUpForm from "../components/forms/SingUpForm.js";
import SuccessModal from "../components/crossComponents/SuccessModal.js";
import FormHeader from "../components/forms/FormHeader.js";

export default function SingUp({ navigation }) {
  const [modal, setModal] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <FormHeader />
        <SignUpForm onSuccess={setModal} navigation={navigation} />
        <SuccessModal modal={modal} close={() => setModal(null)} />
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
