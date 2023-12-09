import { StyleSheet, View, Text, Button } from "react-native";
import FInput from "./FInput.js";
import KButton from "../crossComponents/KButton.js";
import KDivider from "../crossComponents/KDivider.js";
import FStateChange from "./FStateChange.js";

export default function LoginForm({ handleChange, onSuccess }) {
  return (
    <View style={styles.container}>
      <FInput label={"Username"} />
      <FInput label={"Password"} />
      <KButton
        title={"Log in"}
        handlePress={() =>
          onSuccess({
            title: "Login Successfully",
            message: "Login Process successfully finished!",
          })
        }
      />
      <KDivider />
      <FStateChange
        label={"New to CLubrick?"}
        changeLabel={"Create account."}
        handleChange={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    display: "flex",
    gap: 30,
  },
});
