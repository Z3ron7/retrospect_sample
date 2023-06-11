import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
  InsertRecord,
  Image,
  ScrollView,
} from "react-native";
import Awesome from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function CountryHistory() {
  return (
    <ScrollView style={styles.container}>
      <Image style={{height: 200, width: 360}} source={require('../Image/PhilippinesHistory.jpg')}/>

      <Text
        style={{
          fontSize: 35,
          textAlign: "justify",
          margin: 20,
          justifyContent: "center",
          color: 'blue'
        }}
      >
        {" "}
        Philippines History
      </Text>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          The Philippine archipelago was settled at least 30,000 years ago, when
          migrations from the Indonesian archipelago and elsewhere are believed
          to have occurred. Additional migrations took place over the next
          millennia. Over time, social and political organization developed and
          evolved in the widely scattered islands.
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          The basic unit of settlement was the barangay (a Malay word for boat
          that came to be used to denote a communal settlement). Kinship groups
          were led by a datu (chief), and within the barangay there were broad
          social divisions consisting of nobles, freemen, and dependent and
          landless agricultural workers and slaves. Over the centuries,
          Indo-Malay migrants were joined by Chinese traders.
        </Text>
      </View>
      <View>
      <Image style={{height: 200, width: 360}} source={require("../Image/islamHis.jpg")}></Image>
        <Text style={{fontSize: 20, textAlign: 'justify', margin: 15}}>
          A major development in the early period was the introduction of Islam
          to the Philippines by traders and proselytizers from the Indonesian
          islands. By A.D. 1500, Islam had been established in the Sulu
          Archipelago and spread from there to Mindanao; it reached the Manila
          area by 1565. In the midst of the introduction of Islam came the
          introduction of Christianity, with the arrival of the Spanish.
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
