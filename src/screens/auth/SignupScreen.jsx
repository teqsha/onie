import { Image, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { SignupInitialValue, SignupValidationSchema } from './utils';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


<<<<<<< HEAD
const SignupScreen = () => {
=======
const Signup = () => {
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
 const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);

  const handleSignup = (values) => {
    console.log(values);
    console.log('Signup Details:');
    console.log('Username:', values.Username);
    console.log('Password:', values.password);
    console.log('Confirm Password:', values.confirmPassword);
<<<<<<< HEAD
    console.log('Email Address:', values.email);
=======
    console.log('Email Address:', values.emailAddress);
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.welcomeText}>Signup</Text>
      <Text style={styles.Text}>Sign in to your account!</Text>
      <Formik
        initialValues={SignupInitialValue}
        validationSchema={SignupValidationSchema}
        onSubmit={handleSignup}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,

        }) => (
          <View>
            <TextInput
              style={styles.textinput}
              placeholder="Username"
              onChangeText={handleChange('Username')}
              onBlur={handleBlur('Username')}
              value={values.Username}
            />
            {errors.Username && touched.Username && (
              <Text style={styles.errorText}>{errors.Username}</Text>
            )}
            
            <View style={{ position: 'relative' }}>
              <TextInput
                style={styles.textinput}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
              />
<<<<<<< HEAD
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
=======
              {errors.Username && touched.Username && (
                <Text style={styles.errorText}>{errors.Username}</Text>
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
              )}
              <TouchableOpacity
                style={styles.hidePasswordIcon}
                onPress={() => setHidePassword(!hidePassword)}>
                <Icon
                  name={hidePassword ? 'eye-off' : 'eye-outline'}
                  size={24}
                  color={'#333'}
                />
              </TouchableOpacity>
               <View>
            <TextInput
              style={styles.textinput}
              placeholder="Confirm New Password"
              onChangeText={handleChange('confirm New Password')}
              onBlur={handleBlur('confirm New Password')}
              value={values.confirmPassword}
             />
<<<<<<< HEAD
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
=======
            {errors.Username && touched.Username && (
              <Text style={styles.errorText}>{errors.Username}</Text>
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
            )}
            <TouchableOpacity
                style={styles.hidePasswordIcon}
                onPress={() => setHidePassword(!hidePassword)}>
                <Icon
                  name={hidePassword ? 'eye-off' : 'eye-outline'}
                  size={24}
                  color={'#333'}
                />
              </TouchableOpacity>

             <View style={{ position: 'relative' }}>
              <TextInput
                style={styles.textinput}
                placeholder="Email Address"
                onChangeText={handleChange('email Address')}
                onBlur={handleBlur('email Address')}
<<<<<<< HEAD
                value={values.emailaddress}
              />
            </View>
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
=======
                value={values.emailAddress}
                secureTextEntry={hidePassword}
              />
            </View>
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
            )}

            <TouchableOpacity   onPress={handleSubmit}>
              <Text style={styles.signInText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          </View>
          </View>
        )}
      </Formik>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text>have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
<<<<<<< HEAD
        {/* <TouchableOpacity > */}
=======
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
          <Text style={{ color: '#3797FE' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    

  );
};


const styles = StyleSheet.create({
  textinput: {
    justifyContent: 'center',
    borderColor: 'grey',
    width: 350,
    height: 50,
    alignSelf: 'center',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  signInText: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
    backgroundColor: '#3797FE',
    width: 350,
    height: 50,
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  forgotPasswordText: {
    color: '#3797FE',
    marginTop: 5,
  },
  hidePasswordIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  welcomeText: {
    fontSize: 65,
    textAlign: 'center',
    fontWeight: '500',
    color: '#262626',
  },
  Text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    paddingLeft: 15,
    fontSize: 14,
  },

});

<<<<<<< HEAD
export default SignupScreen;


=======
export default Signup;
>>>>>>> be2844b5aaaa7b6df4f0e65374fb47c854e41279
