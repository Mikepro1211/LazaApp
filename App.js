import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image} from 'react-native';
import ViewInicial from './source/Components/ViewInicial';
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
      source= {require('./assets/boyContainer.png')}/>
      <ViewInicial title={'Hola Mikepro'}/>
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
