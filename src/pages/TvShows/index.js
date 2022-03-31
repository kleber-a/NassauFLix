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
  console.warn(tvShow.overview)
  useEffect(() => {
    async function awaitGetSeasonTvShow() {
      try {
        const dataSeason = await getTvShowSeason(id, 1);
        setSeason(dataSeason);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetSeasonTvShow();
  }, [id]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.containerSeasons}>
          <Icon name={'chevron-down'} style={styles.icon} />

          <Text style={styles.textSeasons}>{item.name}</Text>
        </View>
       
        <View>
          {season &&
            season.episodes.map(episode => {
              return (
                <TouchableOpacity style={styles.containerEpisodes}>
                  <Text style={styles.textEpisode}>{episode.name}</Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View>
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
          <View>
            <Image
              style={styles.capaTvShow}
              source={{
                uri: `http://image.tmdb.org/t/p/w780/${tvShow.poster_path}`,
              }}
            />
          </View>

          <View style={styles.detailsTvShowTitle}></View>
        </View>

        <View style={styles.detailRatedLiked}>
          <View style={styles.detailsRated}>
            <Text style={styles.tvShowsRate}>{tvShow.vote_average}/10</Text>
          </View>

          <View style={styles.detailsLiked}>
            <View>
              <AntDesign name="heart" size={20} style={styles.heartIcon} />
            </View>
            <Text style={styles.liked}>
              {tvShow.length > 0 && tvShow.vote_count.toString().length > 3
                ? `${(tvShow.vote_count / 1000).toFixed(1)}K`
                : tvShow.vote_count}
            </Text>
          </View>
        </View>
        <View style={styles.detailsTvDescription}>
          <Text>{tvShow.overview}</Text>
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
