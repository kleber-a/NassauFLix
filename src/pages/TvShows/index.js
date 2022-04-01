import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getTvShow, getTvShowSeason} from '../../service/api';
import styles from './styles';
import Loading from '../../components/Loading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import IconTvShow from '../../components/IconTvShow';
import ButtonReturn from '../../components/ButtonReturn';

export default function TvShows({route, navigation}) {
  const id = route.params;
  const [details, setDetails] = useState([]);
  const [tvShow, setTvShow] = useState(null);
  const [season, setSeason] = useState(null);
  const [episode_number, setEpisodeNumber] = useState(null);

  const [selection, setSelection] = useState(false);

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

  // useEffect(() => {
  //   awaitGetSeasonTvShow();
  // }, [id]);

  async function awaitGetSeasonTvShow(season) {
    setSelection(!selection);
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

  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={styles.buttonSeason}
          onPress={() => awaitGetSeasonTvShow(item.season_number)}>
          <View style={styles.listContainerSeasons}>
            <Text style={styles.textSeasons}>{item.name}</Text>
            <IconTvShow loading={selection} />
          </View>
        </TouchableOpacity>
        {selection === true ? (
          <View>
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
          </View>
        ) : null}
      </>
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
