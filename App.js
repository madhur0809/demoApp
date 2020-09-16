import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from './screen/WelcomePage';
import RegisterPage from './screen/RegisterPage';
import LoginPage from './screen/LoginPage';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomePage' headerMode={false}>
        <Stack.Screen name='WelcomePage' component={WelcomePage} />
        <Stack.Screen name='RegisterPage' component={RegisterPage}/>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}