import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

function ColorButton({ backgroundColor, onPress = f => f }) {
  return (
      <TouchableHighlight style={styles.button}
        onPress={() => onPress(backgroundColor)}
        underlayColor='grey'
        >
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor }]}/>
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
      </TouchableHighlight>
  )
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor='red' onPress={setBackgroundColor}/>
      <ColorButton backgroundColor='green' onPress={setBackgroundColor}/>
      <ColorButton backgroundColor='blue' onPress={setBackgroundColor}/>
      <ColorButton backgroundColor='yellow' onPress={setBackgroundColor}/>
      <ColorButton backgroundColor='purple' onPress={setBackgroundColor}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)'
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',

  }
})
