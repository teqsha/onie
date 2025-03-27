
<<<<<<< HEAD
// import { StyleSheet, Image, View } from 'react-native';
// import React, { useEffect } from 'react';
// import { useNavigation } from '@react-navigation/native';


// const Welcome = () => {
//   const navigation = useNavigation();
      
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       navigation.replace('LoginScreen');
//     }, 2000);
     
//     return () => clearTimeout(timeout); 
//   }, [navigation]);

//   return (
//     <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//       <Image
//         style={styles.image}
//         source={require('../../assets/TQ-removebg-preview.png')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: '30%',
//     height: '30%',
//     resizeMode: 'cover',
//   },
// });

// export default Welcome;
=======
import { StyleSheet, Image, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
  const navigation = useNavigation();
      
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 2000);
     
    return () => clearTimeout(timeout); 
  }, [navigation]);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Image
        style={styles.image}
        source={require('../../assets/TQ-removebg-preview.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: '30%',
    resizeMode: 'cover',
  },
});

export default Welcome;
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
