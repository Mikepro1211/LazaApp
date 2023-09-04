import React, { useEffect } from 'react'
import { View , Text , Image, TouchableOpacity} from 'react-native'
import { GoogleSignin, GoogleSigninButton  } from "@react-native-google-signin/google-signin";



export default function GoogleHome({route , navigation}) {

  const {googleUser} = route.params
  useEffect(()=>{
    console.log("Detalles del usuario", googleUser)
  },[googleUser])
//**
 
 
//  const GooglesignOut = async ()=>{
  // try{
    //await GoogleSignin.revokeAccess()
   //await GoogleSignin.signOut();
   //setGoogleUser(null)
   //console.log("Google Logout Completed")
   //}catch(error){
    //console.error(error)
  // }
  //}
  return (
    <View>
      <Text>Iniciastes session con google</Text>
      <Text>Nombre {googleUser.additionalUserInfo.profile.name}</Text>
      <Image source={{uri: googleUser.additionalUserInfo.profile.picture}} style={{width: 100 , height: 100}}/>
      <Text>Correo {googleUser.additionalUserInfo.profile.email}</Text>
     <TouchableOpacity onPress={()=>{}}>
        <Text>Sign Out</Text>

      </TouchableOpacity>
  </View>
  )
}
