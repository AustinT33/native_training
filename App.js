import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.button}
        onPress={ () => setBackgroundColor('green')}>Green</Text>
      <Text style={styles.button}
        onPress={ () => setBackgroundColor('red')}>Red</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
  },
})
