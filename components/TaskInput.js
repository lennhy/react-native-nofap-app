import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const TaskInput = props => {
  const [enteredTask, setEnteredTask] = useState('')

  const taskInputhandler = enteredText => {
    setEnteredTask(enteredText);
  }

  return (
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
              onPress={props.onAddTask.bind(this, enteredTask)}
              />
          </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: 300
  },
  placeHolder: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10
  },

  actionButton: {
    margin:10
  }
})


export default TaskInput;
