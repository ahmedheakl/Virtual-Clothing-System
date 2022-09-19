import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import CameraScreen from "./CameraScreen";
import ClothScreen from "./ClothScreen";
import ResultScreen from "./ResultScreen";
import { Button, Image, Text, View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const MAIN_COLOR = "#3c1874";


export default function HomeNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ClothScreen" component={ClothScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
    </Stack.Navigator>
  );
}

