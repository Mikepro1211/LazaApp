import { View , StyleSheet, TouchableOpacity,Text} from "react-native";
export default function ButtonFView({theme, label, onPress}){
 
    if(theme==="purple"){
    return(
            <TouchableOpacity
             style={[styles.buttonContainer,{backgroundColor:'#9775FA'}]}
             onPress={onPress}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </TouchableOpacity>
        
    )
 }
 return(
        <TouchableOpacity  style={[styles.buttonContainer,{backgroundColor:'#F5F6FA'}]} onPress={onPress}>
            <Text style={[styles.buttonLabel,{color:'black'}]}>{label}</Text>
        </TouchableOpacity>
 )
}

const styles =StyleSheet.create({
    buttonWhite:{
             color: 'red'
    },
    buttonContainer:{
        borderRadius:10,
        width: '50%',
        height: 68,
        marginHorizontal: 20,
        alignItems:'center',
        justifyContent:'center',
        padding: 3
    },
    button:{
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row'
    },
    buttonIcon:{
        paddingRight: 8,
    },
    buttonLabel:{
        color: '#fff',
        fontSize: 16
    }
})