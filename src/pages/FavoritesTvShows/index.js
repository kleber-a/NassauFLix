import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getAccountDetails, getFavoritesTvShows} from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import MovieImage from '../../components/Movie/MovieImage';

export default function FavoritesTvShows({navigation}) {
  const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [favoritesTvShows, setfavoritesTvShows] = useState([]);

  useEffect(() => {
    async function awaitFavoritesTvShows() {
      try {
        const sessionId = await AsyncStorage.getItem('@CodeApi:session');
        const account = await getAccountDetails(sessionId);
        const favoritesTvShows = await getFavoritesTvShows(
          account.id,
          sessionId,
        );
        setfavoritesTvShows(favoritesTvShows);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitFavoritesTvShows();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.return}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.button} name="arrowleft" size={25} />
        </TouchableOpacity>
        <View style={styles.boxHeader}>
          <Text style={styles.textFavoritesTvShow}>
            Séries favoritas do <Text style={{color: 'pink'}}>John!</Text>
          </Text>
        </View>

          <FlatList
            data={favoritesTvShows.results}
            numColumns={4}
            keyExtractor={(item, index) => item}
            renderItem={item => (
              <View style={styles.boxImage}>
                <MovieImage
                  style={styles.Image}
                  pathImage={item.item.poster_path}
                  posterSize={'w92'}
                  height={130}
                />
              </View>
            )}
          />
        
      </View>
    </>
  );
}
