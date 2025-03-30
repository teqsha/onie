// import {Alert} from 'react-native';
// import {navigate, resetAndNavigate} from '../../navigator/NavigationUtil';
// import {setUser} from './reducers/userSlice';
// import {token_storage} from './storage';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import axios from 'axios';
// import {LOGIN} from './API';
// import { Dispatch } from 'redux';
// import { User } from '@react-native-google-signin/google-signin';
// // import {
// //   LoginManager,
// //   AccessToken,
// //   GraphRequest,
// //   GraphRequestManager,
// // } from 'react-native-fbsdk';

// interface RegisterData {
//   id_token: string;
//   provider: string;
//   name: string;
//   email: string;
//   userImage: string;
// }

// const handleSignInSuccess = async (res: any, dispatch: any) => {
//   token_storage.set('access_token', res.data.tokens.access_token);
//   token_storage.set('refresh_token', res.data.tokens.refresh_token);
//   await dispatch(setUser(res.data.user));
//   resetAndNavigate('HomeScreen');
// };

// const handleSignInError = (error: any, data: RegisterData) => {
//   console.log(error);
//   if (error.response.status == 401) {
//     navigate('SignupScreen', {
//       ...data,
//     });
//     return;
//   }
//   Alert.alert('We are facing issues, try again later');
// };
// // interface GoogleSignInError {
// //   message: string;
// // }

// // interface GoogleSignInResponse {
// //   idToken: string;
// //   user: {
// //     email: string;
// //     name: string;
// //     photo: string;
// //   };
// // }
// interface GoogleUserInfo {
//   idToken: string;
//   user: {
//     email: string;
//     name: string;
//     photo: string;
//   };
// }

// interface SignInWithGoogleError {
//   message: string;
// }

// export const signInWithGoogle = () => async (dispatch: Dispatch) => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo: GoogleUserInfo = await GoogleSignin.signIn(); // Fetch the user details

//     console.log('Google User Info:', userInfo); // Debugging

//     if (!userInfo.idToken) {
//       throw new Error('Google Sign-In Failed: No idToken received');
//     }

//     const { idToken, user } = userInfo;

//     await axios.post(LOGIN, {
//       provider: 'google',
//       id_token: idToken,
//     })
//     .then(async (res: any) => {
//       await handleSignInSuccess(res, dispatch);
//     })
//     .catch((err: any) => {
//       console.log('Google Sign-In API Error:', err.response?.data || err);
//       const errorData: RegisterData = {
//         email: user.email,
//         name: user.name,
//         userImage: user.photo,
//         provider: 'google',
//         id_token: idToken,
//       };
//       handleSignInError(err, errorData);
//     });

//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.log('GOOGLE SIGN-IN ERROR:', error.message);
//     } else {
//       console.log('GOOGLE SIGN-IN ERROR:', error);
//     }
//     // Alert.alert('Google Sign-In Failed', error.message);
//   }
// };



// // export const signInWithFacebook = () => async (dispatch: any) => {
// //   LoginManager.logOut();
// //   LoginManager.logInWithPermissions(['email public_profile']).then(
// //     (result: { isCancelled: boolean }) => {
// //       if (result.isCancelled) {
// //       } else {
// //         AccessToken.getCurrentAccessToken().then(async (data: AccessTokenData | null) => {
// //           const infoRequest = new GraphRequest(
// //             '/me?fields=name,picture,email',
// //             null,
// //             async (err: GraphRequestError | null, result: FacebookUserData | undefined) => {
// //               if (err) {
// //                 Alert.alert('Facebook Error');
// //                 return;
// //               }
// //               console.log(result, err);

// //               await axios
// //                 .post(LOGIN, {
// //                   provider: 'facebook',
// //                   id_token: data?.accessToken,
// //                 })
// //                 .then(async res => {
// //                   await handleSignInSuccess(res, dispatch);
// //                 })
// //                 .catch((err: any) => {
// //                   const errorData: RegisterData = {
// //                     email: result?.email || '',
// //                     name: result?.name || '',
// //                     userImage: result?.picture?.data?.url || '',
// //                     provider: 'facebook',
// //                     id_token: data?.accessToken || '',
// //                   };
// //                   handleSignInError(err, errorData);
// //                 });
// //             },
// //           );

// //           new GraphRequestManager().addRequest(infoRequest).start();
// //         });
// //       }
// //     },
// //     (error: any) => {
// //       console.log(`FB Error`, error);
// //     },
// //   );

// // interface AccessTokenData {
// //   accessToken: string;
// // }

// // interface GraphRequestError {
// //   message: string;
// //   [key: string]: any;
// // }

// // interface FacebookUserData {
// //   name: string;
// //   email: string;
// //   picture: {
// //     data: {
// //       url: string;
// //     };
// //   };
// // }
// // };


import { Alert } from 'react-native';
import { navigate, resetAndNavigate } from '../../navigator/NavigationUtil';
import { setUser } from './reducers/userSlice';
import { token_storage } from './storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { LOGIN } from './API';
import { Dispatch } from 'redux';

interface RegisterData {
  id_token: string;
  provider: string;
  name: string;
  email: string;
  userImage: string;
}

// Handle sign-in success
const handleSignInSuccess = async (res: any, dispatch: Dispatch) => {
  token_storage.set('access_token', res.data.tokens.access_token);
  token_storage.set('refresh_token', res.data.tokens.refresh_token);
  await dispatch(setUser(res.data.user));
  resetAndNavigate('HomeScreen');
};

// Handle sign-in error
const handleSignInError = (error: any, data: RegisterData) => {
  console.log('Google Sign-In API Error:', error.response?.data || error);

  if (error.response?.status === 401) {
    navigate('SignupScreen', { ...data });
    return;
  }

  Alert.alert('We are facing issues, try again later');
};

export const signInWithGoogle = () => async (dispatch: Dispatch) => {
  try {
    // Ensure Google Play Services are available
    await GoogleSignin.hasPlayServices();

    // Sign in with Google
    // const userInfo = await GoogleSignin.signIn();
    // console.log('Google User Info:', userInfo); // Debugging
    const { data } = await GoogleSignin.signIn();
    console.log("Google User Info:", data);

    const idToken = data?.idToken;

    if (!idToken) {
      throw new Error("Google Sign-In Failed: No idToken received");
    }

    // // Extract idToken and user info
    // const { idToken, user } = userInfo; 

    // // Validate idToken
    // if (!idToken) {
    //   throw new Error('Google Sign-In Failed: No idToken received');
    // }

    // Send user info to backend for authentication
    const response = await axios.post(LOGIN, {
      provider: 'google',
      id_token: idToken,
    });

    await handleSignInSuccess(response, dispatch);
  } catch (error: any) {
    console.log('GOOGLE SIGN-IN ERROR:', error.message);

    if (error.code === 'CANCELED') {
      console.log('User cancelled the login');
      return;
    }

    if (error.message.includes('idToken received')) {
      Alert.alert('Google Sign-In Failed', 'No idToken received. Please try again.');
      return;
    }

    Alert.alert('Google Sign-In Error', error.message);
  }
};
