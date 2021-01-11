import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredTask, setEnteredTask] = useState('')
  const [tasks, setTasks] = useState([])

  const taskInputhandler = (enteredText)=>{
    setEnteredTask(enteredText);
  }
  // Create and save a task
  const addTask = () => {
                                                // Add enteredTask to tasks
    setTasks(currentTasks => [...currentTasks, enteredTask])
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          placeholder="Create a task"
          style={styles.placeHolder}
          onChangeText={taskInputhandler}
          value={enteredTask}
        />
        <Button
          style={styles.actionButton}
          title="Add task"
          onPress={addTask}
          />
      </View>
      <View style={styles.container}>
      </View>
      <View>
        {tasks.map((task) => <View style={styles.listItem}><Text key={task}>{task}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 300,
  },
  placeHolder: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
  },
  mainContainer: {
    padding: 50,
  },
  actionButton: {
    margin:10,
  },
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#3333',
    textAlign: 'center',
    width:300,
  }

});
