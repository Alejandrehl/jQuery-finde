import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./src/navigations/navigator";
import GameState from "./src/context/game/GameState";

const App = () => {
  return (
    <View style={styles.container}>
      <GameState>
        <AppNavigator />
      </GameState>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
