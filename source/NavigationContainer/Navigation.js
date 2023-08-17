import * as React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewInicial from '../Screens/ViewInicial';
import Started from '../Screens/Login';

import Login from '../Screens/Login';
const Stack = createNativeStackNavigator();


export default function Navigation(){
    return(
    
       <Stack.Navigator > 
        <Stack.Screen name='View_inicial' component={ViewInicial} options={{headerShown: false}}/>
        <Stack.Screen name='Inicio' component={Login}  options={{ title:'' ,headerStyle:{
          backgroundColor: '#E5E5E5', headerShown: false
        }, headerTintColor:'black', headerShadowVisible: false ,}} />
       </Stack.Navigator>
    
      
    )
}

const styles = StyleSheet.create({
  

})
/**
 * 
 * options={{headerStyle:{backgroundColor: '#E5E5E5'}, headerTintColor:'black', headerShadowVisible: false , }}
 */