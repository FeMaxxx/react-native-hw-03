// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   ImageBackground,
//   TextInput,
//   KeyboardAvoidingView,
//   StyleSheet,
// } from "react-native";

// export default function PostsScreen() {
//   const [text, setText] = useState("");

//   return (
//     <ImageBackground
//       source={require("./background.jpg")}
//       style={styles.background}
//     >
//       <KeyboardAvoidingView style={styles.container} behavior="padding">
//         <View style={styles.form}>
//           <Text style={styles.label}>Enter your text:</Text>
//           <TextInput style={styles.input} onChangeText={setText} value={text} />
//         </View>
//       </KeyboardAvoidingView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: "cover",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   form: {
//     width: "80%",
//     backgroundColor: "white",
//     borderRadius: 10,
//     padding: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//   },
// });
