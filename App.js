import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './source/NavigationContainer/Navigation';
export default function App() {

  return (
   <NavigationContainer>
    <Navigation/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9775FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: '100%',
    height:'90%',
    marginTop:100,
    marginLeft:70,
    position:'absolute'
  },
  
 
});
