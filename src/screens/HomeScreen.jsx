// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';

// const HomeScreen = () => {
//  const navigation = useNavigation();
//   return (
//     <View>
     
//        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
//                 <Text style={{ color: '#3797FE' }}>home</Text>
//               </TouchableOpacity>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
    
// })



import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
 const Navigation = useNavigation();
=======

const HomeScreen = () => {
 
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});

<<<<<<< HEAD
export default HomeScreen;
=======
export default HomeScreen;
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
