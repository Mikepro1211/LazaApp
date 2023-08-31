import React from 'react'
import { useState } from 'react'
import {View, StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-paper'
import SocialMediaButton from '../Components/SocialMediaButton'

export default function UserLogin({navigation}) {
    const [userName, setUsername]= useState("")
    const [securePassword , setSecurePassword] = useState(true)
  return (
  <View style= {styles.container}>
   <Text style={styles.text}>Welcome</Text>
   <Text style={styles.textData}>Please enter your datato continue</Text>
   <TextInput style={styles.inputForm}
    label="UserName"
    value={userName}
    onChange={userName => setUsername(userName)}
   />
   <TextInput style={styles.inputForm}
   label="Passsword"
   secureTextEntry= {securePassword}
   right={
    <TextInput.Icon style={styles.eyeIcon}
     icon="eye"
     onPress={()=>setSecurePassword(!securePassword)}
     />
   }
   />
   <TouchableOpacity style={styles.forgotPassword} onPress={()=>{navigation.navigate("Forget")}}>
    <Text style={[styles.forgotPasswordText]}>Forgot password?</Text>
   </TouchableOpacity>
   
   <SocialMediaButton socialmedia="bottomBotton" title="Login" onPress={()=> navigation.navigate("Home")}/>
  </View>
  )
}


const  styles = StyleSheet.create({
    container:{
        flex : 1 , 
        backgroundColor: '#E5E5E5'
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        position:  'absolute',
        top: 32,
        left: 140
        
      },
      textData:{
        fontSize: 14,
        position:'absolute',
        top: 75,
        left: 80,
        padding: 16
      },
      inputForm:{
        backgroundColor:'#E5E5E5',
            position:'relative',
            top: 200,
            marginLeft: 25,
            marginRight: 25,
            padding: 10
      },
      eyeIcon:{
        position: 'absolute',
        top: 10
      },
      forgotPassword:{
          position: 'relative',
          top: 300,
          left: 250
          
      },
      forgotPasswordText:{
        color : '#EA4335',
        fontWeight: 'bold',
      }
})