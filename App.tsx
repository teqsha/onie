import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigator/StackNavigation'
import LoginScreen from './src/screens/auth/LoginScreen'

const App = () => {
  return (
    <View>
     <StackNavigation />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})