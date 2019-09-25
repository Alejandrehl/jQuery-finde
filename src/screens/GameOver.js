import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOver = ({ navigation }) => {
  const { points } = navigation.state.params;

  return (
    <View style={styles.viewBody}>
      <Text style={styles.textTitle}>¡Game Over!</Text>
      <Text style={styles.yourText}>Your</Text>
      <Text style={styles.yourScoreText}>{points}</Text>
      <Text style={styles.scoreText}>Score</Text>
      <Text onPress={() => navigation.navigate("Home")}>Ir a inicio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: "30%",
    alignItems: "center"
  },
  textTitle: {
    fontSize: 50,
    fontWeight: "bold"
  },
  yourText: {
    fontSize: 30
  },
  yourScoreText: {
    fontSize: 60,
    fontWeight: "bold",
    marginTop: "20%"
  },
  scoreText: {
    fontSize: 40
  }
});

export default GameOver;
