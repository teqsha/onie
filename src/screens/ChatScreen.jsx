import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
<<<<<<< HEAD

const ChatScreen = () => {
=======
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {


   const navigation = useNavigation();
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Chat Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChatScreen;