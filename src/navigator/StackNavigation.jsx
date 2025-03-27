import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from '../screens/auth/Welcome'
import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})
