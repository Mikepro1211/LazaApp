import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, Image, View, KeyboardAvoidingView, ScrollView} from 'react-native'
import { TextInput } from 'react-native-paper'
import SocialMediaButton from '../Components/SocialMediaButton'
export default function ForgetPassword({navigation}) {

  const  [forgetUserEmail ,  setForgetUserEmailf] = useState("")
  return (
    
    <KeyboardAvoidingView styles={styles.containerKey} behavior='height'>
    <View style={styles.container}>
   
    <Text style={styles.text}>Forgot Password</Text>
     <Image style={styles.cloudImage} source={require('../../assets/cloud.png')}/>
    
     <TextInput style={styles.inputForm}
      label= "Email address"
      value={forgetUserEmail}
      onChange={forgetUserEmail=> setForgetUserEmailf(forgetUserEmail)}
      position="relative"
     

     />
   
    </View>
    </KeyboardAvoidingView>
   
  
  )
}
const styles = StyleSheet.create({
  containerKey:{
   flex: 1
  },
    container: { 
        flex: 1, 
        backgroundColor: '#E5E5E5'
    },
    text:{
         fontSize: 30,
         fontWeight: 'bold',
         position:  'absolute',
         top: 30,
         left: 90
          },
    cloudImage:{
        position:'absolute',
        top: 120,
        left: 40
          },

          inputForm:{
            position: 'relative',
            top: 400
          }
    
    
})