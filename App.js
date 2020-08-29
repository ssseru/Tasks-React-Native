import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import RenderListItem from "./components/renderListItem";

export default function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const buttonOnPress = () => {
    setTaskList((taskList) => [
      ...taskList,
      { id: Math.random().toString(), value: currentTask },
    ]);
  };

  const taskInputHandler = (enteredText) => {
    setCurrentTask(enteredText);
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Task"
          onChangeText={taskInputHandler}
          value={currentTask}
        />
        <Button title="ADD" onPress={buttonOnPress} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={(itemData) => (
          <RenderListItem title={itemData.item.value} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 40,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
  },
});
