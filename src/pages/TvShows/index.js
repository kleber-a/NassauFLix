import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {getTvShow, getTvShowSeason} from '../../service/api';
import styles from './styles';
import Loading from '../../components/Loading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import IconTvShow from '../../components/IconTvShow';
import ButtonReturn from '../../components/ButtonReturn';

export default function TvShows({route, navigation}) {
  const id = route.params;
  const [currentIndex, setCurrentIndex] = useState();
  const [previousIndex, setPreviousIndex] = useState();
  const [tvShow, setTvShow] = useState(null);
  const [season, setSeason] = useState(null);
  const [selection, setSelection] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(new Animated.Value(-500));
  Animated.timing(bodyHeight, {
    duration: 1000,
    toValue: 0,
    useNativeDriver: false,
  }).start();

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

  async function awaitGetSeasonTvShow(season, index) {
    setSelection(!selection);
    setPreviousIndex(index);
    try {
      const dataSeason = await getTvShowSeason(id, season);
      setSeason(dataSeason);
    } catch (error) {
      console.warn(error);
    }
  }
  const renderHeader = () => {
    return (
      <View style={styles.containerRenderHeader}>
        <Image
          style={styles.backGroundHeader}
          source={{
            uri: `http://image.tmdb.org/t/p/w780/${tvShow.backdrop_path}`,
          }}
        />
        <ButtonReturn navigation={navigation} />
        <TouchableOpacity style={styles.containerButtonStar}>
          <Feather name="star" size={25} color={'black'} />
        </TouchableOpacity>
        <View style={styles.detailsTvShow}>
          <Image
            style={styles.posterTvShow}
            source={{
              uri: `http://image.tmdb.org/t/p/w780/${tvShow.poster_path}`,
            }}
          />
          <View style={styles.containerDetails}>
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
              <Text style={styles.tvShowsRate}>{tvShow.vote_average}/10</Text>

              <View style={styles.detailsLiked}>
                <AntDesign name="heart" size={20} style={styles.heartIcon} />
                <Text style={styles.liked}>
                  {tvShow.length > 0 && tvShow.vote_count.toString().length > 3
                    ? `${(tvShow.vote_count / 1000).toFixed(1)}K`
                    : tvShow.vote_count}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.textDetailsTvDescription}>
          {tvShow && tvShow.overview}
        </Text>
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            styles.buttonSeason,
            selection &&
              index === currentIndex && {borderBottomColor: '#E9A6A6'},
          ]}
          onPress={() => {
            awaitGetSeasonTvShow(item.season_number, index);
            setBodyHeight(new Animated.Value(-1000));
            setCurrentIndex(index);
          }}>
          <View style={styles.listContainerSeasons}>
            <Text style={styles.textSeasons}>{item.name}</Text>
            <IconTvShow loading={selection && index === currentIndex} />
          </View>
        </TouchableOpacity>
        <View style={{overflow: 'hidden'}}>
          {selection ? (
            <Animated.View style={{top: bodyHeight}}>
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
          ListHeaderComponent={renderHeader}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
