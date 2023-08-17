
import * as React from 'react';
import {View, StyleSheet, Text , Image, TouchableHighlight , Pressable , StatusBar} from 'react-native'
import ButtonFView from '../Components/ButtonFView' 
export default function ViewInicial ({navigation}){
  return(
  <View style={styles.screen}>
    <StatusBar style="auto"/>
  <View style={styles.container}>

    <Text style={styles.titulo}>Look Good, Feel Good</Text>
    <Text style={styles.subtitle}>create you individual & unique style</Text>
    <Text style={styles.subtitledos}>'look amazing every day'</Text>
   <View style={styles.buttonContainer}>
   <ButtonFView style={styles.SecondButton}  label="men" onPress={()=>navigation.navigate("Inicio")}/>
   <ButtonFView style={styles.SecondButton} theme="purple" label="women" onPress={()=>navigation.navigate("Inicio")}/>
   <Pressable style={styles.skip} onPress={()=>navigation.navigate("Inicio")}>
    <Text>Skip</Text>
   </Pressable>
   </View>
   
   </View>
   </View>
   
  )
}
const styles = StyleSheet.create({
  image:{
    width: '100%',
    height:'90%',
    marginTop:100,
    marginLeft:70,
    position:'absolute'
  },
  screen:{
    flex: 1,
    backgroundColor: '#9775FA',
    alignItems: 'center',
    justifyContent: 'center',
   },
   container:{
    width:'95%',
    paddingTop:'66%',
    backgroundColor: 'white',
    position:'absolute',
    top:550,
    borderRadius: 35,
    
   },
   titulo:{
    fontSize: 30,
    fontWeight:'bold',
    position: 'absolute',
    left: 34,
    top:12
    
   },
   subtitle:{
    color: '#8F959E',
    fontSize: 17, 
    position: 'absolute',
    top:  60,
    left:  50

   },
   subtitledos:{
    color:'#8F959E',
    fontSize: 17,
    position: 'absolute',
    top:  90,
    left: 90
   },
   touchable:{
    backgroundColor:'red'
    
   },

   buttonContainer:{
    flex: 1 ,
    flexDirection:'row',
    
    width: 300,
    height:100,
    position:'absolute',
    top: 125
    
   },
   skip:{
    position:'absolute',
    left:170,
    top: 100
   }
  
})