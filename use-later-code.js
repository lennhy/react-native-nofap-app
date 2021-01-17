const [count, newCount] = useState(0)
return (
  <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Text>Relpase {count} times</Text>
      <StatusBar style="auto" />
      <Button title="Relapsed" onPress={() => newCount(count+1)}/>
      <Button title="Reset" onPress={() => newCount(0)}/>
    </View>
  </View>
