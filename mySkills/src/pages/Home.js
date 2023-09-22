import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TextInput, 
  Platform,
  TouchableOpacity,
  FlatList
 } 
  from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

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
          onChangeText={setNewSkill}
        /> 
      
      <Button onPress={handleAddNewSkill} />

      <View>

        <Text style={[styles.title, {marginVertical: 40}]}>My Skills</Text>
      
      <FlatList
        data={mySkills}
        keyExtractor={item => item} // Use the skill itself as the key
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />



      </View>
      <StatusBar style="light" />
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
  }
});
