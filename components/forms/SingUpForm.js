import { StyleSheet, View, Platform } from "react-native";
import FInput from "./FInput.js";
import KButton from "../crossComponents/KButton.js";
import KDivider from "../crossComponents/KDivider.js";
import FStateChange from "./FStateChange.js";
import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage.js";
import * as SQLite from "expo-sqlite";
import AsyncStorage from "@react-native-async-storage/async-storage";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("step.db");
  return db;
}
export default function SignUpForm({ onSuccess, navigation }) {
  const db = openDatabase();

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (username.length < 3) {
      setErrorMessage("Username must be minimum 3 symbol");
      return;
    }

    if (email.length < 5) {
      setErrorMessage("Email must be minimum 5 symbol");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be minimum 8 symbol");
      return;
    }

    setErrorMessage("");

    signUp();
  };

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists users (id integer primary key not null, username text, password text, email text);"
      );
    });
  }, []);

  const signUp = () => {
    setLoading(true);
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (_, { rows }) => {
          setLoading(false);
          if (rows.length > 0) {
            setErrorMessage("User is already exist.");
          } else {
            tx.executeSql(
              "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
              [username, password, email],
              (_) => {
                AsyncStorage.setItem(
                  "user",
                  JSON.stringify({ username: username, email: email })
                ).then(() => {
                  navigation.navigate("Home");
                });
              },
              (_, error) => console.error("SQL Error: ", error)
            );
          }
        },
        (_, error) => console.error("SQL Error: ", error)
      );
    });
  };

  return (
    <View style={styles.container}>
      <FInput
        label={"Username"}
        value={username}
        onChange={setUsername}
        isDisabled={!loading}
      />
      <FInput
        label={"Email"}
        value={email}
        onChange={setEmail}
        isDisabled={!loading}
      />
      <FInput
        label={"Password"}
        value={password}
        onChange={setPassword}
        isDisabled={!loading}
      />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <KButton title={"Sign Up"} handlePress={handleSubmit} />

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
