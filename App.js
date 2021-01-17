import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [tasks, setTasks] = useState([])

  // Create and save a task
  var counter =1;
  const addTaskHandler = taskTitle => {
    // Add enteredTask to tasks
    setTasks(currentTaskTitle => [
      ...currentTaskTitle,
      { key: counter.toString(), value: taskTitle }
    ]);
    counter+=1
  }

  return (
      <ScrollView style={styles.mainContainer}>
        <TaskInput onAddTask={addTaskHandler}></TaskInput>
        <FlatList
          data={tasks}
          renderItem={itemData => <TaskItem title={itemData.item.value} />}
          />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50
  }

});
