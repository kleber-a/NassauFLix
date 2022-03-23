import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {getMovie} from '../../service/api';
import styles from './styles';
import Loading from '../Loading';
import UserImage from '../User/UserImage';
import PopularDescription from '../PopularDescription';
import MovieImage from '../Movie/MovieImage';
import MovieEvaluation from '../Movie/MovieEvaluation';
import {AuthContext} from '../../context/auth';

export default function Home({navigate, type}) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function awaitMovie() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await getMovie(page);
      setMovie([...movie, ...results]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function awaitTvShow() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await getMovie(page);
      setMovie([...movie, ...results]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (type === 'Movies') {
      awaitMovie();
    } else if (type === 'TvShows') {
      awaitTvShow();
    }
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.boxHeader}>
        <PopularDescription type={type === 'Movies' ? 'Filmes' : 'Séries'} />
        <UserImage size={50} />
      </View>
    );
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <Loading />;
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.containerMovie}
        onPress={() => {
          navigate.navigate(type, item.id);
        }}>
        <View style={styles.styleApiMovie}>
          <MovieImage pathImage={item.poster_path} />
          <MovieEvaluation votes={item.vote_average} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {movie.length > 0 ? (
        <FlatList
          data={movie}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          onEndReached={page < 500 ? awaitMovie : null}
          onEndReachedThreshold={0.3}
          numColumns={4}
          renderItem={renderItem}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
