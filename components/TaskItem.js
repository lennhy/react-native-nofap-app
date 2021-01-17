import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = props => {
  return (
            <View style={styles.listItem}>
              <Text>{props.title}</Text>
            </View>
          )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#3333',
    textAlign: 'center',
    width:300
  }
})

export default TaskItem;
