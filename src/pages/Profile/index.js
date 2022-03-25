import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import ButtonMovie from '../../components/ButtonMovie';
import ButtonSeries from '../../components/ButtonSeries';
import Exit from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import UserImg from '../../components/User/UserImg';
import {AuthContext} from '../../context/auth';
import { getFavoriteMovies,getFavoriteTvShow,getRatedMovies,getRatedTvShow,} from '../../service/api';
import MovieImage from '../../components/Movie/MovieImage';
import MovieEvaluation from '../../components/Movie/MovieEvaluation';
import VerifyName from '../../components/User/VerifyName';
import Loading from '../../components/Loading'

export default function Profile() {
  const {account} = useContext(AuthContext);
  const [evaluation, setEvaluation] = useState(null);

  //Lista Favoritos e Avaliados
  const [listF, setListF] = useState(null);
  const [listR, setListR] = useState(null);
  const [nameList, setNameList] = useState(null);

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
      const sessionId = await AsyncStorage.getItem('@CodeApi:session');
      const favoriteMovies = await getFavoriteMovies(account.id, sessionId);
      setFavoriteMovies(favoriteMovies);
      const ratedMovies = await getRatedMovies(account.id, sessionId);
      setRatedMovies(ratedMovies);
      const favoriteTvShow = await getFavoriteTvShow(account.id, sessionId);
      setFavoriteTvShow(favoriteTvShow);
      const ratedTvShow = await getRatedTvShow(account.id, sessionId);
      setRatedTvShow(ratedTvShow);
      setEvaluation(ratedMovies.length + ratedTvShow.length);

      setBtMovies(true);
      setBtSeries(false);
      setListF(favoriteMovies);
      setListR(ratedMovies);
      setNameList('Filmes');
    }
    awaitData();
  }, []);

  function selectionButtonMovie() {
    setBtMovies(true);
    setBtSeries(false);
    setListF(favoriteMovies);
    setListR(ratedMovies);
    setNameList('Filmes');
  }
  function selectionButtonSeries() {
    setBtSeries(true);
    setBtMovies(false);
    setListF(favoriteTvShow);
    setListR(ratedTvShow);
    setNameList('Séries');
  }
  return (
    <View style={styles.fullscreen}>
      <View style={styles.boxPerfil}>
        <TouchableOpacity
          onPress={() => {
            console.warn('Sair')
          }}
          style={styles.buttonBoxExit}>
          <Exit size={10} name="exit-outline" />
          <Text style={styles.TextBoxExit}>Sair</Text>
        </TouchableOpacity>
         
          <View style={styles.userBoxPerfil}>
          <UserImg />
        </View>
        <Text style={styles.nameBoxPerfil}>
          <VerifyName />
        </Text>
        {evaluation? 
          <>
        <Text style={styles.valueBoxPerfil}>{evaluation}</Text>
        <Text style={styles.evaluationBoxPerfil}>Avaliações</Text> 
        </>
          : <Loading />}
        
      </View>

      <View style={styles.boxButton}>
        <TouchableOpacity
          style={styles.button1BoxButton}
          onPress={() => selectionButtonMovie()}>
          <ButtonMovie loading={btMovies} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2BoxButton}
          onPress={() => selectionButtonSeries()}>
          <ButtonSeries loading1={btSeries} />
        </TouchableOpacity>
      </View>

      <View style={styles.boxList}>
        <View style={styles.favoritesListBoxList}>
          <View style={styles.boxFavoritesList}>
            <Text style={styles.textBoxFavoritesList}>
              {nameList} favoritos de <VerifyName />
            </Text>
            <TouchableOpacity style={styles.buttonBoxFavoritesList}>
              <Text style={styles.textButtonBoxFavoritesList}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listBoxList}>
            {listF? (
              listF.map((listF, index) =>
                index <= 3 ? (
                  <TouchableOpacity
                    key={listF.id}
                    style={styles.buttonListBoxList}>
                    <MovieImage
                      pathImage={listF.poster_path}
                      posterSize={'w92'}
                    />
                  </TouchableOpacity>
                ) : null,
              )): <Loading />
              }
          </View>
        </View>

        <View style={styles.evaluationListBoxList}>
          <View style={styles.boxFavoritesList}>
            <Text style={styles.textBoxFavoritesList}>
              Avaliações de {nameList} recentes de <VerifyName />
            </Text>
            <TouchableOpacity style={styles.buttonBoxFavoritesList}>
              <Text style={styles.textButtonBoxFavoritesList}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listBoxList}>
            {listR ? (
              listR.map((listR, index) =>
                index <= 3 ? (
                  <TouchableOpacity
                    key={listR.id}
                    style={styles.buttonListBoxList}>
                    <MovieImage
                      pathImage={listR.poster_path}
                      posterSize={'w92'}
                    />
                    <MovieEvaluation votes={listR.vote_average} />
                  </TouchableOpacity>
                ) : null,
              )) : <Loading />
            }
          </View>
        </View>
      </View>
    </View>
  );
}
