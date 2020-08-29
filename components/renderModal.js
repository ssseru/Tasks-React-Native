import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Modal,
} from "react-native";
const RenderModal = (props) => {
  const [currentTask, setCurrentTask] = useState("");

  const taskInputHandler = (enteredText) => {
    setCurrentTask(enteredText);
  };

  const addTaskHandler = () => {
    props.onAddTask(currentTask);
    setCurrentTask("");
  };

  return (
    <Modal visible={props.isModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter new TASK below</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          onChangeText={taskInputHandler}
          value={currentTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addTaskHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "coral",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "60%",
  },
  heading: {
    fontSize: 30,
    alignSelf: "center",
    color: "gold",
  },
});

export default RenderModal;
