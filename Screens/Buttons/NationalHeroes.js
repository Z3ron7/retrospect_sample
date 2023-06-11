import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ThemedButton } from "react-native-really-awesome-button";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function NationalHeroes({navigation}) {

  //   return (
    
  //   <View style={styles.container}>
      
  //       <View >
  //       <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
  //         onPress={() => navigation.navigate('Heroes')}
  //       > Jose Rizal</ThemedButton>
  //       </View>
  //       <View >
  //       <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
  //         onPress={() => navigation.navigate('Gregorio del Pilar')}
  //       > Gregorio “Goyo” del Pilar</ThemedButton>
  //       </View>
  //       <View >
  //       <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
  //         onPress={() => navigation.navigate('Andres Bonifacio')}
  //       > Andres Bonifacio</ThemedButton>
  //       </View>
  //       <View >
  //       <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
  //         onPress={() => navigation.navigate('Antonio Luna')}
  //       > Antonio Luna</ThemedButton>
  //       </View>
  //       <View >
  //       <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
  //         onPress={() => navigation.navigate('Gabriela Silang')}
  //       > Gabriela Silang</ThemedButton>
  //       </View>
  //   </View>
  // )
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "http://192.168.43.46/Panilaga0/api/get3.php";

  useEffect(() =>{
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  },[])
  
  return (
    <View style={styles.container}>
      {
        loading ? <Text style={{flex:1, fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>
          Loading ...</Text> : (
          data.map((item,index)=>(
            <View key={index} style={styles.listItem}>
      <ThemedButton name="bruce" type="secondary" style={styles.loginbtn}
       onPress={() => navigation.navigate('Heroes', {item})}
     ><Text>{item.name}</Text></ThemedButton>
      </View>
              
          ))
        )
      }
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebcd',
    justifyContent: 'center',

  },
  loginbtn: {
    margin: 10,
    alignSelf: 'center',
    padding: 10,
    width:225,
  }
})
