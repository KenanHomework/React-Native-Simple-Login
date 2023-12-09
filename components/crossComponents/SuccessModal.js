import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import React from "react";
import KDivider from "./KDivider";

export default function SuccessModal({ modal, close }) {
  return (
    <View style={styles.sa}>
      <Modal animationType="fade" transparent={true} visible={modal != null}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>{modal?.title}</Text>
              <TouchableOpacity onPress={close}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>X</Text>
              </TouchableOpacity>
            </View>
            <KDivider selfMargin={3} />
            {/* Content */}
            <View style={styles.content}>
              <Text style={styles.message}>{modal?.message}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 320,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 8,
    paddingLeft: 20,
    paddingRight: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  content: {
    display: "flex",
    padding: 20,
  },
  message: {
    fontWeight: "400",
    fontSize: 16,
  },
});
