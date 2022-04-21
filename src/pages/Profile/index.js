import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import ButtonMovie from '../../components/ButtonMovie';
import ButtonSeries from '../../components/ButtonSeries';
import Exit from 'react-native-vector-icons/Ionicons';
import UserImg from '../../components/User/UserImg';
import {AuthContext} from '../../context/auth';
import {
  getFRMovies,
  getFRTvShow,
  getAllRatedEvaliation,
} from '../../service/api';
import MovieImage from '../../components/Movie/MovieImage';
import MovieEvaluation from '../../components/Movie/MovieEvaluation';
import VerifyName from '../../components/User/VerifyName';
import Loading from '../../components/Loading';
import ButtonFilmList from '../../components/ButtonFilmList';
import ModalLogout from '../../components/ModalLogout';

export default function Profile({navigation}) {
  const {account, sessionId, logout} = useContext(AuthContext);
  const [evaluation, setEvaluation] = useState(null);
  const [type, setType] = useState({
    nameApi: 'movies',
    name: 'movie',
    nameRated: 'Avaliações de filmes recentes',
    nameFavorite: 'Filmes favoritos',
  });

  //Botão Movie e Séries
  const [btMovies, setBtMovies] = useState(true);
  const [btSeries, setBtSeries] = useState(false);

  //Filmes e Séries Avaliados e Favoritos
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  const [ratedMovies, setRatedMovies] = useState(null);
  const [favoriteTvShow, setFavoriteTvShow] = useState(null);
  const [ratedTvShow, setRatedTvShow] = useState(null);
  const [modalVisibleSucess, setModalVisibleSucess] = useState(false);
  async function awaitDataMovies() {
    const favoriteMoviesData = await getFRMovies(
      account.id,
      sessionId,
      'favorite',
    );
    setFavoriteMovies(favoriteMoviesData);
    const ratedMoviesData = await getFRMovies(account.id, sessionId, 'rated');
    setRatedMovies(ratedMoviesData);
    const evaluationData = await getAllRatedEvaliation(account.id, sessionId);
    setEvaluation(evaluationData);
  }

  async function awaitDataTvShow() {
    const favoriteTvShowData = await getFRTvShow(
      account.id,
      sessionId,
      'favorite',
    );
    setFavoriteTvShow(favoriteTvShowData);
    const ratedTvShowData = await getFRTvShow(account.id, sessionId, 'rated');
    setRatedTvShow(ratedTvShowData);
    const evaluationData = await getAllRatedEvaliation(account.id, sessionId);
    setEvaluation(evaluationData);
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      awaitDataMovies();
      awaitDataTvShow();
    });
  }, [navigation]);

  function selectionButtonMovie() {
    setType({
      nameApi: 'movies',
      name: 'movie',
      nameRated: 'Avaliações de filmes recentes',
      nameFavorite: 'Filmes favoritos',
    });
  }

  function selectionButtonSeries() {
    setType({
      nameApi: 'tv',
      name: 'tv',
      nameRated: 'Avaliações de série recentes',
      nameFavorite: 'Séries favoritas',
    });
  }

  return (
    <View style={styles.fullscreen}>
      <View style={styles.Perfil}>
        <ModalLogout
          setModalVisibleSucess={setModalVisibleSucess}
          modalVisibleSucess={modalVisibleSucess}
        />
        <TouchableOpacity
          onPress={() => {
            setModalVisibleSucess(!modalVisibleSucess);
          }}
          style={styles.buttonExitPerfil}>
          <Exit size={10} name="exit-outline" />
          <Text style={styles.TextExitPerfil}>Sair</Text>
        </TouchableOpacity>

        <View style={styles.userPerfil}>
          <UserImg />
        </View>
        <Text style={styles.namePerfil}>
          <VerifyName />
        </Text>
        <ButtonFilmList navigation={navigation} navigate={'MyLists'} />
        {evaluation ? (
          <View style={styles.valuePerfilContainer}>
            <Text style={styles.valuePerfil}>{evaluation}</Text>
            <Text style={styles.evaluationPerfil}>Avaliações</Text>
          </View>
        ) : (
          <Loading size={'large'} color={'#E9A6A6'} />
        )}
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonMovieContainer}
          onPress={() => {
            selectionButtonMovie();
            setBtMovies(true);
            setBtSeries(false);
          }}>
          <ButtonMovie loading={btMovies} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTvShowContainer}
          onPress={() => {
            selectionButtonSeries();
            setBtSeries(true);
            setBtMovies(false);
          }}>
          <ButtonSeries loading1={btSeries} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerList}>
        <View style={styles.boxListMovie}>
          <View style={styles.description}>
            <Text style={styles.textDescription}>
              {type.nameFavorite} de <VerifyName />
            </Text>
            <TouchableOpacity
              style={styles.buttonDescription}
              onPress={() => {
                navigation.navigate('InterationList', [
                  'favorite',
                  type.nameApi,
                  type.nameFavorite,
                  type.name,
                ]);
              }}>
              <Text style={styles.textButtonDescription}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listFavorites}>
            {favoriteMovies && favoriteTvShow ? (
              (btMovies ? favoriteMovies : favoriteTvShow).map(
                (favorites, index) =>
                  index <= 3 ? (
                    <TouchableOpacity
                      key={favorites.id}
                      style={styles.buttonListFavorites}
                      onPress={() => {
                        navigation.navigate(type.name, [
                          favorites.id,
                          type.name,
                        ]);
                      }}>
                      <MovieImage
                        pathImage={favorites.poster_path}
                        posterSize={'w92'}
                      />
                    </TouchableOpacity>
                  ) : null,
              )
            ) : (
              <Loading size={'large'} color={'#E9A6A6'} />
            )}
          </View>
        </View>

        <View style={styles.boxListTvShow}>
          <View style={styles.description}>
            <Text style={styles.textDescription}>
              {type.nameRated} <VerifyName />
            </Text>
            <TouchableOpacity
              style={styles.buttonDescription}
              onPress={() => {
                navigation.navigate('InterationList', [
                  'rated',
                  type.nameApi,
                  type.nameRated,
                  type.name,
                ]);
              }}>
              <Text style={styles.textButtonDescription}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listRated}>
            {ratedMovies && ratedTvShow ? (
              (btMovies ? ratedMovies : ratedTvShow).map((rateds, index) =>
                index <= 4 ? (
                  <TouchableOpacity
                    key={rateds.id}
                    style={styles.buttonListTvShow}
                    onPress={() => {
                      navigation.navigate(type.name, [rateds.id, type.name]);
                    }}>
                    <MovieImage
                      pathImage={rateds.poster_path}
                      posterSize={'w92'}
                    />
                    <MovieEvaluation votes={rateds.rating} />
                  </TouchableOpacity>
                ) : null,
              )
            ) : (
              <Loading size={'large'} color={'#E9A6A6'} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
