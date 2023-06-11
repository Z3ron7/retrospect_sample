import React, {useState, useRef, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import * as Location from 'expo-location';
import { data } from './data1';
export default function Visayas({navigation}) {
  const [mapRegion, setMapRegion] = useState({
    latitude: 9.8148,
    longitude: 123.4677,
    latitudeDelta: 3,
    longitudeDelta: 2,
  })

  const placesLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }
    let location =  await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.34,
      longitudeDelta: 0.45,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  
  }
  useEffect(() => {
    placesLocation();
  }, []);
  
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={mapRegion}>
        {data.map((val, index) => {
                    return (
        <Marker coordinate={val.coords} title={val.title}
        onPress={() => navigation.navigate('Places', {val})} > 
          <View key={index}>
            <Image resizeMode='contain' style={{height: 50, width: 50}} source={require('../Image/logoo.png')} />
          </View>
      
        </Marker>
        )
                })}
        </MapView>
    </View>
  );
              }
              
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});