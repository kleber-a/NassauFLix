import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {getCredits, getDetails, getRate} from '../../service/api';
import styles from './styles';
import Loading from '../../components/Loading';
import ModalAvaluate from '../../components/ModalAvaluate';
import {AuthContext} from '../../context/auth';

export default function Movies({route, navigation}) {
  const id = route.params[0];
  const type = route.params[1];
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState(null);
  const [crew, setCrew] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [moviesRated, setMoviesRated] = useState(null);
  const [movieRated, setMovieRated] = useState(null);
  const {account, sessionId} = useContext(AuthContext);

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
      let ratedMovies = await getRate(account.id, sessionId, 1);
      if (
        (ratedMovies.page =
          ratedMovies.total_pages &&
          ratedMovies.results.map(movie => movie.id).includes(id))
      ) {
        setIsRated(true);
        setMovieRated(
          ratedMovies.results.find(movie => {
            return movie.id === id;
          }),
        );
      } else if (ratedMovies.page < ratedMovies.total_pages) {
        for (
          let pages = 1;
          ratedMovies.page < ratedMovies.total_pages;
          pages++
        ) {
          ratedMovies = await getRate(account.id, sessionId, pages);
          if (ratedMovies.results.map(movie => movie.id).includes(id)) {
            setIsRated(true);
            setMovieRated(
              ratedMovies.results.find(movie => {
                return movie.id === id;
              }),
            );
            pages = 500;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    awaitAvaluates();
  }, []);

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
      <View style={styles.containerHeader}>
        <ModalAvaluate
          type={type}
          idType={id}
          modalIsVisible={modalVisible}
          setModalVisible={setModalVisible}
          awaitAvaluates={awaitAvaluates}
          setIsRated={setIsRated}
        />
        <Image
          style={styles.backGroundMovie}
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
        <View style={styles.detailsMovies}>
          <View style={styles.containerMovieImg}>
            <Image
              style={styles.movieImg}
              source={{
                uri: `http://image.tmdb.org/t/p/w780/${details.poster_path}`,
              }}
            />
            {isRated ? (
              <View
                style={[
                  styles.rating,
                  isRated && {backgroundColor: '#8BE0EC'},
                ]}>
                <Text style={[styles.ratingText]}>
                  Sua nota: {movieRated && movieRated.rating}/10
                </Text>
                <TouchableOpacity
                  style={styles.ratingContainerIcon}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Icon
                    style={styles.ratingIcon}
                    name="pencil"
                    size={10}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={[styles.rating, isRated && {backgroundColor: '#E9A6A6'}]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={[styles.ratingText]}>AVALIE AGORA</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.detaisMoviesTitle}>
            <Text style={styles.titleMovie}>
              {details.title}{' '}
              <Text style={styles.yearMovie}>
                {new Date(details.release_date).getFullYear()}
              </Text>{' '}
              <Text style={styles.timeMovie}>{details.runtime} min</Text>
            </Text>
            <View>
              <Text style={styles.textAutor}>
                Direção por{' '}
                <Text style={styles.autorMovie}>
                  {crew &&
                    crew.find(profile => profile.job === 'Director').name}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.datailRatedLiked}>
          <View style={styles.detailsRated}>
            <Text style={styles.ratedMovie}>{details.vote_average}/10</Text>
          </View>

          <View style={styles.datailsLiked}>
            <View>
              <AntDesign name="heart" size={20} style={styles.heartIcon} />
            </View>
            <Text style={styles.liked}>
              {Math.floor(details.popularity).toString().length > 3
                ? Math.floor(details.popularity) + 'M'
                : Math.floor(details.popularity) + 'K'}
            </Text>
          </View>
        </View>

        <View style={styles.detailsDescription}>
          <Text style={styles.descriptionMovie}>{details.overview}</Text>
        </View>
        <View style={styles.boxCast}>
          <Text style={styles.cast}>Elenco</Text>
          <View style={styles.line} />
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
          ListHeaderComponent={renderHeader}
        />
      ) : (
        <Loading />
      )}
    </View>
  );
}
