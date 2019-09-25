import React, { useReducer } from "react";
import GameContext from "./gameContext";
import gameReducer from "./gameReducer";
import {
  COUNT_DOWN,
  TIME_OUT,
  NEW_GAME,
  RANDOM_NAMES,
  SET_HIGH_SCORE,
  GET_HIGH_SCORE
} from "../types";
import { AsyncStorage } from "react-native";

const GameState = props => {
  const initialState = {
    nameLists: [
      ["jQuery", "Jake Weaary", "Vue.js", "Knockout"],
      ["React", "Jake Wery", "Meteor", "jQuery"],
      ["Aylmaoo", "Jake Wery", "jQuery", "Xamarin"]
    ],
    randomNames: null,
    timer: 60,
    timeout: false,
    highScore: 0
  };

  const [state, dispatch] = useReducer(gameReducer, initialState);

  const countdown = () => {
    dispatch({ type: COUNT_DOWN, timer: state.timer - 1 });
  };

  const countdownOut = () => {
    dispatch({ type: TIME_OUT });
  };

  const random = async () => {
    const names = await Object.values(state.nameLists);
    const res = await names[Math.floor(Math.random() * names.length)];
    dispatch({ type: RANDOM_NAMES, randomNames: res });
  };

  const startGame = () => {
    dispatch({ type: NEW_GAME });
    random();
  };

  const setHighScore = score => {
    if (score > state.highScore)
      dispatch({ type: SET_HIGH_SCORE, payload: score });
  };

  const getHighScore = async () => {
    try {
      const value = await AsyncStorage.getItem("highScore");
      dispatch({ type: GET_HIGH_SCORE, payload: value });
    } catch (e) {}
  };

  return (
    <GameContext.Provider
      value={{
        nameLists: state.nameLists,
        timer: state.timer,
        timeout: state.timeout,
        randomNames: state.randomNames,
        highScore: state.highScore,
        random,
        startGame,
        countdown,
        countdownOut,
        setHighScore,
        getHighScore
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
