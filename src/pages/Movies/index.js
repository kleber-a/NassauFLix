import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/EvilIcons';
import Loading from '../../components/Loading';
import ModalAvaluate from '../../components/ModalAvaluate';
import ButtonReturn from '../../components/ButtonReturn'
import {
  getCredits,
  getDetails,
  getState,
  postFavorite,
} from '../../service/api';
import styles from './styles';
import { AuthContext } from '../../context/auth';
import HeaderMoviesOrSeriesDetails from '../../components/MoviesOrSeriesDetails'
import { NavigationActions } from 'react-navigation';

export default function Movies({ route, navigation }) {
  const [id, type] = route.params;
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState(null);
  const [crew, setCrew] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [movieRated, setMovieRated] = useState(null);

  const [isFavorite, setIsFavorite] = useState(null);
  const [dataFavorite, setDataFavorite] = useState({
    media_type: 'movie',
    media_id: id,
    favorite: false,
  });
  const { sessionId, account } = useContext(AuthContext);

  async function awaitFavoriteMovies() {
    try {
      await postFavorite(account.id, sessionId, dataFavorite);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    async function awaitIsFavorite(bodyfavorite) {
      const { favorite } = await getState('movie', id, sessionId);
      setIsFavorite(favorite);
      setDataFavorite(prevState => ({ ...prevState, favorite: !favorite }));
    }
    awaitIsFavorite();
  }, [id, sessionId]);

  useEffect(() => {
    async function awaitGetDetails() {
      try {
        const dataDetails = await getDetails(id);
        setDetails(dataDetails);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetDetails();
  }, [id]);

  useEffect(() => {
    async function awaitGetCredits() {
      try {
        const dataCredits = await getCredits(id);
        setCast(dataCredits.cast);
        setCrew(dataCredits.crew);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetCredits();
  }, [id]);

  async function awaitAvaluates() {
    try {
      const stateMovie = await getState(type, id, sessionId);
      setMovieRated(stateMovie.rated.value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    awaitAvaluates();
  }, [isRated]);


  const renderItem = ({ item }) => {
    return (
      <View style={styles.containerCast}>
        <View style={styles.containerProfileImg}>
          {item.profile_path === null ? (
            <Text style={styles.userText}>{item.name[0]}</Text>
          ) : (
            <Image
              style={styles.imageFlatList}
              source={{
                uri: `https://image.tmdb.org/t/p/w45/${item.profile_path}`,
              }}
            />
          )}
        </View>
        <View style={styles.containerProfileText}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.character}>{item.character}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cast ? (
        <FlatList
          style={styles.viewFLatList}
          data={cast}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          ListHeaderComponent={<HeaderMoviesOrSeriesDetails route={route} navigation={navigation} />}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
