import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: "#FF6C00" }]}
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, { color: "#fff" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 100,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 16,
  },
  buttonLabel: {
    color: "#1B4371",
    fontSize: 16,
  },
});
