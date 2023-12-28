import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import KButton from "../components/crossComponents/KButton";
export default function Home({ navigation }) {
  const [user, setUser] = useState();

  useEffect(() => {
    AsyncStorage.getItem("user").then((jsonUser) => {
      const user_obj = JSON.parse(jsonUser);
      //   console.log(user_obj);
      setUser(user_obj);
    });
  }, []);

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            {user.username}
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 20 }}>{user.email}</Text>
        </>
      )}
      <KButton
        title={"Log out"}
        handlePress={() => {
          AsyncStorage.removeItem("user").then(() => {
            navigation.navigate("Login");
          });
        }}
      />
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
    padding: 20,
  },
});
