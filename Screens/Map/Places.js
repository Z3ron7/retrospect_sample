import React from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";


export default function Places(props) {
  const {id, title, description, image} = props.route.params.val

  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ height: 300, width: 360 }}
        source= {{uri: image}} 
      ></Image>

      <Text style={styles.title}>
        {title}
      </Text>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          {description}
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
  title: {
    fontSize: 35,
          textAlign: "justify",
          fontWeight: 'bold',
          alignSelf: 'center',
          color: "blue",
  }
});
