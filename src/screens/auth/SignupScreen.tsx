// // import { Image, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
// // import React, { useState } from 'react';
// // import { Formik } from 'formik';
// // import { SignupInitialValue, SignupValidationSchema } from './utils';
// // import { useNavigation } from '@react-navigation/native';
// // import Icon from 'react-native-vector-icons/Ionicons';


// // const SignupScreen = () => {
// //   const navigation = useNavigation();
// //   const [hidePassword, setHidePassword] = useState(true);

// //   const handleSignup = (values) => {
// //     console.log(values);
// //     console.log('Signup Details:');
// //     console.log('Username:', values.Username);
// //     console.log('Password:', values.password);
// //     console.log('Confirm Password:', values.confirmPassword);
// //     console.log('Email Address:', values.email);
// //   };

// //   return (
// //     <View style={{ alignItems: 'center' }}>
// //       <Text style={styles.welcomeText}>Signup</Text>
// //       <Text style={styles.Text}>Sign in to your account!</Text>
// //       <Formik
// //         initialValues={SignupInitialValue}
// //         validationSchema={SignupValidationSchema}
// //         onSubmit={handleSignup}>
// //         {({
// //           handleSubmit,
// //           handleChange,
// //           handleBlur,
// //           values,
// //           touched,
// //           errors,

// //         }) => (
// //           <View>
// //             <TextInput
// //               style={styles.textinput}
// //               placeholder="Username"
// //               onChangeText={handleChange('Username')}
// //               onBlur={handleBlur('Username')}
// //               value={values.Username}
// //             />
// //             {errors.Username && touched.Username && (
// //               <Text style={styles.errorText}>{errors.Username}</Text>
// //             )}

// //             <View style={{ position: 'relative' }}>
// //               <TextInput
// //                 style={styles.textinput}
// //                 placeholder="Password"
// //                 onChangeText={handleChange('password')}
// //                 onBlur={handleBlur('password')}
// //                 value={values.password}
// //                 secureTextEntry={hidePassword}
// //               />
// //               {errors.password && touched.password && (
// //                 <Text style={styles.errorText}>{errors.password}</Text>
// //               )}
// //               <TouchableOpacity
// //                 style={styles.hidePasswordIcon}
// //                 onPress={() => setHidePassword(!hidePassword)}>
// //                 <Icon
// //                   name={hidePassword ? 'eye-off' : 'eye-outline'}
// //                   size={24}
// //                   color={'#333'}
// //                 />
// //               </TouchableOpacity>
// //               <View>
// //                 <TextInput
// //                   style={styles.textinput}
// //                   placeholder="Confirm New Password"
// //                   onChangeText={handleChange('confirm New Password')}
// //                   onBlur={handleBlur('confirm New Password')}
// //                   value={values.confirmPassword}
// //                 />
// //                 {errors.confirmPassword && touched.confirmPassword && (
// //                   <Text style={styles.errorText}>{errors.confirmPassword}</Text>
// //                 )}
// //                 <TouchableOpacity
// //                   style={styles.hidePasswordIcon}
// //                   onPress={() => setHidePassword(!hidePassword)}>
// //                   <Icon
// //                     name={hidePassword ? 'eye-off' : 'eye-outline'}
// //                     size={24}
// //                     color={'#333'}
// //                   />
// //                 </TouchableOpacity>

// //                 <View style={{ position: 'relative' }}>
// //                   <TextInput
// //                     style={styles.textinput}
// //                     placeholder="Email Address"
// //                     onChangeText={handleChange('email Address')}
// //                     onBlur={handleBlur('email Address')}
// //                     value={values.emailaddress}
// //                   />
// //                 </View>
// //                 {errors.email && touched.email && (
// //                   <Text style={styles.errorText}>{errors.email}</Text>
// //                 )}
// //                 <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
// //                   {/* <TouchableOpacity onPress={handleSubmit}> */}
// //                   <Text style={styles.signInText}>Signup</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity>
// //                   <Text style={styles.forgotPasswordText}>Forgot password?</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           </View>
// //         )}
// //       </Formik>

