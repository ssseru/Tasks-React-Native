import { StatusBar } from "expo-status-bar";
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
import RenderListItem from "./components/renderListItem";
import RenderModal from "./components/renderModal";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const buttonOnPress = (currentTask) => {
    setTaskList((taskList) => [
      ...taskList,
      { id: Math.random().toString(), value: currentTask },
    ]);
    setIsModal(false);
  };

  const removeTask = (goalId) => {
    setTaskList((currentTasks) => {
      return taskList.filter((task) => task.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsModal(false);
  };

  return (
    <View style={styles.root}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>ToDo Tasks</Text>
      </View>
      <Button
        title="Add a new task!!!"
        color="green"
        onPress={() => setIsModal(true)}
        style={styles.button}
      />
      <RenderModal
        isModal={isModal}
        onAddTask={buttonOnPress}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={(itemData) => (
          <RenderListItem
            id={itemData.item.id}
            title={itemData.item.value}
            removeTask={removeTask}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 40,
    flex: 1,
    backgroundColor: "lightblue",
  },
  headingContainer: {
    paddingVertical: 30,
  },
  heading: {
    fontSize: 30,
    alignSelf: "center",
    color: "gold",
  },
  button: {
    justifyContent: "center",
  },
});
