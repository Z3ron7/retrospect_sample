import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={{ alignSelf: "center", height: 280, width: 360 }}
        source={require("./Image/logooo.jpg")}
      ></Image>
      <View
        style={{
          backgroundColor: "black",
          borderWidth: 1,
          borderColor: 'red',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            textAlign: "justify",
            margin: 20,

            alignSelf: "center",
            color: "red",
          }}
        >
          {" "}
          About App
        </Text>
        <View>
          <Text style={styles.text}>
            PH Retrospect is an application where it has the ability to give its
            users an access to the past by reading. It will also help them to
            refresh their learning and to be aware about Philippine history by
            giving them knowledge and by providing them a detailed and brief
            description about the histories that are provided in this
            application.
          </Text>
          <Text style={styles.text}>
            In addition for that, our application contains several
            types of buttons where users are free to click and choose from and
            it will navigate them to their desired chosen option. Basically, our
            application has six categories namely: Country History, National
            Heroes, Philippine Presidents, Colonization, Culture & Tradition,
            and Famous Places.
          </Text>
          <Text style={styles.text}>
            The function of these mentioned categories is
            that, once clicked, it will display or provide users a text, images,
            descriptions, etc ... based on the user's selection choice. The
            design or the user interface of our application will not be a
            problem for first-timers since it contains a user-friendly interface
            that allows users to easily understand and use the application.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  loginbtn: {
    margin: 10,
    padding: 10,
  },
  text: {
    color: 'white' , 
    marginBottom:20, 
    fontSize: 17, 
    textAlign: "justify", 
    marginLeft: 15, 
    marginRight: 15 
  }
});
