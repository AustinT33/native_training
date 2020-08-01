import React from 'react';
import { 
  Text,
  View, 
  ActivityIndicator, 
  ProgressViewIOS, 
  ProgressBarAndroid,
  Button,
  Alert, 
  Dimensions,
  Platform,
} from 'react-native';

const { height, width } = Dimensions.get('window');

export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  }
  return (
    <View style={{ padding: 50 }}>
      {Platform.OS === 'ios' && <ProgressViewIOS progress={0.5}/>}
      {Platform.OS === 'android' && (
        <ProgressBarAndroid 
          progress={0.5}
          styleAttr='Horizontal'
          indeterminate={false}
          color={blue}
        />
      )}
      <ActivityIndicator size='large' color='#61DBFB'/>
      <Button title='click me' onPress={onButtonPress} />
      <Text>OS: {Platform.OS}</Text>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
    </View>
  );
}

