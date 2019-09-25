import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";

import HomeScreen from "../screens/Home";
import GameScreen from "../screens/Game";
import GameOverScreen from "../screens/GameOver";
import ClearStageScreen from "../screens/ClearStage";

const MainStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      header: null
    })
  },
  Game: {
    screen: GameScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Game",
      header: null
    })
  },
  GameOver: {
    screen: GameOverScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Game Over",
      header: null
    })
  },
  ClearStage: {
    screen: ClearStageScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Clear Stage",
      header: null
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: MainStackNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            type="material-community"
            size={22}
            color={tintColor}
          />
        ),
        tabBarVisible: false
      })
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#33CB64",
      keyboardHidesTabBar: true
    }
  }
);

export default createAppContainer(RootStack);
