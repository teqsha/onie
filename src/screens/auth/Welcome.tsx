
import { StyleSheet, Image, View, Text, Animated, Alert, Linking} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {token_storage} from '../redux/storage';
import {jwtDecode} from 'jwt-decode';
import {navigate, resetAndNavigate} from '../../navigator/NavigationUtil';
import {refresh_tokens} from '../redux/apiConfig';
import {useAppDispatch} from '../redux/reduxHook';
import {refetchUser} from '../redux/actions/userAction';
import {extractTypeAndId} from './dateUtils';
import {getReelById} from '../redux/actions/reelAction';

type DecodedToken = {
  exp: number;
};

const Welcome = () => {

  
  // const SplashScreen: FC = () => {
    const [isStop, setIsStop] = useState(false);
    const scale = new Animated.Value(1);
    const dispatch = useAppDispatch();
    const tokenCheck = async () => {
      const access_token = token_storage.getString('access_token') || '';
      const refresh_token = token_storage.getString('refresh_token') || '';
  
      if (access_token) {
        const decodedAccessToken = jwtDecode<DecodedToken>(access_token);
        const decodedRefreshToken = jwtDecode<DecodedToken>(refresh_token);
  
        const currentTime = Date.now() / 1000;
  
        if (decodedRefreshToken?.exp < currentTime) {
          resetAndNavigate('LoginScreen');
          Alert.alert('Session Expired, please login again');
          return false;
        }
  
        if (decodedAccessToken?.exp < currentTime) {
          try {
            refresh_tokens();
            dispatch(refetchUser());
          } catch (error) {
            console.log(error);
            Alert.alert('There was an error');
            return false;
          }
        }
        resetAndNavigate('HomeScreen');
        return true;
      }
      resetAndNavigate('LoginScreen');
      return false;
    };
  
    interface DeepLinkEvent {
      url: string | null;
    }

    interface ExtractedTypeAndId {
      type: string;
      id: string;
    }

    const handleDeepLink = async (event: DeepLinkEvent, deepLinkType: string): Promise<void> => {
      const tokenValid = await tokenCheck();
      if (!tokenValid) return;

      const { url } = event;
      if (!url) {
        handleNoUrlCase(deepLinkType);
        return;
      }
      const { type, id }: ExtractedTypeAndId = extractTypeAndId(url);
      switch (type) {
        case 'reel':
          await dispatch(getReelById(id, deepLinkType));
          break;
        case 'user':
          handleUserCase(deepLinkType, id);
          break;
        default:
          handleDefaultCase(deepLinkType);
          break;
      }
    };
  
    const handleNoUrlCase = (deepLinkType: string): void => {
      if (deepLinkType !== 'RESUME') {
        resetAndNavigate('HomeScreen');
      }
        };
  
    const handleUserCase = (deepLinkType: string, id: string): void => {
      if (deepLinkType !== 'RESUME') {
        resetAndNavigate('HomeScreen');
      }
      navigate('ProfileScreen', { username: id });
    };
  
    const handleDefaultCase = (deepLinkType: string): void => {
      if (deepLinkType !== 'RESUME') {
        resetAndNavigate('HomeScreen');
      }
        };
  
    useEffect(() => {
      Linking.getInitialURL().then(url => {
        handleDeepLink({url}, 'CLOSE');
      });
  
      Linking.addEventListener('url', event => handleDeepLink(event, 'RESUME'));
    }, []);

  const navigation = useNavigation();
      
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' as never }],
      });
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