// //       <View style={{ flexDirection: 'row', marginTop: 10 }}>
// //         <Text>have an account? </Text>
// //         <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
// //           <Text style={{ color: '#3797FE' }}>Login</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>


// //   );
// // };


// // const styles = StyleSheet.create({
// //   textinput: {
// //     justifyContent: 'center',
// //     borderColor: 'grey',
// //     width: 350,
// //     height: 50,
// //     alignSelf: 'center',
// //     margin: 5,
// //     padding: 10,
// //     borderWidth: 1,
// //     borderRadius: 5,
// //   },
// //   signInText: {
// //     color: 'white',
// //     textAlign: 'center',
// //     alignSelf: 'center',
// //     fontSize: 18,
// //     backgroundColor: '#3797FE',
// //     width: 350,
// //     height: 50,
// //     margin: 10,
// //     padding: 10,
// //     borderRadius: 8,
// //   },
// //   forgotPasswordText: {
// //     color: '#3797FE',
// //     marginTop: 5,
// //   },
// //   hidePasswordIcon: {
// //     position: 'absolute',
// //     right: 20,
// //     top: 15,
// //   },
// //   welcomeText: {
// //     fontSize: 65,
// //     textAlign: 'center',
// //     fontWeight: '500',
// //     color: '#262626',
// //   },
// //   Text: {
// //     color: 'black',
// //     textAlign: 'center',
// //     fontSize: 20,
// //     marginBottom: 20,
// //   },
// //   errorText: {
// //     color: 'red',
// //     paddingLeft: 15,
// //     fontSize: 14,
// //   },

// // });

// // export default SignupScreen;

// import { View, Text,Button,Touchable, TouchableOpacity, Image, ActivityIndicator, Alert, PermissionsAndroid, TextInput } from 'react-native';
// import React, { FC, useEffect, useState } from 'react';
// import { Platform } from 'react-native';
// import { StyleSheet } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import LinearGradient from 'react-native-linear-gradient';
// // import Icon from 'react-native-vector-icons/MaterialIcons';


// import {
//   checkUsernameAvailability,
//   register,
// } from '../redux/actions/userAction';
// import { useRoute } from '@react-navigation/native';
// import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
// import { RFValue } from 'react-native-responsive-fontsize';
// import { uploadFile } from '../redux/actions/fileAction';
// import { useAppDispatch } from '../redux/reduxHook';
// import { SafeAreaView } from 'react-native-safe-area-context';

// interface initialData {
//   id_token: string;
//   provider: string;
//   name: string;
//   email: string;
//   userImage: string;
// }

// const SignupScreen: FC = () => {
//   const data = useRoute();
//   const dispatch = useAppDispatch();
//   const item = data?.params as initialData;
//   const [username, setUsername] = useState<string>('');
//   const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
//     null,
//   );
//   const [loading, setLoading] = useState<boolean>(false);
//   const [loadingMessage, setLoadingMessage] = useState<string>('');
//   const [isLocalImagePickedUp, setIsLocalImagePickedUp] =
//     useState<boolean>(false);
//   const [fullName, setFullName] = useState<string>('');
//   const [bio, setBio] = useState<string>('');
//   const [imageUri, setImageUri] = useState<string>('');

//   useEffect(() => {
//     if (item) {
//       setFullName(item.name);
//       setImageUri(item.userImage);
//     }
//   }, [item]);

//   const checkUsername = async () => {
//     const data = await dispatch(checkUsernameAvailability(username));
//     setUsernameAvailable(data);
//   };

//   const handleImagePicker = () => {
//     Alert.alert('Select Image', 'Choose an option', [
//       {
//         text: 'Take Photo',
//         onPress: handleLaunchCamera,
//       },
//       {
//         text: 'Choose from Gallery',
//         onPress: handleLaunchImageGallery,
//       },
//     ]);
//   };

