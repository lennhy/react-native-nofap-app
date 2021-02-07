import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = props => {
  return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
          <View style={styles.listItem}>
            <Text>{props.title}</Text>
          </View>
        </TouchableOpacity>
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
