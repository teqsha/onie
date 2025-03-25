import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UploadProvider } from '../screens/upload/UploadContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from '../screens/ProfileScreen';
import ReelsScreen from '../screens/ReelsScreen';
import UploadScreen from '../screens/UploadScreen';
import UploadReels from '../screens/UploadScreen';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import Welcome from '../screens/auth/Welcome';
import PostScreen from '../screens/PostScreen';
import ReelsVideo from '../screens/upload/ReelsVideo';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <UploadProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'DashBoard') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Reels') {
              iconName = focused ? 'film' : 'film-outline';
            } else if (route.name === 'Upload') {
              iconName = focused ? 'plus-box' : 'plus-box-outline';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >

        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </UploadProvider>
  );
};

const StackNavigation = () => {
  return (
    <UploadProvider>
      <NavigationContainer>
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
          <Stack.Screen
          name="HomeScreen"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
          <Stack.Screen
            name="UploadReels"
            component={UploadReels}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ReelsVideo"
            component={ReelsVideo}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UploadProvider>
  );
};

export default StackNavigation;