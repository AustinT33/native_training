import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Text,
  View, 
  ActivityIndicator, 
  ProgressViewIOS, 
  ProgressBarAndroid,
  StyleSheet,
  Button,
  Alert, 
  Dimensions,
  Platform,
} from 'react-native';

// const { height, width } = Dimensions.get('window');

// export default function App() {
//   const onButtonPress = () => {
//     Alert.alert(`${new Date().toLocaleTimeString()} button press`);
//   }
//   return (
//     <View style={{ padding: 50 }}>
//       {Platform.OS === 'ios' && <ProgressViewIOS progress={0.5}/>}
//       {Platform.OS === 'android' && (
//         <ProgressBarAndroid 
//           progress={0.5}
//           styleAttr='Horizontal'
//           indeterminate={false}
//           color='blue'
//         />
//       )}
//       <ActivityIndicator size='large' color='#61DBFB'/>
//       <Button title='click me' onPress={onButtonPress} />
//       <Text>OS: {Platform.OS}</Text>
//       <Text>Width: {width}</Text>
//       <Text>Height: {height}</Text>
//     </View>
//   );
// }
export default function App() {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>red</Text>
      <Text style={styles.text}>green</Text>
      <Text style={styles.text}>blue</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40,
    backgroundColor: '#DDD'
  },
  text: {
    fontSize: 22,
    margin: 10
  }
})
