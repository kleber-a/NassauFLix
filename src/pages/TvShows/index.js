import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  getCredits,
  getDetails,
  getTvShow,
  getTvShowSeason,
} from '../../service/api';
import styles from './styles';
import Loading from '../../components/Loading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/EvilIcons';

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
  console.warn(tvShow);
  useEffect(() => {
    awaitGetSeasonTvShow();
  }, [id]);
  async function awaitGetSeasonTvShow(season) {
    try {
      const dataSeason = await getTvShowSeason(id, season);
      setSeason(dataSeason);
      setSelection(!selection);
    } catch (error) {
      console.warn(error);
    }
  }

  console.warn(selection);
  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => awaitGetSeasonTvShow(item.season_number)}>
          <View style={styles.containerSeasons}>
            <Text style={styles.textSeasons}>{item.name}</Text>
            <Icon name={'chevron-down'} style={styles.icon} />
          </View>
        </TouchableOpacity>
        {selection === true ? (
          <View>
            {season &&
              season.season_number === item.season_number &&
              season.episodes.map(episode => {
                return (
                  <View style={styles.containerEpisodes}>
                    <View style={styles.containerText}>
                      <Text style={styles.textEpisode}>
                        T{season.season_number} | E{episode.episode_number}
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

  const renderHeader = () => {
    return (
      <View style={styles.containerRenderHeader}>
        <Image
          style={styles.backGroundtvShow}
          source={{
            uri: `http://image.tmdb.org/t/p/w780/${tvShow.backdrop_path}`,
          }}
        />

        <TouchableOpacity
          style={styles.containerButtonBack}
          onPress={() => navigation.goBack()}>
          <AntDesign style={styles.buttonBack} name="arrowleft" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButtonStar}>
          <Feather name="star" size={25} style={styles.buttonStar} />
        </TouchableOpacity>

        <View style={styles.detailsTvShow}>
          <Image
            style={styles.capaTvShow}
            source={{
              uri: `http://image.tmdb.org/t/p/w780/${tvShow.poster_path}`,
            }}
          />
          <View style={styles.containerDetails}>
            <View style={styles.boxDetails1}>
              <Text style={styles.detailsTvShowTitle}>
                {tvShow.name + ' '}
                <Text style={styles.detailsTvShowAge}>
                  {new Date(tvShow.first_air_date).getFullYear()}
                </Text>
              </Text>

              <Text>
                Criado por{' '}
                {tvShow &&
                  tvShow.created_by.map(item => {
                    return <Text>{item.name}</Text>;
                  })}{' '}
              </Text>
            </View>
            <View style={styles.detailRatedLiked}>
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
       
        <View style={styles.detailsTvDescription}>
          <Text style={styles.textDetailsTvDescription}>{tvShow && tvShow.overview}</Text>
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
