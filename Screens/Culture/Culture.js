import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";

export default function Culture(props) {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const url = "http://localhost/Panilaga0/api/get1.php";

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
                
      <View style={{ alignItems: 'center', marginTop: 10, flex:1}}>
        <Image source={{uri: item.image}}  style={{width:300, height:300,borderRadius:10}} />
        <Text style={{fontWeight:"bold", textAlign: 'justify', fontSize: 20 }}>{item.title}</Text>
        <Text style={{ fontSize: 16, textAlign: "justify", margin: 15 }}>{item.description}</Text>
      </View>
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
    backgroundColor: '#ffebcd',
  },
  loginbtn: {
    margin: 10,
    padding: 10,
  },
});
