import {
  View,
  Text,
  Animated,
  TouchableOpacity,
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
import IconTvShow from '../../components/IconTvShow';
import ButtonReturn from '../../components/ButtonReturn';
import { AuthContext } from '../../context/auth';
import ModalAvaluate from '../../components/ModalAvaluate';
import BackDrop from '../../components/BackDrop';
import ButtonFavorite from '../../components/ButtonFavorite';
import PosterImage from '../../components/PosterImage';
import TextRated from '../../components/TextRated';
import Likeds from '../../components/Likeds';
import OverView from '../../components/OverView';
import ButtonRated from '../../components/ButtonRated';
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
  const [isFavorite, setIsFavorite] = useState(null);
  const { sessionId, account } = useContext(AuthContext);

  const [bodyHeight, setBodyHeight] = useState(new Animated.Value(-500));
  Animated.timing(bodyHeight, {
    duration: 1000,
    toValue: 0,
    useNativeDriver: false,
  }).start();

  const [dataFavorite, setDataFavorite] = useState({
    media_type: 'tv',
    media_id: id,
    favorite: false,
  });

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
          ListHeaderComponent={<HeaderTvShows
            navigate={navigation}
            type={type}
            id={id}
            tvShow={tvShow && tvShow}
          />}

        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
