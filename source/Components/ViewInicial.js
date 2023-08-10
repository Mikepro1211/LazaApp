
import {View, StyleSheet, Text } from 'react-native'
export default function ViewInicial ({title, subtitle}){
  return(
  <View style={styles.container}>
    <Text style={styles.titulo}>{title}</Text>
    <Text>{}</Text>
    
   </View>
  )
}

const styles = StyleSheet.create({
   container:{
    width:'95%',
    paddingTop:'60%',
    backgroundColor: 'white',
    marginTop:'125%',
    borderRadius: 35,
    position: 'absolutes'
   },
   titulo:{
    fontSize: 40,
    fontWeight:'bold',
    
   },
})