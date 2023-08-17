import { TouchableOpacity ,StyleSheet, View, Pressable, Text} from "react-native";
export default function Button(theme , label , onPress){
    if(theme==="primary"){
        return(
            <View
            style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
            >
                <Pressable
                style={[styles.button,{backgroundColor: '#fff'}]}
                onPress={onPress}
                >
                <Text style={[styles.buttonLabel, {color: '#25292e'}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
    </View>
  )   
}
const styles = StyleSheet.create({
   
})                  