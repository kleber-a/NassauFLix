import React, {useState, useEffect, useContext} from 'react';
import {View, FlatList} from 'react-native';
import Loading from '../../components/Loading';
import {getFavorites} from '../../service/api';
import FavoriteDescription from '../../components/Movie/FavoriteDescription';
import MovieImage from '../../components/Movie/MovieImage';
import styles from './styles';
import {AuthContext} from '../../context/auth';

export default function Rateds({navigation, route}) {
  const [type, nameFavorite] = route.params;
  const [movies, setMovies] = useState([]);
  const {account, sessionId} = useContext(AuthContext);
  useEffect(() => {
    navigation.addListener('focus', () => {
      async function awaitFavorites() {
        const dataFavorite = await getFavorites(type, account.id, sessionId);
        const result = dataFavorite.map(data => data.poster_path);
        setMovies(result);
      }
      awaitFavorites();
    });
  }, [account.id, sessionId, type, navigation]);

  const renderHeader = () => {
    return (
      <FavoriteDescription
        navigation={navigation}
        nameFavorite={nameFavorite}
      />
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
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
