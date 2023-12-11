import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bag2, Home2, Bookmark } from 'iconsax-react-native';
import React from 'react'
import { Home,Detail,Katalog, Bokkmark, Addnote, Cari, Note,NoteDetail,Editnote, Login,Register} from '../screen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator creenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#2BA8FF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
        },
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
        <Tab.Screen name="Katalog" component={Katalog} options={{
          tabBarLabel: 'Katalog',
          tabBarIcon: ({focused, color}) => (
            <Bag2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }} />
        <Tab.Screen name="Bokkmark" component={Bokkmark} options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({focused, color}) => (
            <Bookmark
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
      </Tab.Navigator>
  )
}
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
      <Stack.Screen name="Note" component={Note} options={{ headerShown: false }} />
      <Stack.Screen name="cari" component={Cari} options={{ headerShown: false }} />
      <Stack.Screen name="Addnote" component={Addnote} options={{ headerShown: false }} />
      <Stack.Screen name="NoteDetail" component={NoteDetail} options={{ headerShown: false }} />
      <Stack.Screen name="Editnote" component={Editnote} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
    
export default Router

const styles = StyleSheet.create({})