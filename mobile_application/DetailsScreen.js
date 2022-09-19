import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";

const MAIN_COLOR = "#3c1874";

const DATA = [
  {
    id: 0,
    title: "Prof. Mostafa Soliman",
    career: "Distributed Systems Professor",
    photo: require("./assets/imgs/person_0.jpg"),
  },
  {
    id: 1,
    title: "Dr. Ahmed Bayoumi",
    career: "Machine Learning Professor",
    photo: require("./assets/imgs/person_1.jpg"),
  },
  {
    id: 2,
    title: "Ahmed Heakl",
    career: "Student",
    photo: require("./assets/imgs/person_2.jpg"),
  },
  {
    id: 3,
    title: "Mohamed Sharshar",
    career: "Student",
    photo: require("./assets/imgs/person_3.jpeg"),
  },
  {
    id: 4,
    title: "Abdelrahman Ehab",
    career: "Student",
    photo: require("./assets/imgs/person_4.jpeg"),
  },
  {
    id: 5,
    title: "Youssef Zaghloul",
    career: "Student",
    photo: require("./assets/imgs/person_5.jpeg"),
  },
];

const Item = ({ title, photo, career }) => (
  <View style={styles.person}>
    <Image style={styles.tinyLogo} source={photo} />
    <View style={styles.person_data_container}>
      <Text style={styles.person_data__name}>{title}</Text>
      <Text style={styles.person_data__car}>{career}</Text>
    </View>
  </View>
);

export default function DetailsScreen() {
  const renderItem = ({ item }) => {
    return <Item title={item.title} photo={item.photo} career={item.career} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onPress={() => console.log("HEY")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  person: {
    flexDirection: "row",
    backgroundColor: MAIN_COLOR,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  person_data_container: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 20,
    paddingTop: 14,
  },
  person_data__name: {
    fontSize: 20,
    color: "white",
  },
  person_data__car: {
    fontSize: 15,
    fontStyle: "italic",
    color: "white",
  },
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
