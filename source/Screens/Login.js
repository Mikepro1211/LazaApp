import { useState, useEffect } from "react";
import { View , Text,  StyleSheet , StatusBar, Pressable, TouchableOpacity, Image} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SocialMediaButton from "../Components/SocialMediaButton";
import * as Facebook from 'expo-auth-session/providers/facebook'
import * as WebBrowser from 'expo-web-browser'

WebBrowser.maybeCompleteAuthSession();

export default function Login({navigation}){

  const [user , setUser] = useState(null);
  const [request , response,propmtAsync] = Facebook.useAuthRequest({
    clientId: "671641438216089",

  });
   


  useEffect(()=>{
    if(response && response.type ==="success" && response.authentication){
      (async ()=>{
        const userInfoResponse = await fetch(
          `https://graph.faceboook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`

        );
        const userInfo = await userInfoResponse.json()
        setUser(userInfo)
      })();
    }
  },{response})

  const handlePressAsync = async ()=>{
    const result = await propmtAsync()
    if(result.type !=="success"){
      alert("Something went wrong")
       return;
    }
}

  function  Profile ({user})
{
  return(
    <View>
      <Image source={{uri: user.picture.data.url}}/>
      <Text>{user.name}</Text>
      <Text>{user.id}</Text>
    </View>
  )
}

    return(
        <SafeAreaView style={styles.container}>
        
        <View>
          
            <Text style={styles.text}>Let's get started</Text>
            <View style={styles.socialmediaContainer}>
            <SocialMediaButton socialmedia='google' title={'Google'}/>
            <SocialMediaButton socialmedia='facebook' title={'Facebook'}onPress={handlePressAsync} />
            <SocialMediaButton socialmedia='twitter' title={'Github'} />
            
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