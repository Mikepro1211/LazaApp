import React, {useState, useEffect} from "react";
import { useNavigation } from '@react-navigation/native';
import { View , Text,  StyleSheet , StatusBar, Pressable, TouchableOpacity, Alert, Button} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SocialMediaButton from "../Components/SocialMediaButton";
import {getAuth, FacebookAuthProvider, signInWithCredential} from 'firebase/auth'
import 'expo-dev-client';
import {firebase} from '../../config'
import {LoginManager, AccessToken} from 'react-native-fbsdk-next'
import auth from '@react-native-firebase/auth'



//google 
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";


export default function Login({navigation}){
  GoogleSignin.configure({
    webClientId: '444058057384-i6ei7oetg1o8mqi96pf3e7opbklljpql.apps.googleusercontent.com',
  })

  const [Googleinitializing, setGoogleInitializing] = useState(true)
  const [googleUser , setGoogleUser] = useState()

  //handle userGoogle StateChange
   function onAuthStateGoogleChanged (googleUser){
    setGoogleUser(googleUser);
    if(Googleinitializing) setGoogleInitializing (false)
   }

   useEffect(()=>{
    const subscriber = auth().onAuthStateChanged(onAuthStateGoogleChanged)
    return subscriber
   },[])

   const onGoogleButtonPress = async()=>{
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    const user_sign_in  = auth().signInWithCredential(googleCredential)
    user_sign_in.then((googleUser)=>{
      console.log("user", JSON.stringify(googleUser,null,2) )
      console.log("se Inicio sesion con exito")
      navigation.navigate('GoogleHome', {googleUser, GooglesignOut})
      
     
    })
    .catch((error)=>{
      console.log(error)
    })
   } 

   const GooglesignOut = async ()=>{
      try{
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          setGoogleUser(null)
          console.log(" Google Logout Completed")
      }catch (error){
           console.error(error)
      }
   }

   //if(initializingGoogle) return null
  //muestra la info para loguearese a google
   //if(!googleUser){
   //return(
    //  <View>
      //  <Text>Hola papu no estas logueado en google</Text>
        //<GoogleSigninButton
          // style={{width: 300 , height: 65}}
          // onPress={onGoogleButtonPress}
        ///>
      //</View>
    //)
   //}



 
 //facebook
  const [initializing , setInitializing] = useState(true);
  const [user , setUser] = useState();
//facebook
  //handle user state change  
   function onAuthStateChange(user){
    setUser(user)
    if(initializing) setInitializing(false);
   }
       useEffect(()=>{
         const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChange);
         return subscriber
       },[]);

       const signInWithFB =  async()=>{
        try{
          await LoginManager.logInWithPermissions(['public_profile','email']);
          const data = await AccessToken.getCurrentAccessToken();
          if(!data){
            return;
          }
          const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
          const auth = getAuth();
          const response = await signInWithCredential(auth, facebookCredential)
          console.log(response)
          navigation.navigate('Home',{user: response.user})
        } catch(e){
          console.log(e)
        }
       }

       const signOut = async ()=>{
          try {
            await firebase.auth().signOut();
          } catch( e){
            console.log(e)
          }
       }

        if(initializing) return null;
   
   
   
        //sino esta loguiado que muestre esto Facebook
       // if(!user){
         // return (
           // <View>
             // <Button title="Sign in with facebook" onPress={signInWithFB}/>
            //</View>
         // )
       // }

function holaPapu(){
  console.log("Hola papu")
}
      
        

    return(
        <SafeAreaView style={styles.container}>
        
        <View>
            <Text style={styles.text}>Let's get started</Text>
            <View style={styles.socialmediaContainer}>
            <SocialMediaButton socialmedia='google' title={'Google'} onPress={onGoogleButtonPress}/>
            
            <SocialMediaButton socialmedia='facebook' title={'Facebook'} onPress={signInWithFB} />
            <SocialMediaButton socialmedia='twitter' title={'Github'} onPress={GooglesignOut} />
            </View>
          <TouchableOpacity style={styles.pressable}onPress={()=>navigation.navigate("UserLogin")}>
            <Text style= {styles.pressableFont} >Already have an account? Sign in</Text>
          </TouchableOpacity>
         
        </View>
        <SocialMediaButton socialmedia='bottomBotton' title={'Create an Account'} onPress={()=>navigation.navigate("Register")}/>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
  container:{
        flex: 1,
        backgroundColor:'#E5E5E5'
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    position:  'absolute',
    top: 15,
    left: 90
    
  },
  socialmediaContainer
  :{
    width: '90%',
    position:'absolute',
    top:200,
    left:20,
    
  },
  pressable:{
    position: 'absolute',
    top: 620,
    left: 80,
    
  },
  pressableFont:{
    fontWeight: 'bold',
    

  },
  
  
})