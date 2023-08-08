import { 
    StyleSheet, 
    Text,
    TouchableOpacity } from "react-native";

export function SkillCard(){

    retunr (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill:{
      backgroundColor: '#1F1E25',
      padding: 18,
      borderRadius: 40,
      alignItems: 'center',
      marginVertical: 10
    },
    textSkill:{
      color: '#FFF',
      fontSize: 20, 
      fontWeight: 'bold',
    }
  });
  