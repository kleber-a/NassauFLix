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

export default function Profile({navigation}) {
  const {account, sessionId, logout} = useContext(AuthContext);
  const [evaluation, setEvaluation] = useState(null);
  const [type, setType] = useState('movies');

  //Lista Favoritos e Avaliados
  const [listFavorites, setListFavorites] = useState(null);
  const [listRated, setListRated] = useState(null);
  const [nameRated, setNameRated] = useState('Avaliações de filmes recentes');
  const [nameFavorite, setNameFavorite] = useState('Filmes favoritos');

  //Botão Movie e Séries
  const [btMovies, setBtMovies] = useState(false);
  const [btSeries, setBtSeries] = useState(false);

  //Filmes e Séries Avaliados e Favoritos
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  const [ratedMovies, setRatedMovies] = useState(null);
  const [favoriteTvShow, setFavoriteTvShow] = useState(null);
  const [ratedTvShow, setRatedTvShow] = useState(null);

  useEffect(() => {
    async function awaitData() {
      const favoriteMovies = await getFRMovies(
        account.id,
        sessionId,
        'favorite',
      );
      setFavoriteMovies(favoriteMovies);
      const ratedMovies = await getFRMovies(account.id, sessionId, 'rated');
      setRatedMovies(ratedMovies);
      const favoriteTvShow = await getFRTvShow(
        account.id,
        sessionId,
        'favorite',
      );
      setFavoriteTvShow(favoriteTvShow);
      const ratedTvShow = await getFRTvShow(account.id, sessionId, 'rated');

      const evaluation = await getAllRatedEvaliation(account.id, sessionId);
      setEvaluation(evaluation);

      setRatedTvShow(ratedTvShow);

      setBtMovies(true);
      setBtSeries(false);
      setListFavorites(favoriteMovies);
      setListRated(ratedMovies);
    }
    navigation.addListener('focus', () => {
      awaitData();
    });
  }, [account.id, sessionId, navigation]);
  function selectionButtonMovie() {
    setType('movies');
    setNameRated('Avaliações de filmes recentes');
    setNameFavorite('Filmes favoritos');
    setBtMovies(true);
    setBtSeries(false);
    setListFavorites(favoriteMovies);
    setListRated(ratedMovies);
  }
  function selectionButtonSeries() {
    setType('tv');
    setNameRated('Avaliações de série recentes');
    setNameFavorite('Séries favoritas');
    setBtSeries(true);
    setBtMovies(false);
    setListFavorites(favoriteTvShow);
    setListRated(ratedTvShow);
  }

  const showAlert = () => {
    Alert.alert(
      'Atenção',
      'Deseja mesmo sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => logout(),
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.fullscreen}>
      <View style={styles.Perfil}>
        <TouchableOpacity
          onPress={() => {
            showAlert();
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
        {evaluation ? (
          <>
            <Text style={styles.valuePerfil}>{evaluation}</Text>
            <Text style={styles.evaluationPerfil}>Avaliações</Text>
          </>
        ) : (
          <Loading size={'large'} color={'#E9A6A6'} />
        )}
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonMovieContainer}
          onPress={() => selectionButtonMovie()}>
          <ButtonMovie loading={btMovies} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonTvShowContainer}
          onPress={() => selectionButtonSeries()}>
          <ButtonSeries loading1={btSeries} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerList}>
        <View style={styles.boxListMovie}>
          <View style={styles.description}>
            <Text style={styles.textDescription}>
              {nameFavorite} de <VerifyName />
            </Text>
            <TouchableOpacity
              style={styles.buttonDescription}
              onPress={() => {
                navigation.navigate('InterationList', [
                  'favorite',
                  type,
                  nameFavorite,
                ]);
              }}>
              <Text style={styles.textButtonDescription}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listFavorites}>
            {listFavorites ? (
              listFavorites.map((listFavorites, index) =>
                index <= 3 ? (
                  <TouchableOpacity
                    key={listFavorites.id}
                    style={styles.buttonListFavorites}
                    onPress={() => {
                      navigation.navigate(type, [listFavorites.id, type]);
                    }}>
                    <MovieImage
                      pathImage={listFavorites.poster_path}
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
              {nameRated} <VerifyName />
            </Text>
            <TouchableOpacity
              style={styles.buttonDescription}
              onPress={() => {
                navigation.navigate('InterationList', [
                  'rated',
                  type,
                  nameRated,
                ]);
              }}>
              <Text style={styles.textButtonDescription}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listRated}>
            {listRated ? (
              listRated.map((listRated, index) =>
                index <= 4 ? (
                  <TouchableOpacity
                    key={listRated.id}
                    style={styles.buttonListTvShow}
                    onPress={() => {
                      navigation.navigate(type, [listRated.id, type]);
                    }}>
                    <MovieImage
                      pathImage={listRated.poster_path}
                      posterSize={'w92'}
                    />
                    <MovieEvaluation votes={listRated.vote_average} />
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
