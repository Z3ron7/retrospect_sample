import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Dimensions} from 'react-native'
import { ThemedButton } from "react-native-really-awesome-button";
export default function Home({navigation}) {
  return (
    <View style={styles.container}>

      
        <View >
        <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
          onPress={() => navigation.navigate('Country History')}
        > Philippine History</ThemedButton>
        </View>
        <View >
        <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
          onPress={() => navigation.navigate('National Heroes')}
        > National Heroes</ThemedButton>
        </View>
        <View >
        <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
          onPress={() => navigation.navigate('Philippine Presidents')}
        > Philippine Presidents</ThemedButton>
        </View>
        <View >
        <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
          onPress={() => navigation.navigate('Colonization')}
        > Colonization</ThemedButton>
        </View>

        <View >
        <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
          onPress={() => navigation.navigate('CultureAndTradition')}
        > Culture And Tradition</ThemedButton>
        </View>
        
        <View >
        <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
          onPress={() => navigation.navigate('Famous Places')}
        > Famous Places</ThemedButton>
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
  },
  btn: {
    width: 250,
    margin: 10,
    backgroundColor: 'red'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#8b0000",
    borderRadius: 10,
    width: 250,
    height: 75,
    margin: 8,
    paddingVertical: 25,
    paddingHorizontal: 12,
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 90,
    shadowRadius: 3,
  },
  appButtonText: {
    fontSize: 18,
    color: "#ffebcd",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }


})
