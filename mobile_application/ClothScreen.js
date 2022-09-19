import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

const MAIN_COLOR = "#3c1874";
const RED_COLOR = "#de354c";

const { width, height } = Dimensions.get("window");

const ClothImages = [
  require("./assets/cloth_imgs/0.jpg"),
  require("./assets/cloth_imgs/1.jpg"),
  require("./assets/cloth_imgs/2.jpg"),
  require("./assets/cloth_imgs/3.jpg"),
  require("./assets/cloth_imgs/4.jpg"),
  require("./assets/cloth_imgs/5.jpg"),
  require("./assets/cloth_imgs/6.jpg"),
  require("./assets/cloth_imgs/7.jpg"),
  require("./assets/cloth_imgs/8.jpg"),
  require("./assets/cloth_imgs/9.jpg"),
];

URL = "http://10.112.88.87:8000/pose_app/pose_mobile";

export default function ClothScreen({ route, navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { photoObj } = route.params;
  const _predict = async () => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        index: currentIndex,
        photo_data: photoObj.base64,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        navigation.navigate("ResultScreen", {
          photoObj: "data:image/png;base64," + data.result_img,
          uri_found: false,
        });
      });
  };
  const _handleScroll = (e) => {
    setCurrentIndex(Math.floor(e.nativeEvent.contentOffset.x / 411.0));
  };
  return (
    <View style={styles.cloth_container}>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.cloth_slider}
        onScroll={_handleScroll}
      >
        {ClothImages.map((image, index) => (
          <Image key={index} source={image} style={styles.cloth_item} />
        ))}
      </ScrollView>
      <Text style={styles.cloth_text}>Swipe to select your desired cloth.</Text>
      <TouchableHighlight style={styles.cloth_button}>
        <Button onPress={_predict} title="Predict Now!" color={RED_COLOR} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  cloth_container: {
    marginTop: 50,
    width,
    height: height * 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  cloth_slider: {
    width,
    height: height * 0.7,
    alignContent: "center",
    borderColor: MAIN_COLOR,
    borderWidth: 5,
    borderRadius: 10,
  },
  cloth_item: {
    width,
    height: height * 0.7 * 0.95,
    resizeMode: "contain",
  },
  cloth_button: {
    marginTop: 20,
  },
  cloth_text: {
    fontSize: 20,
    fontStyle: "italic",
    marginTop: 5,
    marginBottom: -5,
  },
});