//   const handleLaunchImageGallery = async () => {
//     const result = await launchImageLibrary({
//       mediaType: 'photo',
//       selectionLimit: 1,
//     });
//     if (result.assets && result.assets.length > 0) {
//       setIsLocalImagePickedUp(true);
//       setImageUri(result.assets[0].uri || '');
//     }
//   };

//   const handleLaunchCamera = async () => {
//     if (Platform.OS === 'android') {
//       const grantedcamera = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,

//         {
//           title: 'App Camera Permission',
//           message: 'App needs access to your camera',
//           buttonNeutral: 'Ask me later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (grantedcamera === PermissionsAndroid.RESULTS.GRANTED) {
//         const result = await launchCamera({
//           mediaType: 'photo',
//           includeBase64: true,
//         });
//         if (result.assets && result.assets.length > 0) {
//           setIsLocalImagePickedUp(true);
//           setImageUri(result.assets[0].uri || '');
//         }
//       }
//       return;
//     }

//     // IOS ONLY
//     const result = await launchCamera({
//       mediaType: 'photo',
//       includeBase64: true,
//     });
//     if (result.assets && result.assets.length > 0) {
//       setIsLocalImagePickedUp(true);
//       setImageUri(result.assets[0].uri || '');
//     }
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     setLoadingMessage('Creating Account...🚀');
//     const trimmedUsername = username.trim().toLowerCase();
//     const trimmedFullName = fullName.trim();
//     const trimmedBio = bio.trim();

//     if (
//       !trimmedUsername ||
//       !trimmedFullName ||
//       !trimmedBio ||
//       !usernameAvailable
//     ) {
//       Alert.alert('Please fill valid details');
//       setLoading(false);
//       setLoadingMessage('');
//       return;
//     }

//     let userImage = imageUri;
//     if (isLocalImagePickedUp) {
//       setLoadingMessage('Uploading Image...📦🎞️');
//       const uploadResult = await dispatch(uploadFile(imageUri, 'user_image'));
//       if (uploadResult) {
//         userImage = uploadResult;
//         setLoadingMessage('Image Uploaded...✅');
//       } else {
//         setLoading(false);
//         setLoadingMessage('');
//         return;
//       }
//     }
//     setLoadingMessage('Preparing Dashboard...✨✨');
//     const registerData = {
//       name: fullName,
//       bio,
//       userImage,
//       email: item?.email,
//       provider: item?.provider,
//       id_token: item?.id_token,
//       username,
//     };
//     await dispatch(register(registerData));
//     setLoading(false);
//   };
//   return (
//     <SafeAreaView>
//       <KeyboardAwareScrollView
//         contentContainerStyle={styles.scrollViewContainer}
//         scrollEnabled={true}
//         showsVerticalScrollIndicator={false}
//         enableOnAndroid={true}
//         enableAutomaticScroll={true}
//         extraScrollHeight={Platform.select({
//           ios: 120,
//           android: 120,
//         })}>
//         <View style={styles.titleContainer}>
//           <LinearGradient
//             colors={['rgba(0, 0, 0, 0)', 'black', 'rgba(0, 0, 0, 0)']}
//             style={styles.linearGradient}
//             start={{ x: 0, y: 0.5 }}
//             end={{ x: 1, y: 0.5 }}
//           />
//           <Text style={{ fontSize: RFValue(16), fontFamily: 'Poppins-SemiBold' }}>
//             Complete your profile
//           </Text>
//           <LinearGradient
//             colors={['rgba(0, 0, 0, 0)', 'black', 'rgba(0, 0, 0, 0)']}
//             style={styles.linearGradient}
//             start={{ x: 0, y: 0.5 }}
//             end={{ x: 1, y: 0.5 }}
//           />
//         </View>

