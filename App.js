import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image, Alert} from 'react-native';
import ViewInicial from './source/Screens/ViewInicial';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
      source= {require('./assets/boyContainer.png')}/>
      <ViewInicial title={'Look Good, Feel Good'} subtitle={'create you individual & unique style'}  subtittledos={'look amazing every day'} />
    </View>
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
