import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Loading from '../../components/Loading';
import {getFavoriteMovie, getAccountDetails} from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import FavoriteDescription from '../../components/Movie/FavoriteDescription';
import MovieImage from '../../components/Movie/MovieImage';
import styles from './styles';

export default function FavoriteMovies({navigation}) {
  const [movies, setMovies] = useState();
  const [isFetching, setIsFetching] = useState(true);

  async function awaitFavoriteMovies() {
    try {
      const sessionId = await AsyncStorage.getItem('@CodeApi:session');
      const accountId = await getAccountDetails(sessionId);
      const data = await getFavoriteMovie(accountId.id, sessionId);
      const result = data.map(data => data.poster_path);
      setMovies(result);
    } catch (error) {
      console.warn(error);
    }
  }

  function onRefresh() {
    setIsFetching(true, () => {
      awaitFavoriteMovies();
    });
  }

  awaitFavoriteMovies();

  const renderHeader = () => {
    return (
      <View style={styles.BoxButtonAndText}>
        <FavoriteDescription navigation={navigation} />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.boxImage}>
        <MovieImage pathImage={item} posterSize={'w92'} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {movies ? (
        <FlatList
          data={movies}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          numColumns={4}
          onRefresh={() => onRefresh()}
          refreshing={isFetching}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
