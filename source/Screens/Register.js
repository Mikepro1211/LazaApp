import React from 'react'
import { useState } from 'react'
import{View, Text, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper'
import SocialMediaButton from '../Components/SocialMediaButton'

export default function Register({navigation}) {

     const [userName,setUsername] = useState("")
     const [userPassword , setUserPassword] = useState("")
     const [SecurityTextEntry, SetSecurityTextEnty] = useState(true)
     const [userEmailAddress , setUserEmailAddress] = useState("")
     
  return (
        <View style={styles.container}>
            <Text style={styles.text}>Sing Up</Text>
            <TextInput style={styles.inputItems}
            label="Username"
            value={userName}
            onChangeText={userName=>setUsername(userName)}
            />
            <TextInput style={styles.inputItems}
            label="Password"
            secureTextEntry= {SecurityTextEntry}
            value={userPassword}
            onChangeText={userPassword=>setUserPassword(userPassword)}
            right={
                <TextInput.Icon style={styles.eyeIcon}
                icon="eye"
                onPress={() => {
                    SetSecurityTextEnty(!SecurityTextEntry)
                  }}
                />
            }/>
        <TextInput style={styles.inputItems}
          label="Email Address"
          value={userEmailAddress}
          onChangeText={userEmailAddress=>setUserEmailAddress(userEmailAddress)}
         />
         <SocialMediaButton socialmedia={"bottomBotton"} title="Sign Up"/>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#E5E5E5'
    },
    inputItems:{
            backgroundColor:'#E5E5E5',
            position:'relative',
            top: 150,
            marginLeft: 25,
            marginRight: 25,
            padding: 10
            
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        position:  'absolute',
        top: 32,
        left: 150
        
      },

      eyeIcon:{
        position: 'absolute',
        top: 10
      }

})