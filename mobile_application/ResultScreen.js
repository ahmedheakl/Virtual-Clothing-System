import React from "react";
import { Button, Image, Text, View, StyleSheet } from "react-native";

const MAIN_COLOR = "#3c1874";
const RED_COLOR = "#de354c";

export default function ResultScreen({ route, navigation }) {
  const { photoObj, uri_found } = route.params;

  const _goToCloth = () => {
    navigation.navigate("ClothScreen", { photoObj: photoObj });
  };

  const _goToCam = () => {
    navigation.push("CameraScreen");
  };
  return (
    <View>
      {uri_found ? (
        <Image style={styles.camera_shot} source={{ uri: photoObj.uri }} />
      ) : (
        <Image style={styles.camera_shot} source={{ uri: photoObj }} />
      )}

      <View style={styles.camera_shot__btnContainer}>
        {uri_found ? (
          <View style={styles.camera_shot__highlightCont}>
            <Button
              title="Not Satisified?"
              style={styles.camera_shot__btn}
              onPress={_goToCam}
              color={RED_COLOR}
            />
          </View>
        ) : (
          <View style={styles.camera_shot__highlightCont}>
            <Button
              title="One More?"
              style={styles.camera_shot__btn}
              onPress={_goToCam}
            />
          </View>
        )}
        {uri_found ? (
          <View style={styles.camera_shot__highlightCont}>
            <Button
              title="Go Next"
              style={styles.camera_shot__btn}
              onPress={_goToCloth}
            />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera_shot: {
    width: 400,
    height: 500,
    borderWidth: 5,
    borderColor: MAIN_COLOR,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: "center",
  },
  camera_shot__btnContainer: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  camera_shot__highlightCont: {
    marginRight: 25,
    marginLeft: 25,
    width: 150,
  },
  camera_shot__btn: {
    width: 200,
    marginRight: 50,
  },
});
