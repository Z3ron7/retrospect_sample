import 'react-native-gesture-handler'
import { StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import {  NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerToggleButton} from '@react-navigation/drawer'
import Home from './Screens/Home'
import About from './Screens/About'
import CultureAndTradition from './Screens/Buttons/CultureAndTradition'
import CountryHistory from './Screens/Buttons/CountryHistory'
import NationalHeroes from './Screens/Buttons/NationalHeroes'
import PhilippinePresidents from './Screens/Buttons/PhilippinePresidents'
import Colonization from './Screens/Buttons/Colonization'
import FamousPlaces from './Screens/Buttons/FamousPlaces'
import Luzonmap from './Screens/Map/Luzonmap'
import Visayasmap from './Screens/Map/Visayasmap'
import Mindanaomap from './Screens/Map/Mindanaomap'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Heroes from './Screens/heroes/Heroes'
import Spanish from './Screens/colonize/Spanish'
import USA from './Screens/colonize/Usa'
import Japan from './Screens/colonize/Japan'
import President from './Screens/President/president'
import Culture from './Screens/Culture/Culture'
import Tradition from './Screens/Culture/Traditon'
import Places from './Screens/Map/Places'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()
const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity >
        {/*Donut Button Image */}
        <Image
          source={require('./Screens/Image/logooo.jpg')}
          style={{ width: 40, height: 40, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
function Rite() {
  return (
    
    <Drawer.Navigator screenOptions={{headerStyle: {
      backgroundColor: 'red'},
      headerTintColor: '#fff',
      drawerActiveTintColor: 'red',
      headerTitleStyle: {
      fontWeight: 'bold',}, 
      drawerType:'slide',
      headerLeft: () => (
        <NavigationDrawerStructure />),
      headerRight: () => <DrawerToggleButton /> }}>

      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#dc143c',},
        headerTintColor: '#fff',
        animation: 'slide_from_right',
        headerTitleStyle: {
        fontWeight: 'bold',},}}  >

      <Stack.Screen name="Rite" component={Rite} options={{headerShown: false, drawerItemStyle: { height: 0 }}} />
        <Stack.Screen name="Country History" component={CountryHistory} />
        <Stack.Screen name="National Heroes" component={NationalHeroes} />
        <Stack.Screen name="Philippine Presidents" component={PhilippinePresidents} />
        <Stack.Screen name="Colonization" component={Colonization} />
        <Stack.Screen name='CultureAndTradition' component={CultureAndTradition} />
        <Drawer.Screen name="Famous Places" component={FamousPlaces} />
        <Stack.Screen name="Luzon Famous Places" component={Luzonmap} options={{
    drawerItemStyle: { height: 0 }}}/>
        <Stack.Screen name="Visayas Famous Places" component={Visayasmap} options={{
    drawerItemStyle: { height: 0 }}}/>
        <Stack.Screen name="Mindanao Famous Places" component={Mindanaomap} options={{
    drawerItemStyle: { height: 0 }}}/>

        <Stack.Screen name="Heroes" component={Heroes} />
        <Stack.Screen name="Spanish Colonial Period" component={Spanish} />
        <Stack.Screen name="USA Colonial Period" component={USA} />
        <Stack.Screen name="Japanese Colonial Period" component={Japan} />
        <Stack.Screen name="Presidents" component={President} />
        <Stack.Screen name="Culture" component={Culture} />
        <Stack.Screen name="Tradition" component={Tradition} />
        <Stack.Screen name="Places" component={Places} />
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
