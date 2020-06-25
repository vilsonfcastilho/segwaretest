import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Feed() {
  const navigation = useNavigation();

  function navigateToLogin() {
    navigation.navigate('Login');
  }

  function navigateToPosting() {
    navigation.navigate('Posting');
  }

  async function handleLoadFeed(e) {
    e.preventDefault();
  } 

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headerText}>Welcome User</Text>
        </View>
        <TouchableOpacity onPress={navigateToLogin}>
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText}>Logout</Text>
            <Feather name="log-out" size={16} color="#bf1736" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.feed}>
        <Text style={styles.title}>Feed</Text>
        <TouchableOpacity style={styles.postButton} onPress={navigateToPosting}>
          <Text style={styles.buttonText}>Say something</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.feedText}>Look what the people are thinking</Text>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filters:</Text>
        <TouchableOpacity style={styles.filter} onPress={() => {}}>
          <Text style={styles.filterType}>Time</Text>
          <Feather name="chevron-up" size={12} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} onPress={() => {}}>
          <Text style={styles.filterType}>Like</Text>
          <Feather name="chevron-up" size={12} color="#737380" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} onPress={() => {}}>
          <Text style={styles.filterType}>Love</Text>
          <Feather name="chevron-up" size={12} color="#737380" />
        </TouchableOpacity> 
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        style={styles.feedList}
        keyExtractor={feedPost => String(feedPost)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.feedPost}>
            <Text style={styles.postUser}>Vilson</Text>
            <Text style={styles.postContent}>Texto da publicação</Text>
            <View style={styles.infoPost}>
              <View style={styles.reactionContainer}>
                <View style={styles.likeContainer}>
                  <TouchableOpacity onPress={() => {}}>
                    <Feather name="thumbs-up" size={16} color="#737380" />
                  </TouchableOpacity>
                  <Text style={styles.upVoteNumber}>15</Text>
                </View>
                <View style={styles.loveContainer}>
                  <TouchableOpacity onPress={() => {}}>
                    <Feather name="heart" size={16} color="#737380" />
                  </TouchableOpacity>
                  <Text style={styles.upVoteNumber}>15</Text>
                </View>
              </View>
              <Text style={styles.postTime}>24/06/2020 às 15:00</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
