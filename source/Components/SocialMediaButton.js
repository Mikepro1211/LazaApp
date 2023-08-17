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
            <TouchableOpacity style={[ styles.button ,styles.twitter]}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        )
    }if(
        socialmedia==='google'
    ){
        
    }
  
    }
const styles = StyleSheet.create({
   button:{
     padding: 30,
     borderRadius: 40
   },

    twitter:{
     backgroundColor: 'blue'
    },

    facebook:{
        backgroundColor: '#4267B2',
       },
    title:{
        color: 'white',
        textAlign: 'center'

    }
})