import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {getMovie, getAccountDetails} from '../../service/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../../components/Loading';

export default function Home({navigation}) {
  const [name, setName] = useState(null);
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
      console.warn(error);
    }
  }

  useEffect(() => {
    awaitMovie();
  }, []);

  useEffect(() => {
    async function awaitUser() {
      const sessionId = await AsyncStorage.getItem('@CodeApi:session');
      const count = await getAccountDetails(sessionId);
      setName(count.name);
    }
    awaitUser();
  }, []);

  const renderHeader = () => {
    return (
      <View style={styles.boxHeader}>
        <Text style={styles.greetingText}>
          Olá, <Text style={styles.greetingText__username}>{name && name}</Text>
        </Text>
        <Text style={styles.textDescription}>
          Reveja ou acompanhe os filmes que você assistiu...
        </Text>
        <Text style={styles.textPopularMovies}>Filmes populares este mês</Text>
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
        onPress={() => {
          navigation.navigate('Movies');
        }}>
        <View style={styles.styleApiMovie}>
          <Image
            style={styles.imgstyle}
            source={{
              uri: `http://image.tmdb.org/t/p/w92/${item.poster_path}`,
            }}
          />
        </View>
        <View style={styles.avaluationstyle}>
          <Icon style={styles.icon} name="star" />
          <Text style={styles.avaluationstyle}>{item.vote_average}/10</Text>
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
