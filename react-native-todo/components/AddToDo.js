import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default function AddToDo({submitHandler})
{
    const[text,setText]=useState('');
    const changeHandler=(val)=>{
       setText(val);
    }
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo..'
            onChangeText={changeHandler}
            ></TextInput>
            <Button onPress={()=>{
                     submitHandler(text)
            }} title='Add todo' color='coral'></Button>
        </View>
    )
}
const styles = StyleSheet.create(
  { input: {
           marginBottom:10,
           paddingHorizontal:8,
           paddingVertical:6,
           borderBottomWidth:1,
           borderBottomColor:'#ddd'

    }
}
)