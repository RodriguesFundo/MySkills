import { 
    StyleSheet, 
    Text,
    TouchableOpacity } from "react-native";


export function Button(){
    return (
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.5}
            // onPress={handleAddNewSkill}
            >
            <Text style={styles.buttonText}>Add new</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    
    button:{
      backgroundColor: '#A370F7',
      alignItems: 'center', 
      padding: 15,
      borderRadius: 7,
      marginVertical: 10
    },
    buttonText:{
      color: '#FFF',
      fontSize: 17,
      fontWeight: 'bold'
    },
  });
  