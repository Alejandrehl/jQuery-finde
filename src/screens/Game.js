import React, { useContext, useEffect, useState, Fragment } from "react";
import GameContext from "../context/game/gameContext";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { Image } from "react-native-elements";
import Square from "../components/Square";

const Game = ({ navigation }) => {
  const gameContext = useContext(GameContext);
  const {
    timer,
    timeout,
    randomNames,
    random,
    countdown,
    countdownOut,
    setHighScore
  } = gameContext;
  const [points, setPoints] = useState(0);

  setTimeout(() => {
    if (timer > 0) {
      countdown();
    } else {
      setHighScore(points);
      countdownOut();
    }
  }, 1000);

  useEffect(() => {
    if (timeout) {
      navigation.navigate("GameOver", { points: points });
    }
    random();
  }, [timeout, randomNames]);

  const names = randomNames.map((name, index) => {
    return (
      <View key={index}>
        <TouchableOpacity onPress={() => nextList(name)}>
          <Square name={name} />
        </TouchableOpacity>
      </View>
    );
  });

  const nextList = name => {
    if (name === "jQuery") setPoints(points + 1);
    if (points >= 55) {
      setHighScore(points);
      navigation.navigate("ClearStage");
    } else {
      random();
    }
  };

  return (
    <Fragment>
      <View style={styles.viewBody}>
        <Text style={styles.textTitle}>Find it !</Text>
        <Text style={styles.nowText}>now</Text>
      </View>
      <View style={styles.squareView}>{names}</View>
      <View style={styles.timerContainer}>
        <Image
          source={require("../../assets/clock.png")}
          style={styles.clockImage}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.timerText}>{timer}</Text>
      </View>
    </Fragment>
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
  nowText: {
    fontSize: 30
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150
  },
  clockImage: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  timerText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  squareView: {
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 30
  }
});

export default Game;
