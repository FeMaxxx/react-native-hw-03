import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostScreen from "./screens/PostsScreen";
import { StatusBar } from "expo-status-bar";

const image = require("./assets/BG.jpg");

export default function App() {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground source={image} style={styles.image} />
      </TouchableWithoutFeedback>

      <View style={styles.container}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}

        {/* <PostScreen /> */}

        <StatusBar style="dark" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
