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

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    console.log(data);

    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={250}
        >
          <View style={styles.inputsList}>
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
          <Button label="Login" theme="primary" onPress={handleSubmit} />
          <Button
            label="Don't have an account? Create an account."
            onPress={handleSubmit}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    bottom: 0,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 32,
    width: "100%",

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
