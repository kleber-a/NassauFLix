import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList} from 'react-native';
import Loading from '../../components/Loading';
import {getFavoriteMovie, getAccountDetails} from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import FavoriteDescription from '../../components/Movie/FavoriteDescription';
import MovieImage from '../../components/Movie/MovieImage';
import styles from './styles';
import {AuthContext} from '../../context/auth';

export default function FavoriteMovies({navigation}) {
  const [movies, setMovies] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const {account, sessionId} = useContext(AuthContext);

  // function onRefresh() {
  //   setIsFetching(true, () => {
  //     awaitFavoriteMovies();
  //   });
  // }

  useEffect(() => {
    async function awaitFavoriteMovies() {
      try {
        const dataFavorite = await getFavoriteMovie(account.id, sessionId);
        const result = dataFavorite.map(data => data.poster_path);
        setMovies(() => result);
      } catch (error) {
        console.warn(error);
      }
    }
    console.warn('oi');
    awaitFavoriteMovies();
  }, []);

  const renderHeader = () => {
    return <FavoriteDescription navigation={navigation} />;
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
          // onRefresh={() => onRefresh()}
          // refreshing={isFetching}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
