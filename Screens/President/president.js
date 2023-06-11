import React from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";


export default function Rizal(props) {
  const {id,fullname,description, contribution, image, term} = props.route.params.item

  return (
    <ScrollView style={styles.container}>
      <Image resizeMode='contain'
        style={{ height: 300, width: 360, margin: 4 }}
        source= {{uri: image}} 
      ></Image>

      <Text
        style={{
          fontSize: 35,
          textAlign: "justify",
          fontWeight: 'bold',
          alignSelf: 'center',
          color: "blue",
        }}>
        {fullname}
      </Text>
      <Text style={{ fontSize: 15, textAlign: 'center' }}>
        {term}
      </Text>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          {description}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15, fontWeight: 'bold' }}>Contribution and Achievements of {fullname}:</Text>
        <Text style={{ fontSize: 18, textAlign: "justify", margin: 15 }}>
          {contribution}
        </Text>
      </View>
     
    </ScrollView>
  );
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
