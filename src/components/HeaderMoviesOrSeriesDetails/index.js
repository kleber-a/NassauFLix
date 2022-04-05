import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalAvaluate from '../ModalAvaluate';
import ButtonReturn from '../ButtonReturn';
import PosterImage from '../PosterImage'
import ButtonRated from '../ButtonRated'
import DescriptionTitle from '../DescriptionTitle'
import {
    getCredits,
    getDetails,
    getState,
    postFavorite,
} from '../../service/api';
import styles from './styles';
import { AuthContext } from '../../context/auth';
import ButtonFavorite from '../../components/ButtonFavorite';

export default function HeaderMoviesOrSeriesDetails({ route, navigation }) {
    const [id, type] = route.params;
    const [details, setDetails] = useState([]);
    const [cast, setCast] = useState(null);
    const [crew, setCrew] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [isRated, setIsRated] = useState(false);
    const [movieRated, setMovieRated] = useState(null);

    const [isFavorite, setIsFavorite] = useState(null);
    const [dataFavorite, setDataFavorite] = useState({
        media_type: 'movie',
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


        <View style={styles.containerHeader}>
            <ModalAvaluate
                type={type}
                typeId={id}
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

            <ButtonReturn navigation={navigation} />

            <ButtonFavorite
                setIsFavorite={setIsFavorite}
                setDataFavorite={setDataFavorite}
                awaitFavoriteMovies={awaitFavoriteMovies}
                id={id}
                isFavorite={isFavorite}
            />

            <View style={styles.detailsMovies}>
                <View style={styles.containerMovieImg}>
                    <PosterImage
                        posterPath={details.poster_path}
                    />

                    <ButtonRated
                        movieRated={movieRated}
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
                </View>
                {/* >

                    <Text style={styles.titleMovie}>{details.title}{' '}
                        <Text style={styles.yearMovie}>{new Date(details.release_date).getFullYear()}
                        </Text>{' '}
                        <Text style={styles.timeMovie}>{details.runtime} min</Text>
                    </Text>

                    <View>
                        <Text style={styles.textAutor}>
                            {created} por{' '}
                            <Text style={styles.autorMovie}>
                                {crew &&
                                    crew.find(profile => profile.job === 'Director').name}
                            </Text>
                        </Text>
                    </View>
                </View>
 */}


                <View style={styles.datailRatedLiked}>
                    <View style={styles.detailsRated}>
                        <Text style={styles.ratedMovie}>{details.vote_average}/10</Text>
                    </View>
                    <View style={styles.datailsLiked}>
                        <View>
                            <AntDesign name="heart" size={20} style={styles.heartIcon} />
                        </View>
                        <Text style={styles.liked}>
                            {Math.floor(details.popularity)}K
                        </Text>
                    </View>
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

    )
}