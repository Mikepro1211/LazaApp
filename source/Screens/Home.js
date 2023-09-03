import React from 'react'
import { View , Text , Image, Button} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getAuth, setPersistence, signOut, Auth, Persistence } from 'firebase/auth';
import {firebase} from '../../config'

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

  const route =useRoute();
  const user =route.params.user
  const navigation = useNavigation()
  const auth = getAuth()
  
  const handleSignOut = async () => {
    try {
      
      await signOut(auth);
      await AsyncStorage.removeItem('userData')
      // Cierra la sesión utilizando la instancia de autenticación
      // Navega de vuelta a la pantalla de inicio de sesión u otra pantalla que prefieras
      navigation.navigate("Inicio");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };

  const signOut = async ()=>{
    try {
      await firebase.auth().signOut();
    } catch( e){
      console.log(e)
    }
 }
  return (
    <View>
      <Text>Welcome to home Screen</Text>
            {user && (
            <><Text> Hello, {user.displayName}!</Text>
            {user.photoURL && <Image source={{uri: user.photoURL}}style={{ width: 100, height: 100 }}/>}
            <Button title="Sign Out" onPress={handleSignOut} />
            </>
  )}
    </View>
  )
}
