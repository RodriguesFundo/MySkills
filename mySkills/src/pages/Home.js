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
  const [mySkills, setmySkills] = useState([]);

  //Function to add 
  
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
        activeOpacity={0.5}>
          <Text style={styles.buttonText}>Add new</Text>
      </TouchableOpacity>

      <View>
        <Text style={[styles.title, {marginTop: 5}]}>{newSkill}</Text>
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
  }
});
