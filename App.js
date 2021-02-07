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
import HeaderMenu from './components/HeaderMenu';

export default function App() {
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0)

  // Create and save a task
  const addTaskHandler = taskTitle => {
    // Add enteredTask to tasks
    setCount(count+1)

    setTasks(currentTaskTitles => [
      ...currentTaskTitles,
      { id: count.toString(), value: taskTitle }
    ]);
  }

  const removeTaskHandler = taskId => {
    setTasks(currentTaskTitles => {
      return currentTaskTitles.filter((task)=> task.id !==taskId )
    })
  }

  return (
    <View style={styles.screen}>
      <HeaderMenu title="MasterMind" />
      <ScrollView style={styles.mainContainer}>
        <TaskInput onAddTask={addTaskHandler}></TaskInput>
        <FlatList
          keyExtractor={(item, index)=> item.id}
          data={tasks}
          renderItem = { itemData => (
            <TaskItem
              id={itemData.item.id}
              onDelete={removeTaskHandler}
              title={itemData.item.value}
            />
          )}
        />
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50
  },
  screen: {
    flex: 1
  }

});
