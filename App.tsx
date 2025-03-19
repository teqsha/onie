import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Hook() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hook</Text> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})