//         <TouchableOpacity
//           style={styles.imageContainer}
//           onPress={handleImagePicker}>
//           <Image
//             source={
//               imageUri
//                 ? { uri: imageUri }
//                 : require('../../assets/placeholder.png')
//             }
//             style={styles.image}
//           />
//           <View style={styles.cameraIcon}>
//             {/* <Icon name="camera-alt" color="white" size={RFValue(20)} /> */}
//           </View>
//         </TouchableOpacity>

//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             width: '100%',
//           }}>
//           <Text style={styles.label}>Username</Text>
//           {usernameAvailable != null && (
//             <Text style={{
//               fontSize: RFValue(10),
//               fontFamily: 'Poppins-SemiBold',
//               alignSelf: 'flex-end'}}>
//           {usernameAvailable ? '✅ Available' : '❌ Not Available'}
//         </Text>
//           )}
//       </View>

//       <TextInput
//         style={styles.input}
//         returnKeyType="next"
//         value={username}
//         placeholderTextColor='#484C56'
//         onChangeText={setUsername}
//         onEndEditing={async () => {
//           await checkUsername();
//         }}
//         placeholder="Enter Unique username"
//       />

//       <Text style={styles.label}>Full Name</Text>
//       <TextInput
//         style={styles.input}
//         returnKeyType="next"
//         value={fullName}
//         placeholderTextColor='#484C56'
//         onChangeText={setFullName}
//         placeholder="Enter your full name"
//       />
//       <Text style={styles.label}>Short Bio</Text>
//       <TextInput
//         style={[styles.input, styles.textArea]}
//         value={bio}
//         placeholderTextColor='#484C56'
//         onChangeText={setBio}
//         placeholder="Enter your bio"
//         multiline={true}
//         numberOfLines={4}
//       />

//       {loading ? (
//         <View style={styles.flexRow}>
//           <ActivityIndicator size="small" color='#fff' />
//           <Text style={{fontSize: RFValue(10), fontFamily:'Poppins-Medium'}}>
//             {loadingMessage || 'Loading....'}
//           </Text>
//         </View>
//       ) : (
//         <Button
//           title="Let's Dive in"
//           onPress={handleSubmit}
//         />
//       )}
//     </KeyboardAwareScrollView>
//     </SafeAreaView >
//   )
// };

// const styles = StyleSheet.create({
//   scrollViewContainer: {
//     paddingBottom: 120,
//     paddingTop: Platform.OS === 'android' ? 30 : 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   label: {
//     alignSelf: 'flex-start',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   linearGradient: {
//     flex: 1,
//     height: 1,
//   },
//   cameraIcon: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     padding: 10,
//     borderRadius: 100,
//     position: 'absolute',
//     right: 10,
//     bottom: 0,
//   },
//   flexRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 5,
//     marginTop: 30,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderColor: '#FFFFFF',
//     borderWidth: 2,
//     borderRadius: 200,
//     marginBottom: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     color: 'black',
//     borderRadius: 5,
//     fontFamily: 'Poppins-Medium',
//     padding: 10,
//     marginVertical: 10,
//     width: '100%',
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
// });

// export default SignupScreen;






import { View, Text, Button, Touchable, TouchableOpacity, Image, ActivityIndicator, Alert, PermissionsAndroid, TextInput } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons';


import { checkUsernameAvailability, register } from '../redux/actions/userAction';
import { useRoute } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import { uploadFile } from '../redux/actions/fileAction';
import { useAppDispatch } from '../redux/reduxHook';
import { SafeAreaView } from 'react-native-safe-area-context';

interface initialData {
  id_token: string;
  provider: string;
  name: string;
  email: string;
  userImage: string;
}


