import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function RecoverPassword() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate('Login');
  }

  async function handleRecover(e) {
    e.preventDefault();
  }

  return (
    <View style={styles.container}>
      <View style={styles.recoverContainer}>
        <Image source={logoImg} />
        <View style={styles.formContainer}>
          <Text style={styles.formText}>Enter your username to recover your password</Text>
          <TextInput style={styles.formInput}></TextInput>

          <TouchableOpacity onPress={navigateToLogin}>
            <View style={styles.backContainer}>
              <Feather name="arrow-left" size={12} color="#bf1736" />
              <Text style={styles.backText}>Back</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recoverButton} onPress={handleRecover}>
            <Text style={styles.buttonText}>Recover</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
