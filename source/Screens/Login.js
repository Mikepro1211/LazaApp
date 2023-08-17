import { View , Text,  StyleSheet , StatusBar} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SocialMediaButton from "../Components/SocialMediaButton";
export default function Login({navigation}){
    return(
        <SafeAreaView style={styles.container}>
        
        <View>
            <Text style={styles.text}>Sign Up</Text>
            <View style={styles.socialmediaContainer}>
            <SocialMediaButton socialmedia='facebook' title={'Facebook'} />
            <SocialMediaButton socialmedia='twitter' title={'twitter'} />
            </View>
           
        </View>
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
    top: 10,
    left: 140
    
  },
  socialmediaContainer
  :{
    width: '90%',
    position:'absolute',
    top:200,
    left:20,
    
  }
})