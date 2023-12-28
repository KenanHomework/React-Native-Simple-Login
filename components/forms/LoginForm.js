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

export default function LoginForm({ navigation }) {
  const db = openDatabase();

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (_, { rows }) => {
          setLoading(false);

          if (rows.length > 0) {
            const user = rows.item(0);
            if (user.password === password) {
              AsyncStorage.setItem(
                "user",
                JSON.stringify({ username: username, email: user.email })
              ).then(() => {
                navigation.navigate("Home");
              });
            } else {
              setErrorMessage("Wrong password.");
            }
          } else {
            setErrorMessage("User not found.");
          }
        },
        (_, error) => console.error("SQL Error: ", error)
      );
    });
  };

  const handleSubmit = () => {
    if (username.length < 3) {
      setErrorMessage("Username must be minimum 3 symbol");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be minimum 8 symbol");
      return;
    }

    setErrorMessage("");

    login();
  };

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists users (id integer primary key not null, username text, password text, email text);"
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <FInput
        label={"Username"}
        value={username}
        onChange={setUsername}
        isDisabled={!loading}
      />
      <FInput
        label={"Password"}
        value={password}
        onChange={setPassword}
        isDisabled={!loading}
      />

      {errorMessage && <ErrorMessage message={errorMessage} />}

      <KButton title={"Log in"} handlePress={handleSubmit} />

      <KDivider />
      <FStateChange
        label={"New to CLubrick?"}
        changeLabel={"Create account."}
        handleChange={() => navigation.navigate("SignUp")}
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
