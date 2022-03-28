import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getCredits, getDetails} from '../../service/api';
import styles from '../../TvShows/styles';
import Loading from '../../components/Loading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function TvShow({}) {
  const id = route.params;
  const [details, setDetails] = useState([]);
  const [season_number, setSeasonNumber] = useState(null);
  const [episode_number, setEpisodeNumber] = useState(null);
  

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
        setSeasonNumber(dataCredits.season_number);
        setEpisodeNumber(dataCredits.episode_number);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetCredits();
  }, [id]);

  const renderItem = ({item}) => {
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

  const renderHeader = () => {
    return (
      <View>
        <Image
          style={styles.backGroundTvShow}
          source={{
            uri: `http://image.tmdb.org/t/p/w780/${details.backdrop_path}`,
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
                uri: `http://image.tmdb.org/t/p/w780/${details.poster_path}`,
              }}
            />
          </View>

          <View style={styles.detaisTvShowTitle}>
            <Text style={styles.titleTvShow}>
              {details.title}{' '}
              <Text style={styles.yearTvShow}>
                {new Date(details.release_date).getFullYear()}
              </Text>{' '}
              <Text style={styles.timeTvShow}>{details.runtime} min</Text>
            </Text>
    
          </View>
        </View>

        <View style={styles.datailRatedLiked}>
          <View style={styles.detailsRated}>
            <Text style={styles.ratedTvShow}>{details.vote_average}/10</Text>
          </View>

          <View style={styles.datailsLiked}>
            <View>
              <AntDesign name="heart" size={20} style={styles.heartIcon} />
            </View>
            <Text style={styles.liked}>
              {details && details.vote_count.toString().length > 3
                ? `${(details.vote_count / 1000).toFixed(1)}K`
                : details.vote_count}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {season_number ? (
        <FlatList
          style={styles.viewFLatList}
          data={season_number}
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
