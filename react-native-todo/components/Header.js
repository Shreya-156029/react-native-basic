import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput,ScrollView,FlatList,TouchableOpacity } from 'react-native';
export default function Header()
{
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>

        </View>
    )
}
const styles=StyleSheet.create({
   header:{
       height:80,
       paddingTop:38,
       backgroundColor:'coral'
   },
   title:{
       textAlign:'center',
       color:'#FFF',
       fontSize:20,
       fontWeight:'bold'
   }
}
);
