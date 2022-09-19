import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const camera_ref = useRef(null);

  const _takePhoto = async () => {
    const options = { base64: true, quality: 0};
    const photo = await camera_ref.current.takePictureAsync(options);
    while (photo === null) {}

    fetch("http://10.0.0.5:8000/pose_app/imgend", {
      method: "POST",
      body: JSON.stringify({
        photo_data: photo.base64,
      }),
    }).then((data) => console.log(data.json()));

    // navigation.navigate("ResultScreen", { photoObj: photo });
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        pictureSize={"320x240"}
        style={styles.camera}
        type={type}
        ref={camera_ref}
      ></Camera>
      <Button onPress={_takePhoto} title="Take Photo" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
