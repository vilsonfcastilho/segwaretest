import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Login() {
  const navigation = useNavigation();

  function navigateToRecover() {
    navigation.navigate('RecoverPassword');
  }

  function navigateToFeed() {
    navigation.navigate('Feed');
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Image source={logoImg} />
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Username</Text>
          <TextInput style={styles.formInput}></TextInput>
          
          <Text style={styles.formText}>Password</Text>
          <TextInput style={styles.formInput}></TextInput>
          
          <TouchableOpacity onPress={navigateToRecover}>
            <Text style={styles.forgotText}>Forgot my password</Text>
          </TouchableOpacity>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signUpButton} onPress={navigateToFeed}>
              <Text style={styles.buttonText}>Sign-up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signInButton} onPress={navigateToFeed}>
              <Text style={styles.buttonText}>Sign-in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
