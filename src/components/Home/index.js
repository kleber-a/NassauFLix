import React, {useEffect, useState, useContext} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {getMovie, getTvShows} from '../../service/api';
import styles from './styles';
import Loading from '../Loading';
import UserImage from '../User/UserImage';
import PopularDescription from '../PopularDescription';
import MovieImage from '../Movie/MovieImage';
import MovieEvaluation from '../Movie/MovieEvaluation';

export default function Home({navigate, type}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function awaitMovie() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await getMovie(page);
      setData([...data, ...results]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function awaitTvShows() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await getTvShows(page);
      setData([...data, ...results]);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleType() {
    if (type === 'Movies') {
      awaitMovie();
    } else if (type === 'TvShows') {
      awaitTvShows();
    }
  }

  useEffect(() => {
    handleType();
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
          navigate.navigate(type, [item.id, type]);
        }}>
        <View style={styles.styleApiMovie}>
          <MovieImage pathImage={item.poster_path} posterSize={'w92'} />
          <MovieEvaluation votes={item.vote_average} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          onEndReached={page < 500 ? handleType : null}
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
