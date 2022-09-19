import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import DetailsScreen from "./DetailsScreen";
import { StatusBar } from "react-native";

const MAIN_COLOR = "#3c1874";
const RED_COLOR = "#de354c";

const Tab = createBottomTabNavigator();

const logoItem = () => (
  <View style={styles.logo_container}>
    <Text style={styles.logo_brand}>VT</Text>
    <Text style={styles.logo_text}> Virtryon</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={focused ? "ios-home" : "ios-home-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Details") {
              return (
                <Ionicons
                  name={
                    focused
                      ? "ios-information-circle"
                      : "ios-information-circle-outline"
                  }
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: MAIN_COLOR,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerStyle: {
              backgroundColor: MAIN_COLOR,
            },

            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTitle: logoItem,
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "About Us",
            headerTintColor: MAIN_COLOR,
            headerTitleAlign: "center",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo_container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 10,
  },
  logo_brand: {
    color: RED_COLOR,
    fontWeight: "bold",
    marginRight: 3,
    marginLeft: -13,
    fontSize: 20,
  },
  logo_text: {
    color: "white",
    paddingTop: 4,
  },
});
