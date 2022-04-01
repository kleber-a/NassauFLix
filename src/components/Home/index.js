import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {getMovie, getMoviesOrTv, getTvShows} from '../../service/api';
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

  async function awaitMoviesOrTv() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const results = await getMoviesOrTv(Object.keys(type)[0], page);
      setPage(page + 1);
      setData([...data, ...results]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    awaitMoviesOrTv();
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.boxHeader}>
        <PopularDescription type={Object.values(type)[0]} />
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
          navigate.navigate(Object.keys(type)[0], [
            item.id,
            Object.keys(type)[0],
          ]);
        }}>
        <View style={styles.styleApiMovie}>
          <MovieImage pathImage={item.poster_path} posterSize={'w92'} />
          <MovieEvaluation votes={item.vote_average} />
        </View>
      </TouchableOpacity>
    )};

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          onEndReached={page < 500 ? awaitMoviesOrTv : null}
          onEndReachedThreshold={0.3}
          numColumns={4}
          renderItem={renderItem}
        />
      ) : (
        <Loading size={77} color={'#ffffff'} />
      )}
    </View>
  );
}
