import {
  COUNT_DOWN,
  TIME_OUT,
  NEW_GAME,
  RANDOM_NAMES,
  SET_HIGH_SCORE,
  GET_HIGH_SCORE
} from "../types";
import { AsyncStorage } from "react-native";

export default (state, action) => {
  switch (action.type) {
    case COUNT_DOWN:
      return {
        ...state,
        timer: action.timer
      };
    case TIME_OUT:
      return {
        ...state,
        timeout: true
      };
    case RANDOM_NAMES:
      return {
        ...state,
        randomNames: action.randomNames
      };
    case NEW_GAME:
      return {
        ...state,
        timer: 60,
        timeout: false
      };
    case SET_HIGH_SCORE:
      AsyncStorage.setItem("highScore", action.payload);
      return {
        ...state,
        highScore: action.payload
      };
    case GET_HIGH_SCORE:
      return {
        ...state,
        highScore: action.payload
      };
    default:
      return state;
  }
};
