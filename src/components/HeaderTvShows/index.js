import {View, Text} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {getState, postFavorite} from '../../service/api';
import styles from './styles';
import ButtonReturn from '../ButtonReturn';
import {AuthContext} from '../../context/auth';
import ModalAvaluate from '../ModalAvaluate';
import BackDrop from '../BackDrop';
import ButtonFavorite from '../ButtonFavorite';
import PosterImage from '../PosterImage';
import TextRated from '../TextRated';
import Likeds from '../Likeds';
import OverView from '../OverView';
import ButtonRated from '../ButtonRated';

export default function HeaderTvShows({id, type, navigate, tvShow}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [tvShowRated, setTvShowRated] = useState(null);
  const [isFavorite, setIsFavorite] = useState(null);
  const {sessionId, account} = useContext(AuthContext);
  const [dataFavorite, setDataFavorite] = useState({
    media_type: 'tv',
    media_id: id,
    favorite: false,
  });
  useEffect(() => {
    async function awaitIsFavorite(bodyfavorite) {
      const {favorite} = await getState('tv', id, sessionId);
      setIsFavorite(favorite);
      setDataFavorite(prevState => ({...prevState, favorite: !favorite}));
    }
    awaitIsFavorite();
  }, [id, sessionId]);

  async function awaitFavoriteTvShow() {
    try {
      await postFavorite(account.id, sessionId, dataFavorite);
    } catch (error) {
      console.warn(error);
    }
  }

  async function awaitAvaluates() {
    try {
      const stateMovie = await getState(type, id, sessionId);
      setTvShowRated(stateMovie.rated.value);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    awaitAvaluates();
  }, [isRated]);

  return (
    <View>
      <ModalAvaluate
        type={type}
        typeId={id}
        modalIsVisible={modalVisible}
        setModalVisible={setModalVisible}
        awaitAvaluates={awaitAvaluates}
        setIsRated={setIsRated}
      />
      <BackDrop BackDrop={tvShow.backdrop_path} />
      <ButtonReturn navigation={navigate} />
      <ButtonFavorite
        isFavorite={isFavorite}
        setIsFavorite={setIsFavorite}
        awaitFavoriteTvShow={awaitFavoriteTvShow}
        setDataFavorite={setDataFavorite}
        id={id}
        mediaType={'tv'}
        awaitFavorite={awaitFavoriteTvShow}
      />
      <View style={styles.containerDetails}>
        <View style={styles.containerMovieImg}>
          <PosterImage posterPath={tvShow.poster_path} />
          <ButtonRated
            rated={tvShowRated} // Precisa de atenção mudar parametro de envio
            setModalVisible={setModalVisible}
            modalVisible={modalVisible}
          />
        </View>

        <View style={styles.detaisMoviesTitle}>
          <View>
            <Text style={styles.detailsTvShowTitle}>
              {tvShow.name + ' '}
              <Text style={styles.detailsTvShowAge}>
                {new Date(tvShow.first_air_date).getFullYear()}
              </Text>
            </Text>

            {tvShow.created_by.length > 0 ? (
              <Text style={styles.criatedText}>
                Criado por{' '}
                {tvShow.created_by.map((item, index) => {
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
            <TextRated detailsVoteAverage={tvShow.vote_average} />
            <Likeds detailsVoteCount={tvShow.vote_count.toString()} />
          </View>
        </View>
      </View>

      <View style={styles.containerOverView}>
        <OverView detailsOverView={tvShow.overview} />
      </View>
    </View>
  );
}
