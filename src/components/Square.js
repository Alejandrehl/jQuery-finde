import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const Square = ({ name }) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor("#" + (((1 << 24) * Math.random()) | 0).toString(16));
  }, []);

  return (
    <View style={{ width: 100, height: 100, backgroundColor: color }}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "grey"
  },
  text: {
    color: "white"
  }
});

export default Square;
