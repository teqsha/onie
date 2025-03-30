// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import StackNavigation from './src/navigator/StackNavigation'
// import { NavigationContainer } from '@react-navigation/native'

// const App = () => {
//   return (
//     <NavigationContainer>
//       <StackNavigation />
//     </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

import 'react-native-gesture-handler';
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/screens/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import StackNavigation from './src/navigator/StackNavigation';

GoogleSignin.configure({
  webClientId:
    '464308985903-8d42q6m9f2pu866bcfcrdohnde18nb2n.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: true,
  scopes: ["profile", "email"],
  iosClientId:
    '464308985903-i35us58lvjld03loblnt30q30j47a9cl.apps.googleusercontent.com',
});

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        translucent={Platform.OS === 'ios'}
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
