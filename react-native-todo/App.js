import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView,FlatList,TouchableOpacity,Alert } from 'react-native';
import AddToDo from './components/AddToDo';
import Header from './components/Header'
import SandBox from './components/sandbox';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos,setTodos] = useState([
    {text:'drink tea',key:'1'},
    {text:'do coding',key:'2'},
    {text:'Exercise',key:'3'}
  ]);
  const pressHandler=(key)=>{
     setTodos((prevTodos)=>{
       return prevTodos.filter(todos=>todos.key!=key);

     });
    }
     const submitHandler = (text)=>{
       if(text.length>3)
       {
       setTodos((prevTodos)=>{
            return [
              {text:text,key:Math.random().toString()},
              ...prevTodos
            ]
       });
     
      }
     else{
      Alert.alert(
        "OOPS",
        "todo should be atleast 3 characters long",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
  
     }
     
  }
 return(
  
    <View style={styles.container}>
    {/*header*/}
    
    <Header/>
    <View style={styles.content}>
      {/*to form*/}
      {/* <SandBox/> */}
     <AddToDo submitHandler={submitHandler}/>
    {/*FlatList*/}
    <View style={styles.list}>
   
      <FlatList
      
      data={todos}
      renderItem={({item})=>(
      
        <TodoItem item={item} pressHandler={pressHandler}/>
       
      )}
      />
    </View>
    </View>

    </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    // backgroundColor:'pink',
    flex: 1,
    padding:40
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
  },
  list:{
    // backgroundColor:'violet',
    flex: 1,
    marginTop:20
  }
});
