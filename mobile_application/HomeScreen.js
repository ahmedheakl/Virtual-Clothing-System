import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

const MAIN_COLOR = "#3c1874";
const RED_COLOR = "#de354c";

export default function HomeDataScreen({ navigation }) {
  return (
    <View style={styles.home_container}>
      <Text style={styles.home_text__welcome}>
        Welcome to Virtual Try On Technology
      </Text>
      <Text style={styles.home_text__sub}>
        We are introducing a virtual fitting room online without you moving a
        muscle isn’t it awesome?
      </Text>
      <Button
        title="Try Now"
        style={styles.home_text__button}
        color={RED_COLOR}
        fontSize={20}
        onPress={() => navigation.navigate("CameraScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home_container: {
    padding: 5,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  home_text__welcome: {
    fontSize: 40,
    fontWeight: "bold",
    color: MAIN_COLOR,
    paddingBottom: 10,
  },
  home_text__sub: {
    fontSize: 18,
    fontStyle: "italic",
    paddingBottom: 10,
  },
  home_text__button: {
    backgroundColor: RED_COLOR,
    borderRadius: 10,
    width: 20,
    fontWeight: "bold",
  },
});
