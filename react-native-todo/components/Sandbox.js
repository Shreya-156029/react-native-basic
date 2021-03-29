import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';
export default function SandBox()
{
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>

        </View>
    )
}
const styles=StyleSheet.create({
  container:{
      flex:1,
      paddingTop:40,
      backgroundColor:'#ddd',
      justifyContent:'space-between',
      flexDirection:'column'
  },
  boxOne:{
      backgroundColor:'violet',
      paddingTop:10
  },
  boxTwo:{
    backgroundColor:'gold',
    paddingTop:20
  },
  boxThree:{
    backgroundColor:'coral',
    paddingTop:30
  },
  boxFour:{
    backgroundColor:'skyblue',
    paddingTop:40
  }

}
);
