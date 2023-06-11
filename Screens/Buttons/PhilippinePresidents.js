import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function PhilippinePresidents({navigation} ) {

  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const url = "http://192.168.43.46/Panilaga0/api/get.php";

    useEffect(() =>{
      fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
    },[])
    
    return (
      <ScrollView style={styles.container}>
        {
          loading ? <Text style={{flex:1, fontSize: 20, justifyContent: 'center', alignItems: 'center'}}>
            Loading ...</Text> : (
            data.map((item,index)=>(
              <View key={index} style={styles.listItem}>
                <Image source={{uri: item.image}}  style={{width:60, height:60,borderRadius:10}} />
      <View style={{ marginLeft: 15, marginTop: 10, flex:1}}>
        <Text style={{fontWeight:"bold"}}>{item.fullname}</Text>
        <Text>{item.title}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Presidents", {item})} 
      style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{ color: 'green', fontSize: 15 }}> View </Text>
      </TouchableOpacity>
                </View>
                
            ))
          )
        }
      </ScrollView>
    )

    
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:15,
  },
  listItem:{
    margin:5,
    padding:10,
    backgroundColor:"#FFF",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});