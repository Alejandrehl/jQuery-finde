import React, { useContext, useEffect } from "react";
import GameContext from "../context/game/gameContext";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { Image } from "react-native-elements";

const Home = ({ navigation }) => {
  const gameContext = useContext(GameContext);
  const { randomNames, startGame, highScore, getHighScore } = gameContext;

  useEffect(() => {
    if (randomNames !== null) {
      navigation.navigate("Game");
    }
    if (highScore === 0) {
      getHighScore();
    }
  }, [randomNames]);

  return (
    <View style={styles.viewBody}>
      <Text style={styles.textTitle}>jQuery Finder</Text>
      <TouchableOpacity style={styles.playButton} onPress={() => startGame()}>
        <Image
          source={require("../../assets/play.png")}
          style={{ width: 200, height: 200 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>
      <Text style={styles.hiScoretext}>Hi-Score</Text>
      {highScore === null || highScore === 0 ? (
        <Text style={styles.scoreText}>0</Text>
      ) : (
        <Text style={styles.scoreText}>{highScore}</Text>
      )}
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
    fontSize: 50
  },
  playButton: {
    marginTop: "30%"
  },
  hiScoretext: {
    fontSize: 30,
    marginTop: "20%"
  },
  scoreText: {
    fontSize: 50,
    fontWeight: "bold"
  }
});

export default Home;
