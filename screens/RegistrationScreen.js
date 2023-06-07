import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = () => {
    const data = {
      login,
      email,
      password,
    };

    console.log(data);

    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.imageBox}>
          <AntDesign
            style={styles.plusIcon}
            name="pluscircleo"
            size={24}
            color="black"
          />
        </View>

        <Text style={styles.title}>Registration</Text>
        <KeyboardAvoidingView
          style={styles.keyboardViev}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.inputsList}>
            <TextInput
              value={login}
              onChangeText={setLogin}
              placeholder="Login"
              style={styles.input}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              style={styles.input}
            />
            <View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={showPassword}
                style={styles.input}
              />

              <Pressable
                style={styles.showBtn}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Text style={styles.showBtnText}>Show</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>

        <View style={styles.buttonsBox}>
          <Button label="Register" theme="primary" onPress={handleSubmit} />
          <Button
            label="Already have an account? Sign in."
            onPress={handleSubmit}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  keyboardViev: {},
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 92,
    width: "100%",

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  imageBox: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    transform: [{ translateX: windowWidth / 2 - 60 }],
  },
  plusIcon: {
    position: "absolute",
    right: -12.5,
    bottom: 16,
    width: 25,
    height: 25,
    color: "#FF6C00",
  },
  title: {
    marginBottom: 32,
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
  },
  inputsList: {
    gap: 16,
  },
  input: {
    backgroundColor: "#f6f6f6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "400",
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonsBox: {
    flex: 1,
    marginTop: 43,
    paddingBottom: 40,
  },
  showBtn: {
    position: "absolute",
    right: 10,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  showBtnText: {
    color: "#1B4371",
    fontSize: 16,
  },
});
