
import * as React from 'react';
import {View, StyleSheet, Text ,  TouchableOpacity, Alert } from 'react-native'
import ButtonFView from '../Components/ButtonFView'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Started from './Started'

const Stack = createNativeStackNavigator();

export default function ViewInicial ({title, subtitle ,subtittledos, navigation}){
  return(
  <View style={styles.container}>
    <Text style={styles.titulo}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <Text style={styles.subtitledos}>{subtittledos}</Text>
   <View style={styles.buttonContainer}>
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Started' component={Started}/>
      </Stack.Navigator>
     </NavigationContainer>

   <ButtonFView style={styles.SecondButton}  label="men" onPress={()=>{navigation.navigate('Started')}}/>
   <ButtonFView style={styles.SecondButton} theme="purple" label="women" />
   </View>
   
   </View>
   
  )
}

const styles = StyleSheet.create({
   container:{
    width:'95%',
    paddingTop:'60%',
    backgroundColor: 'white',
    marginTop:'125%',
    borderRadius: 35,
    
   },
   titulo:{
    fontSize: 30,
    fontWeight:'bold',
    position: 'absolute',
    left: 34,
    top:12
    
   },
   subtitle:{
    color: '#8F959E',
    fontSize: 17, 
    position: 'absolute',
    top:  60,
    left:  50

   },
   subtitledos:{
    color:'#8F959E',
    fontSize: 17,
    position: 'absolute',
    top:  90,
    left: 90
   },
   touchable:{
    backgroundColor:'red'
    
   },

   buttonContainer:{
    flex: 1 ,
    flexDirection:'row',
    
    width: 300,
    height:100,
    position:'absolute',
    top: 125
    
   }
  
})