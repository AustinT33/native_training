import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ColorButton from './components/ColorButton';

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
})
