import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TextInput, 
  Platform,
  TouchableOpacity
 } 
  from 'react-native';

export function Home() {

  const [yourName, setYourName] = useState('Rodrigues'); //Change your name here
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  // Function to add a new skill to the list of skills
  function handleAddNewSkill(){
    //setMySkills(oldState => [mySkills, newSkill]); or
    setMySkills(oldState => [...oldState, newSkill]); // Append the new skill to the existing list of skills
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem vindo, {yourName}</Text>
      <TextInput 
        style={styles.input} 
        placeholder='New Skill' 
        placeholderTextColor='#666'
        onChangeText={setNewSkill}/> 
      
      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.5}
        onPress={handleAddNewSkill}>
          <Text style={styles.buttonText}>Add new</Text>
      </TouchableOpacity>

      <View>

        <Text style={[styles.title, {marginVertical: 40}]}>My Skills</Text>
        {
          // Map through each skill in the mySkills array and create a stylized button (TouchableOpacity) for each skill.
          mySkills.map(skill => (
            // The "key" prop is used to provide a unique identifier for each element in the array of components.
            // It helps React efficiently update and manage the list of components.
            // In this case, we use the skill itself as the key since each skill is assumed to be unique.
            <TouchableOpacity key={skill} style={styles.buttonSkill}>
              <Text style={styles.textSkill}>{skill}</Text>
            </TouchableOpacity>
          ))
        }


      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical:70,    
    
  }, title:{
    color:'white', 
    fontSize: 24, 
    fontWeight: 'bold'
  }, input:{
      backgroundColor: '#1F1E25',
      color: '#fff',
      padding: Platform.OS==='ios' ? 10 : 15 ,
      fontSize: 20, 
      marginVertical: 30, 
      borderRadius: Platform.OS==='android' ? 10: 7
  },
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
