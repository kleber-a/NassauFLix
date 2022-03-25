import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import ButtonMovie from '../../components/ButtonMovie';
import ButtonSeries from '../../components/ButtonSeries';
import Exit from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {getAccountDetails, getFavoriteMovies, getFavoriteTvShow, getRatedMovies, getRatedTvShow} from '../../service/api';

export default function Profile() {
  const lista = [1, 2, 3, 4];
  const [profile, setProfile] = useState([]);
  const [movies, setMovies] = useState(false);
  const [series, setSeries] = useState(false);
  const [name, setName] = useState(false);
  const [icon, setIcon] = useState(null);
  const [evaluation,setEvaluation] = useState(null)
  const [teste,setTeste]= useState(null)
  const [teste1,setTeste1]= useState(null)

  useEffect(() => {
    async function getProfile() {
      try {
        const sessionId = await AsyncStorage.getItem('@CodeApi:session');
        const account = await getAccountDetails(sessionId);
        setProfile(account);
        const ratedTvShow = await getRatedTvShow(account.id,sessionId)
        const ratedMovies = await getRatedMovies(account.id,sessionId)
        const favoriteMovies = await getFavoriteMovies(account.id,sessionId)
        
        setTeste(ratedMovies)
        setTeste1(favoriteMovies)
        /* Componentizar*/
        if (account.name) {
          setName(account.name);
          setIcon(
            account.avatar.tmdb.avatar_path === null
              ? account.name[0]
              : account.avatar.tmdb.avatar_path,
          );
        } else {
          setName(account.username);
          setIcon(
            account.avatar.tmdb.avatar_path === null
              ? account.username[0]
              : account.avatar.tmdb.avatar_path,
          );
        }
      } catch (error) {
        console.warn(error);
      }
    }
    getProfile();
  }, []);

  console.warn(teste);
  

  return (
    <View style={styles.fullscreen}>
      <View style={styles.boxPerfil}>
        <TouchableOpacity
          onPress={() => {
            getProfile();
          }}
          style={styles.buttonBoxExit}>
          <Exit size={10} name="exit-outline" />
          <Text style={styles.TextBoxExit}>Sair</Text>
        </TouchableOpacity>
          
          {/* Componentizar*/}
        <View style={styles.userBoxPerfil}>
          {icon && icon.length === 1 ? (
            <Text>{icon}</Text>
          ) : (
            <Image
              style={styles.imageUserBoxPerfil}
              source={{
                uri: `http://image.tmdb.org/t/p/w500/${icon}`,
              }}
            />
          )}
        </View>
        <Text style={styles.nameBoxPerfil}>{name}</Text>
        <Text style={styles.valueBoxPerfil}>{evaluation && evaluation}</Text>
        <Text style={styles.evaluationBoxPerfil}>Avaliações</Text>
      </View>

      <View style={styles.boxButton}>
        <TouchableOpacity
          style={styles.button1BoxButton}
          onPress={() => setMovies(!movies)}>
          <ButtonMovie loading={movies} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2BoxButton}
          onPress={() => setSeries(!series)}>
          <ButtonSeries loading1={series} />
        </TouchableOpacity>
      </View>

      <View style={styles.boxList}>
        <View style={styles.favoritesListBoxList}>
          <View style={styles.boxFavoritesList}>
            <Text style={styles.textBoxFavoritesList}>
              Filmes favoritos de John
            </Text>
            <TouchableOpacity style={styles.buttonBoxFavoritesList}>
              <Text style={styles.textButtonBoxFavoritesList}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listBoxList}>
            {lista &&
              lista.map(lista => (
                <TouchableOpacity
                  key={lista}
                  onPress={() => {
                    console.warn(profile);
                  }}
                  style={styles.buttonListBoxList}
                />
              ))}
          </View>
        </View>

        <View style={styles.evaluationListBoxList}>
          <View style={styles.boxFavoritesList}>
            <Text style={styles.textBoxFavoritesList}>
              Filmes favoritos de John
            </Text>
            <TouchableOpacity style={styles.buttonBoxFavoritesList}>
              <Text style={styles.textButtonBoxFavoritesList}>Ver tudo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listBoxList}>
            {lista &&
              lista.map(lista => (
                <TouchableOpacity
                  key={lista}
                  style={styles.buttonListBoxList}
                />
              ))}
          </View>
        </View>
      </View>
    </View>
  );
}
