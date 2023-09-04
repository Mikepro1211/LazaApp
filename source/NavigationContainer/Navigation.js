import * as React from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewInicial from '../Screens/ViewInicial';
import Started from '../Screens/Login';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
import UserLogin from '../Screens/UserLogin';
import ForgetPassword from '../Screens/ForgetPassword';
import Home from '../Screens/Home';
import GoogleHome from '../Screens/GoogleHome';
const Stack = createNativeStackNavigator();


export default function Navigation(){
    return(
    
       <Stack.Navigator  > 
        <Stack.Group>
        <Stack.Screen name='View_inicial' component={ViewInicial} options={{headerShown: false}}/>
        <Stack.Screen name='Inicio' component={Login}  options={{ title:'' ,headerStyle:{
          backgroundColor: '#E5E5E5', headerShown: false
        }, headerTintColor:'black', headerShadowVisible: false ,}} />
        <Stack.Screen name='Register' component={Register} options={{ title:'' ,headerStyle:{
          backgroundColor: '#E5E5E5', headerShown: false
        }, headerTintColor:'black', headerShadowVisible: false ,}}/>
        <Stack.Screen name='UserLogin' component={UserLogin} options={{ title:'' ,headerStyle:{
          backgroundColor: '#E5E5E5', headerShown: false
        }, headerTintColor:'black', headerShadowVisible: false ,}} />
        <Stack.Screen name='Forget' component={ForgetPassword} options={{ title:'' ,headerStyle:{
          backgroundColor: '#E5E5E5', headerShown: false
        }, headerTintColor:'black', headerShadowVisible: false ,}} />
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='GoogleHome' component={GoogleHome}/>
        </Stack.Group>
        
          
        
       </Stack.Navigator>
    
      
    )
}

const styles = StyleSheet.create({
  

})
/**
 * 
 * options={{headerStyle:{backgroundColor: '#E5E5E5'}, headerTintColor:'black', headerShadowVisible: false , }}
 */