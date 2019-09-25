import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Image } from "react-native-elements";

const ClearStage = () => {
  return (
    <View style={styles.viewBody}>
      <Image
        source={require("../../assets/jquery.png")}
        style={styles.jqueryImage}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text onPress={() => navigation.navigate("Home")}>Ir a inicio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: "20%",
    marginRight: "20%",
    alignItems: "center",
    justifyContent: "center"
  },
  jqueryImage: {
    width: 400,
    height: 100
  }
});

export default ClearStage;
