import React , {useState}from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function App() {
    const [enteredGoal , setEnteredGoal] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
        />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput:{
    width: "80%",
    color: "red",
    borderColor: "black",
    borderWidth: 1,
  }
});
