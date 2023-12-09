import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LoginForm from "../components/forms/LoginForm.js";
import SignUpForm from "../components/forms/SingUpForm.js";

export default function Enter({ onSuccess }) {
  const [state, setState] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
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

      {state == "new" ? (
        <SignUpForm onSuccess={onSuccess} handleChange={() => setState("")} />
      ) : (
        <LoginForm onSuccess={onSuccess} handleChange={() => setState("new")} />
      )}
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
  header: {
    width: "auto",
    height: "auto",
    padding: 10,
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  enterTitle: { fontWeight: "bold", fontSize: 24 },
  enterDescription: { fontSize: 16, textAlign: "center" },
});
