import { View , Text,  StyleSheet , StatusBar, Pressable, TouchableOpacity} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SocialMediaButton from "../Components/SocialMediaButton";
export default function Login({navigation}){
    return(
        <SafeAreaView style={styles.container}>
        
        <View>
            <Text style={styles.text}>Let's get started</Text>
            <View style={styles.socialmediaContainer}>
            <SocialMediaButton socialmedia='google' title={'Google'}/>
            <SocialMediaButton socialmedia='facebook' title={'Facebook'} />
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