const SignupScreen: FC = () => {
  const data = useRoute();
  const dispatch = useAppDispatch();
  const item = data?.params as initialData;
  const [username, setUsername] = useState<string>('');
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [isLocalImagePickedUp, setIsLocalImagePickedUp] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');


  useEffect(() => {
    if (item) {
      setFullName(item.name);
    }
  }, [item]);

  const checkUsername = async () => {
    const data = await dispatch(checkUsernameAvailability(username));
    setUsernameAvailable(data);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setLoadingMessage('Creating Account...🚀');
    const trimmedUsername = username.trim().toLowerCase();
    const trimmedFullName = fullName.trim();

    if (
      !trimmedUsername ||
      !trimmedFullName ||
      !usernameAvailable
    ) {
      Alert.alert('Please fill valid details');
      setLoading(false);
      setLoadingMessage('');
      return;
    }
    setLoadingMessage('Preparing Dashboard...✨✨');

    const registerData = {
      name: fullName,
      email: item?.email,
      provider: item?.provider,
      id_token: item?.id_token,
      username,
    };
    await dispatch(register(registerData));
    setLoading(false);
  }
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewContainer}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        extraScrollHeight={Platform.select({
          ios: 120,
          android: 120,
        })}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          {usernameAvailable != null && (
            <Text style={{
              fontSize: RFValue(10),
              fontFamily: 'Poppins-SemiBold',
              alignSelf: 'flex-end'
            }}>
              {usernameAvailable ? '✅ Available' : '❌ Not Available'}
            </Text>
          )}
        </View>
        <Image style={styles.image}
          source={require('../../assets/Teqsha1-removebg-preview.png')}
        />
        <Text style={styles.title}>
          Create a new account
        </Text>

        <TextInput
          style={styles.input}
          returnKeyType="next"
          value={username}
          placeholderTextColor='#484C56'
          onChangeText={setUsername}
          onEndEditing={async () => {
            await checkUsername();
          }}
          placeholder="Username"
        />


        <TextInput
          style={styles.input}
          returnKeyType="next"
          value={fullName}
          placeholderTextColor='#484C56'
          onChangeText={setFullName}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          returnKeyType="next"
          value={fullName}
          placeholderTextColor='#484C56'
          onChangeText={setFullName}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          returnKeyType="next"
          value={fullName}
          placeholderTextColor='#484C56'
          onChangeText={setFullName}
          placeholder="Mobile Numbre or Email"
        />
        {/* <View style={{alignItems:'center'}}>
          <Text>
            People who use our service may have uploaded your contact information to teqsha.{' '} 
            <TouchableOpacity onPress={() =>Alert.alert('Learn more about')}>
            <Text style={{ color: '#3797FE', }}>Learn More</Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity onPress={() =>Alert.alert('Learn more about')}>
            <Text style={{ color: '#3797FE', }}>Learn More</Text>
          </TouchableOpacity>
          <Text>
            By signing up, you agree to our trems
          </Text> 

      </View> */}
        {loading ? (
          <View style={styles.flexRow}>
            <ActivityIndicator size="small" color='#fff' />
            <Text style={{ fontSize: RFValue(10), fontFamily: 'Poppins-Medium' }}>
              {loadingMessage || 'Loading....'}
            </Text>
          </View>
        ) : (
          <TouchableOpacity onPress={handleSubmit} style={styles.signInText}>
            <Text style={styles.signInText}>Sign up</Text>
          </TouchableOpacity>

        )}
        <View style={{flexDirection:'row',padding:10,}}>
          <Text>
            Have an accuont?
          </Text>
          <TouchableOpacity>
             <Text style={{ color: '#3797FE' }}>
              Log in
             </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: 120,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    borderRadius: 5,
    fontFamily: 'Poppins-Medium',
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  label: {
    alignSelf: 'flex-start',
  },
  image: {
    width: 550,
    height: 130,
  },
  title: {
    fontSize: 20,
    fontWeight: 'ultralight',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    width: 350,
    height: 50,
    margin: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  signInText: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    backgroundColor: '#3797FE',
    width: 330,
    height: 30,
    margin: 10,
    padding: 1,
    borderRadius: 8,
    
  },

})
export default SignupScreen;