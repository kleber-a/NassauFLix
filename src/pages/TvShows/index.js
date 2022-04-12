import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import {
  getState,
  getTvShow,
  getTvShowSeason,
  postFavorite,
} from '../../service/api';
import styles from './styles';
import Loading from '../../components/Loading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconTvShow from '../../components/IconTvShow';
import Icon from 'react-native-vector-icons/EvilIcons';
import ButtonReturn from '../../components/ButtonReturn';
import { AuthContext } from '../../context/auth';
import ModalAvaluate from '../../components/ModalAvaluate';
import FormatNumber from '../../components/FormatNumber';
import BackDrop from '../../components/BackDrop';
import ButtonFavorite from '../../components/ButtonFavorite';
import PosterImage from '../../components/PosterImage';
import TextRated from '../../components/TextRated';
import Likeds from '../../components/Likeds';
import OverView from '../../components/OverView';
import ButtonRated from '../../components/ButtonRated';
import DescriptionTitle from '../../components/DescriptionTitle';
import HeaderTvShows from '../../components/HeaderTvShows';

export default function TvShows({ route, navigation }) {

  const [id, type] = route.params;
  const [currentIndex, setCurrentIndex] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [tvShowRated, setTvShowRated] = useState(null);
  const [tvShow, setTvShow] = useState(null);
  const [season, setSeason] = useState(null);
  const [selection, setSelection] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(new Animated.Value(-500));
  Animated.timing(bodyHeight, {
    duration: 1000,
    toValue: 0,
    useNativeDriver: false,
  }).start();

  const [isFavorite, setIsFavorite] = useState(null);
  const [dataFavorite, setDataFavorite] = useState({
    media_type: 'tv',
    media_id: id,
    favorite: false,
  });
  const { sessionId, account } = useContext(AuthContext);

  useEffect(() => {
    async function awaitGetTvShow() {
      try {
        const dataTvShow = await getTvShow(id);
        setTvShow(dataTvShow);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetTvShow();
  }, [id]);

  async function awaitFavoriteTvShow() {
    try {
      await postFavorite(account.id, sessionId, dataFavorite);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    async function awaitIsFavorite(bodyfavorite) {
      const { favorite } = await getState('tv', id, sessionId);
      setIsFavorite(favorite);
      setDataFavorite(prevState => ({ ...prevState, favorite: !favorite }));
    }
    awaitIsFavorite();
  }, [id, sessionId]);

  async function awaitAvaluates() {
    try {
      const stateMovie = await getState(type, id, sessionId);
      setTvShowRated(stateMovie.rated.value);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    awaitAvaluates();
  }, [isRated]);

  async function awaitGetSeasonTvShow(seasonId) {
    setSelection(!selection);
    try {
      const dataSeason = await getTvShowSeason(id, seasonId);
      setSeason(dataSeason);
    } catch (error) {
      console.warn(error);
    }
  };

  const renderHeader = () => {
    return (
      <View style={styles.containerRenderHeader}>                    
        <ModalAvaluate
          type={type}
          typeId={id}
          modalIsVisible={modalVisible}
          setModalVisible={setModalVisible}
          awaitAvaluates={awaitAvaluates}
          setIsRated={setIsRated}
        />
        <BackDrop
          BackDrop={tvShow.backdrop_path}
        />
        <ButtonReturn navigation={navigation} />
        <ButtonFavorite
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          awaitFavoriteTvShow={awaitFavoriteTvShow}
          setDataFavorite={setDataFavorite}
          id={id}
          mediaType={'tv'}
          awaitFavorite={awaitFavoriteTvShow}
        />
        <View style={styles.containerDetails}>
          <View style={styles.containerMovieImg}>
            <PosterImage
              posterPath={tvShow.poster_path} />
            <ButtonRated
              movieRated={tvShowRated} // Precisa de atenção mudar parametro de envio
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />
          </View>

          <View style={styles.detaisMoviesTitle}>
            <View style={styles.boxDetailsText}>
              <Text style={styles.detailsTvShowTitle}>
                {tvShow.name + ' '}
                <Text style={styles.detailsTvShowAge}>
                  {new Date(tvShow.first_air_date).getFullYear()}
                </Text>
              </Text>

              {tvShow && tvShow.created_by.length > 0 ? (
                <Text style={styles.criatedText}>
                  Criado por{' '}
                  {tvShow &&
                    tvShow.created_by.map((item, index) => {
                      return (
                        <Text key={index} style={styles.criatedName}>
                          {index > 1 && ', '}
                          {item.name}
                        </Text>
                      );
                    })}{' '}
                </Text>
              ) : null}
            </View>


            <View style={styles.boxDetailsIcons}>
              <TextRated detailsVoteAverage={tvShow.vote_average} />
              <Likeds detailsVoteCount={tvShow.vote_count.toString()} />
            </View>
          </View>
        </View>
        <View style={styles.containerOverView}>
          <OverView
            detailsOverView={tvShow.overview}
          />
        </View>
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.buttonSeason,
            selection &&
            index === currentIndex && { borderBottomColor: '#E9A6A6' },
          ]}
          onPress={() => {
            awaitGetSeasonTvShow(item.season_number);
            setBodyHeight(new Animated.Value(-1000));
            setCurrentIndex(index);
          }}>
          <View style={styles.listContainerSeasons}>
            <Text style={styles.textSeasons}>{item.name}</Text>
            <IconTvShow loading={selection && index === currentIndex} />
          </View>
        </TouchableOpacity>
        <View style={{ overflow: 'hidden' }}>
          {selection ? (
            <Animated.View style={{ top: bodyHeight }}>
              {season &&
                season.season_number === item.season_number &&
                season.episodes.map((episode, index) => {
                  return (
                    <View style={styles.containerEpisodes} key={index}>
                      <View style={styles.containerText}>
                        <Text style={styles.textEpisode}>
                          T
                          {season.season_number < 10 && season.season_number > 0
                            ? '0' + season.season_number
                            : season.season_number}
                          | E
                          {episode.episode_number < 10
                            ? '0' + episode.episode_number
                            : episode.episode_number}
                        </Text>
                        <Text style={styles.textTitleEpisode}>
                          {episode.name}
                        </Text>
                      </View>
                    </View>
                  );
                })}
            </Animated.View>
          ) : null}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {tvShow ? (
        <FlatList
          data={tvShow.seasons}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader
          }
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
