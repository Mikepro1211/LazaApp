import React from 'react'
import { TouchableOpacity ,StyleSheet , Text} from 'react-native'

export default function SocialMediaButton(  {socialmedia ,title , onPress}) {
 
    if(socialmedia=== 'facebook'){
     return (
        <TouchableOpacity style={[ styles.button ,styles.facebook]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
     )
    }if(socialmedia==='twitter'){
        return(
            <TouchableOpacity style={[ styles.button ,styles.twitter]} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        )
    }if(      socialmedia==='google')
    {
        return(
        <TouchableOpacity style={[ styles.button ,styles.google]} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
        )
    } 
    if(socialmedia==='bottomBotton')
    {
        return(
            <TouchableOpacity style={styles.createAccount} onPress={onPress}>
            <Text  style={styles.createAccountText}>{title}</Text>
          </TouchableOpacity>
        )
    }
  
    }
const styles = StyleSheet.create({
   button:{
     padding: 30,
     borderRadius: 25 ,
     marginTop: 10
   },

    twitter:{
     backgroundColor: '#14171A'
    },

    facebook:{
        backgroundColor: '#4267B2',
       },

       google:{
            backgroundColor: '#db4a39'
       },
    title:{
        color: 'white',
        textAlign: 'center'

    },
    createAccount:{
        backgroundColor:'#9775FA',
        position: 'absolute',
        top: 700,
        width: "100%",
        padding: 25
      },
      createAccountText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,

      }
})