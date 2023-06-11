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

export default function Japan() {
  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMode="contain"
        style={{ margin: 3,height: 350, width: 360 }}
        source={require("../Image/Japan.webp")}
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
        JAPANESE OCCUPATION
      </Text>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          On December 8, 1941, the Japanese invades the Philippines hours after
          bombing Pear Harbor in Hawaii. While the forces of Gen. Douglas
          MacArthur retreated to Bataan, the Commonwealth government of
          President Quezon moved to Corregidor Island. Manila was declared an
          open city to prevent further destruction. After the fall of Bataan on
          April 9, 1942 and Corregidor, In March 1942, MacArthur & Quezon fled
          the country and by invitation of President Roosevelt, the Commonwealth
          government went into exile to Washington D.C. American and Filipino
          forces surrendered in May 6, 1942. Soon a guerrilla war against the
          Japanese was fought by the Philippine & American Armies while
          Filipinos were enduring the cruelty of the Japanese military against
          civilians.
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={{ height: 200, width: 360 }}
        source={require("../Image/laurel.jpg")}
      ></Image>
      <View>
        <Text style={{ fontSize: 20, textAlign: "justify", margin: 15 }}>
          Prior to Quezon's exile, he advised Dr. Jose P. Laurel to head and
          cooperate with the Japanese civilian government in the hope that the
          collaboration will lead to a less brutality of the Japanese towards
          the Filipinos. Rightly or wrongly, President Laurel and his war time
          government was largely detested by the Filipinos.
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
