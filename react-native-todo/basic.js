import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default function App() {
  const [name,setName]=useState('shreya');
  const [age,setAge]=useState(15);
  const [people,setPeople]=useState([{name:'shreya',key:'1'},
  {name:'sffff',key:'2'},
  {name:'qwee',key:'3'}]);
  const pressHandler=(key)=>{
    setPeople((prevPeople)=>{
      return prevPeople.filter(person=>person.key!=key);
    })
  }
  const onclickHandler=()=>{
    if(name=='shreya')
    setName('sarvesh');
    if(name=='sarvesh')
    setName('shreya');
}
  return (
    <View style={styles.container}>
    <View style={styles.header}>
     
    <Text style={styles.boldText}>Enter name</Text>
      <TextInput style={styles.input} placeholder='enter name' onChangeText={(val)=>setName(val)}/>
      <Text style={styles.boldText}>Enter age</Text>
      <TextInput multiline keyboardType='numeric' style={styles.input} placeholder='enter age' onChangeText={(val)=>setAge(val)}/>
      </View>
      <Text>{name} and {age}</Text>
      <View style={styles.buttonContainer}>
      <Button title="Click me" onPress={onclickHandler}></Button>
      <Text style={styles.boldText}>{name}</Text>
      
      </View>
     
      {
        people.map((item)=>{
          return(
        <View key={item.key} style={styles.item}>
      
        <Text>{item.name}</Text>
        
       </View>)
      })}

    <FlatList

      data={people}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}

      
    />

   
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink'
  },
  boldText:{
    fontWeight:'bold'
  },
  buttonContainer:{
    backgroundColor:'yellow'
  },
  input:{
    borderWidth:1,
    borderColor:"black",
    padding:8,
    margin:10,
    width:200

  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24
  }
});
