import {
    View,
    Text,
    Animated,
} from 'react-native';
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

export default function HeaderTvShows({ route, navigation }) {

    const [id, type] = route.params;
    const [currentIndex, setCurrentIndex] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [isRated, setIsRated] = useState(false);
    const [tvShowRated, setTvShowRated] = useState(null);
    const [tvShow, setTvShow] = useState(null);
    const [season, setSeason] = useState(null);
    const [selection, setSelection] = useState(false);
    const [bodyHeight, setBodyHeight] = useState(new Animated.Value(-500));
    Animated.timing(bodyHeight, {
        duration: 1000,
        toValue: 0,
        useNativeDriver: false,
    }).start();

    const [isFavorite, setIsFavorite] = useState(null);
    const [dataFavorite, setDataFavorite] = useState({
        media_type: 'tv',
        media_id: id,
        favorite: false,
    });
    const { sessionId, account } = useContext(AuthContext);

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

    async function awaitFavoriteTvShow() {
        try {
            await postFavorite(account.id, sessionId, dataFavorite);
        } catch (error) {
            console.warn(error);
        }
    };

    useEffect(() => {
        async function awaitIsFavorite(bodyfavorite) {
            const { favorite } = await getState('tv', id, sessionId);
            setIsFavorite(favorite);
            setDataFavorite(prevState => ({ ...prevState, favorite: !favorite }));
        }
        awaitIsFavorite();
    }, [id, sessionId]);

    async function awaitAvaluates() {
        try {
            const stateMovie = await getState(type, id, sessionId);
            setTvShowRated(stateMovie.rated.value);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        awaitAvaluates();
    }, [isRated]);

    async function awaitGetSeasonTvShow(seasonId) {
        setSelection(!selection);
        try {
            const dataSeason = await getTvShowSeason(id, seasonId);
            setSeason(dataSeason);
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <View style={styles.containerRenderHeader}>
            <ModalAvaluate
                type={type}
                typeId={id}
                modalIsVisible={modalVisible}
                setModalVisible={setModalVisible}
                awaitAvaluates={awaitAvaluates}
                setIsRated={setIsRated}
            />
            <BackDrop
                BackDrop={tvShow.backdrop_path}
            />
            <ButtonReturn navigation={navigation} />
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
                    <PosterImage
                        posterPath={tvShow.poster_path} />
                    <ButtonRated
                        movieRated={tvShowRated} // Precisa de atenção mudar parametro de envio
                        setModalVisible={setModalVisible}
                        modalVisible={modalVisible}
                    />
                </View>
                <View style={styles.detaisMoviesTitle}>
                    <DescriptionTitle
                        detailsTitle={tvShow.name}
                        created={tvShow.first_air_date}
                        detailsReleaseDate
                        detailsRunTime
                        haveMinutes
                        crew

                    />
                    <View style={styles.boxDetailsIcons}>
                        <TextRated detailsVoteAverage={tvShow.vote_average} />
                        <Likeds detailsVoteCount={tvShow.vote_count.toString()} />
                    </View>
                </View>

                <View style={styles.containerDetails}>
                    <View style={styles.boxDetailsText}>
                        <Text style={styles.detailsTvShowTitle}>
                            {tvShow.name + ' '}
                            <Text style={styles.detailsTvShowAge}>
                                {new Date(tvShow.first_air_date).getFullYear()}
                            </Text>
                        </Text>

                        {tvShow && tvShow.created_by.length > 0 ? (
                            <Text style={styles.criatedText}>
                                Criado por{' '}
                                {tvShow &&
                                    tvShow.created_by.map((item, index) => {
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
                </View>
            </View>

            <View style={styles.containerOverView}>
                <OverView
                    detailsOverView={tvShow.overview}
                />
            </View>
        </View>
    );
};