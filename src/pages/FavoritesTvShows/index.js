import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {getFavoritesTvShows} from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import MovieImage from '../../components/Movie/MovieImage';
import {AuthContext} from '../../context/auth';
import ButtonReturn from '../../components/ButtonReturn';

export default function FavoritesTvShows({navigation}) {
  const [favoritesTvShows, setfavoritesTvShows] = useState([]);
  const {account, sessionId} = useContext(AuthContext);
  const [name, setName] = useState();

  useEffect(() => {
    async function awaitFavoritesTvShows() {
      try {
        const favoritesTvShows = await getFavoritesTvShows(
          account.id,
          sessionId,
        );
        setfavoritesTvShows(favoritesTvShows);
        if (account.name) {
          setName(account.name);
        } else {
          setName(account.username);
        }
      } catch (error) {
        console.warn(error);
      }
    }
    awaitFavoritesTvShows();
  }, []);

  const renderHeader = () => {
    return (
      <View>
        <ButtonReturn navigation={navigation} />
        <View style={styles.boxHeader}>
          <Text style={styles.textFavoritesTvShow}>
            Séries favoritas de <Text style={{color: 'pink'}}>{name}!</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={favoritesTvShows && favoritesTvShows.results}
          numColumns={4}
          keyExtractor={(item, index) => item.id}
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
