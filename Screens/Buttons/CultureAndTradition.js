import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions, TextInput, InsertRecord, Image } from 'react-native'
import Awesome from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer } from '@react-navigation/native'
import { ThemedButton } from "react-native-really-awesome-button";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CultureAndTradition({navigation}) {
  
  return (
    
    <View style={styles.container}>
        <View >
        <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
          onPress={() => navigation.navigate('Culture')}
        > Culture</ThemedButton>
        </View>
        <View >
        <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
          onPress={() => navigation.navigate('Tradition')}
        > Tradition</ThemedButton>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebcd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginbtn: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    width: 220,
  }
})
