import { View } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import ModalAvaluate from '../ModalAvaluate';
import ModalFavoriteList from '../ModalFavoriteList';
import ButtonReturn from '../ButtonReturn';
import PosterImage from '../PosterImage';
import ButtonRated from '../ButtonRated';
import DescriptionTitle from '../DescriptionTitle';
import TextRated from '../TextRated';
import Likeds from '../Likeds';
import OverView from '../OverView';
import BackDrop from '../BackDrop';
import BoxCast from '../BoxCast';
import { getCredits, getState, postFavorite } from '../../service/api';
import styles from './styles';
import { AuthContext } from '../../context/auth';
import ButtonFavorite from '../../components/ButtonFavorite';

export default function HeaderMovies({
  route,
  navigation,
  details,
}) {
  const [id, type] = route.params;
  const [crew, setCrew] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [movieRated, setMovieRated] = useState(null);
  const [isFavorite, setIsFavorite] = useState(null);
  const [dataFavorite, setDataFavorite] = useState({
    media_type: type,
    media_id: id,
    favorite: false,
  });
  const { sessionId, account } = useContext(AuthContext);

  async function awaitFavoriteMovies() {
    try {
      await postFavorite(account.id, sessionId, dataFavorite);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    async function awaitIsFavorite(bodyfavorite) {
      const { favorite } = await getState('movie', id, sessionId);
      setIsFavorite(favorite);
      setDataFavorite(prevState => ({ ...prevState, favorite: !favorite }));
    }
    awaitIsFavorite();
  }, [id, sessionId]);

  useEffect(() => {
    async function awaitGetCredits() {
      try {
        const dataCredits = await getCredits(id);
        setCrew(dataCredits.crew);
      } catch (error) {
        console.warn(error);
      }
    }
    awaitGetCredits();
  }, [id]);

  async function awaitAvaluates() {
    try {
      const stateMovie = await getState(type, id, sessionId);
      setMovieRated(stateMovie.rated.value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    awaitAvaluates();
  }, [isRated]);

  return (
    <View >
      <ModalAvaluate
        type={type}
        typeId={id}
        modalIsVisible={modalVisible}
        setModalVisible={setModalVisible}
        awaitAvaluates={awaitAvaluates}
        setIsRated={setIsRated}
      />
      <BackDrop BackDrop={details.backdrop_path} />
      <ButtonReturn navigation={navigation} />
      <ButtonFavorite
        mediaType={'movie'}
        setIsFavorite={setIsFavorite}
        setDataFavorite={setDataFavorite}
        awaitFavorite={awaitFavoriteMovies}
        id={id}
        isFavorite={isFavorite}
      />
      <View style={styles.containerDetails}>
        <View style={styles.containerMovieImg}>
          <PosterImage posterPath={details.poster_path} />
          <ButtonRated
            rated={movieRated}
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </View>
        <View style={styles.detaisMoviesTitle}>
          <DescriptionTitle
            detailsTitle={details.title}
            detailsReleaseDate={details.release_date}
            detailsRunTime={details.runtime}
            created={'Direção'}
            crew={crew}
            haveMinutes={true}
          />

          <View style={styles.detailRatedLiked}>
            <TextRated detailsVoteAverage={details.vote_average} />
            <Likeds detailsVoteCount={details.vote_count} />
          </View>

          <View style={styles.modal}>
            <ModalFavoriteList navigation={navigation} movieId={id} />
          </View>
        </View>
      </View>
      <View style={styles.containerOverView}>
        <OverView detailsOverView={details.overview} />
      </View>
      <BoxCast />
    </View>
  );
}
