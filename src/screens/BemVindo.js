import React from "react";
import { View, Text, StyleSheet } from "react-native";

function BemVindo() {
  return (
    <View style={styles.container}>
      <Text>
        Teste tela de <Text style={styles.text}>Bem Vindo</Text>
      </Text>
    </View>
  );
}
export default BemVindo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "red",
  },
});
