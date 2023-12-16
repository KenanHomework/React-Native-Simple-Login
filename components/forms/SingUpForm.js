import { StyleSheet, View, Text, Button } from "react-native";
import FInput from "./FInput.js";
import KButton from "../crossComponents/KButton.js";
import KDivider from "../crossComponents/KDivider.js";
import FStateChange from "./FStateChange.js";

export default function SignUpForm({ onSuccess, navigation }) {
  return (
    <View style={styles.container}>
      <FInput label={"Username"} />
      <FInput label={"Email"} />
      <FInput label={"Password"} />
      <KButton
        title={"Sign Up"}
        handlePress={() =>
          onSuccess({
            title: "Sign Up Successfully",
            message: "Sing Up Process successfully finished!",
          })
        }
      />
      <KDivider />
      <FStateChange
        label={"Already have an account?"}
        changeLabel={"Log in."}
        handleChange={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    display: "flex",
    gap: 25,
  },
});
