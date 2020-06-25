import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Posting() {
  const navigation = useNavigation();

  function navigateToFeed() {
    navigation.navigate('Feed');
  }

  async function handlePost(e) {
    e.preventDefault();
  }

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Image source={logoImg} />
        <View style={styles.postForm}>
          <Text style={styles.formText}>What are you thinking?</Text>
          <TextInput style={styles.formInput} multiline={true} numberOfLines={4}></TextInput>

          <TouchableOpacity onPress={navigateToFeed}>
            <View style={styles.backContainer}>
              <Feather name="arrow-left" size={12} color="#bf1736" />
              <Text style={styles.backText}>Cancel</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
