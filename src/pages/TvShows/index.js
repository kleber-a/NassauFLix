import {View, Text, Animated, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getTvShow, getTvShowSeason} from '../../service/api';
import styles from './styles';
import Loading from '../../components/Loading';
import IconTvShow from '../../components/IconTvShow';
import HeaderTvShows from '../../components/HeaderTvShows';

export default function TvShows({route, navigation}) {
  const [id, type] = route.params;
  const [currentIndex, setCurrentIndex] = useState();
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

  async function awaitGetSeasonTvShow(seasonId) {
    try {
      const dataSeason = await getTvShowSeason(id, seasonId);
      setSeason(dataSeason);
    } catch (error) {
      console.warn(error);
    }
  }

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
            awaitGetSeasonTvShow(item.season_number);
            index !== currentIndex
              ? setSelection(true)
              : setSelection(!selection);
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

  return tvShow ? (
    <View style={styles.container} >
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
    </View>
  ) : (
    <View style={styles.containerLoading}>
      <Loading />
    </View>
  )
}


