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

export default function USA() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={{ height: 200, width: 360 }}
        source={require("../Image/USA.jpg")}
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
          The Spanish-American war which started in Cuba, changed the history of
          the Philippines. On May 1, 1898, the Americans led by U.S. Navy
          Admiral George Dewey, in participation of Emilio Aguinaldo, attacked
          the Spanish Navy in Manila Bay. Faced with defeat, the Philippines was
          ceded to the United States by Spain in 1898 after a payment of US$ 20
          million to Spain in accordance with the "Treaty of Paris" ending the
          Spanish-American War.
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={{ height: 250, width: 360 }}
        source={require("../Image/emilios.webp")}
      ></Image>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          On June 12, 1898, Filipinos led by Emilio Aguinaldo declared
          independence. This declaration was opposed by the U.S. who had plans
          of taking over the colony. And this led to a guerrilla war against the
          Americans. In 1901, Aguinaldo was captured and declared allegiance to
          the United States. On the same year, William Howard Taft was appointed
          as the first U.S. governor of the Philippines.
        </Text>
      </View>
      <Image
        style={{ height: 200, width: 360 }}
        source={require("../Image/an.webp")}
      ></Image>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          The U.S. passed the Jones Law in 1916 establishing an elected Filipino
          legislature with a House of representatives & Senate. In 1934, the
          Tydings-McDuffie Act was passed by the U.S. Congress, established the
          Commonwealth of the Philippines and promised Philippine independence
          by 1946. The law also provided for the position of President of the
          Commonwealth of the Philippines. On the May 14, 1935 elections, Manuel
          L. Quezon won the position of President of the Philippine
          Commonwealth.
        </Text>
      </View>
      <Image
        style={{ height: 200, width: 360 }}
        source={require("../Image/ind.jpg")}
      ></Image>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          In accordance with the Tydings-McDuffie Act of 1934, The Philippines
          was given independence on July 4, 1946 and the Republic of the
          Philippines was born.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffebcd",
  },
  loginbtn: {
    margin: 10,
    padding: 10,
  },
});
