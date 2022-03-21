import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {getMovie, getAccountDetails, getChangeMovies} from '../../service/api';

import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../components/Loading';
import UserImage from '../../components/User/UserImage';
import PopularDescription from '../../components/Buttons/PopularDescription';
import MovieImage from '../../components/Movie/MovieImage';
import MovieEvaluation from '../../components/Movie/MovieEvaluation';

export default function Home({navigation}) {
  const [name, setName] = useState(false);
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(null);
  const [icon, setIcon] = useState(null);

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

  useEffect(() => {
    awaitMovie();
  }, []);

  useEffect(() => {
    async function awaitUser() {
      try {
        const sessionId = await AsyncStorage.getItem('@CodeApi:session');
        const account = await getAccountDetails(sessionId);
        if (account.name) {
          setName(account.name);
          setIcon(
            account.avatar.tmdb.avatar_path === null
              ? account.name[0]
              : account.avatar.tmdb.avatar_path,
          );
        } else {
          setName(account.username);
          setIcon(
            account.avatar.tmdb.avatar_path === null
              ? account.username[0]
              : account.avatar.tmdb.avatar_path,
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    async function awaitChange() {
      const newMovies = await getChangeMovies(new Date());
      setNotify(newMovies.results);
    }
    awaitChange();
    awaitUser();
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.boxHeader}>
        <PopularDescription name={name} type={'Filmes'} />
        <UserImage icon={icon} notify={notify} />
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
          navigation.navigate('Movies', item.id);
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
      {name ? (
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
