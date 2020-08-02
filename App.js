import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const [colors, setColors] = useState([]);
  const addColor = color => {
    const newColor = { id, color }
  }
  return (
    <>
      <StatusBar style="auto" />
      <ColorForm 
        onNewColor={newColor => Alert.alert(`TODO: add color ${newColor}`)} 
      />
      <FlatList 
        style={[styles.container, { backgroundColor }]} 
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton 
              key={item.id} 
              backgroundColor={item.color} 
              onPress={setBackgroundColor} 
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
})
