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

export default function Spanish() {
  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ height: 200, width: 360 }}
        source={require("../Image/Spanish.jpg")}
      ></Image>

      <Text
        style={{
          fontSize: 30,
          textAlign: "justify",
          margin: 20,
          alignSelf: "center",
          color: "blue",
        }}
      >
        {" "}
        PRE - SPANISH TIME
      </Text>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          There are two theories on the origins of the first Filipinos, the
          inhabitants of what will later be called the Philippine Islands and
          eventually the Republic of the Philippines. See the Early Inhabitants
          of the Philippine Islands. In the beginning of the 3rd century, the
          inhabitants of Luzon island were in contact and trading with East
          Asian sea-farers and merchants including the Chinese. In the 1400's
          the Japanese also established a trading post at Aparri in Northern
          Luzon.
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={{ height: 200, width: 360 }}
        source={require("../Image/muslim.jpg")}
      ></Image>
      
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          In 1380, Muslim Arabs arrived at the Sulu Archipelago and established
          settlements which became mini-states ruled by a Datu. They introduced
          Islam in the southern parts of the archipelago including some parts of
          Luzon and were under the control of the Muslim sultans of Borneo. They
          had a significant influence over the region for a couple of hundreds
          years. The Malay Muslims remained dominant in these parts until the
          16th century.
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={{ height: 200, width: 360 }}
        source={require("../Image/magellan.jpg")}
      ></Image>
      <Text
        style={{
          fontSize: 25,
          textAlign: "justify",
          margin: 20,
          alignSelf: "center",
          color: "blue",
        }}
      >
        {" "}
        SPANISH COLONIAL TIMES
      </Text>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          In 1521, Ferdinand Magellan, a Portuguese explorer who was serving the
          Spanish crown, landed in Samar Island on his voyage to circumvent the
          globe. He explored the islands and named it Archipelago of San Lazaro.
          Magellan was killed during a rebellion led by a Datu named Lapu Lapu
          in Mactan Island (adjacent to Cebu Island). Spain continued to send
          expeditions to the island for financial gain and on the fourth
          expedition, Commander Ruy Lopez de Villalobos, named the islands:
          Philippines, after Prince Philip (later King Philip II), heir to the
          Spanish throne. Spain ruled the Philippines for 356 years.
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={{ height: 200, width: 360 }}
        source={require("../Image/lopez.jpg")}
      ></Image>
      <Text
        style={{
          fontSize: 15,
          textAlign: "justify",
          margin: 20,
          alignSelf: "center",
          color: "blue",
        }}
      >
        {" "}
        Miguel Lopez de Legazpi
      </Text>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          In 1565, King Philip II appointed Miguel Lopez de Legazpi as the first
          Governor-General of the Philippines. Legazpi chose Manila to be it's
          capital because of it's natural harbor. Spain's legacy was the
          conversion of the people to Catholicism and the creation of the
          privileged landed class. Because of abuses and suppression of the
          Spaniards, a Propaganda Movement emerged with the aims for equality
          between Filipinos and Spaniards. The arrest of propagandist Dr. Jose
          Rizal and execution in 1896 gave fresh momentum to Filipino rebels to
          fight against Spain.
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={{ height: 200, width: 360 }}
        source={require("../Image/kkk.webp")}
      ></Image>
      <Text
        style={{
          fontSize: 15,
          textAlign: "justify",
          margin: 20,
          alignSelf: "center",
          color: "blue",
        }}
      >
        Kataas-taasang, Kagalang-galangang Katipunan ng mga Anak ng Bayan
      </Text>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          The secret society of the Katipunan, founded by Andres Bonifacio
          attacked the Spanish Garrison in San Juan with little success, while
          Katipuneros in Cavite Province headed by Emilio Aguinaldo defeated the
          Guardia Civil in Cavite. Aguinaldo's victories lead him to be elected
          as head of the Katipunan. The factions of Bonifacio & Aguinaldo fought
          and lead to the trial and execution of Bonifacio on Aguinaldo's
          orders. Aguinaldo later drafted a constitution and established the
          Republic of Biak-na-Bato in Bulacan province. In 1897, an impasse
          between the Spanish government and Aguinaldo arose. After negotiations
          between the two sides, Aguinaldo accepted an amnesty from the
          Spaniards and US$ 800,000.00 in exchange for his exile to Hong Kong
          with his government.
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
