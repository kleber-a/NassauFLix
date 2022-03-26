import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Loading from '../../components/Loading';
import { getFavoriteMovie, getAccountDetails } from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles'
import MovieImage from '../../components/Movie/MovieImage'
export default function FavoriteMovies(navigation) {

    const [movies, setMovies] = useState()
    const [state, setState] = useState({
        isFetching: false,
    })


    function onRefresh() {
        setState({ isFetching: true, }, () => { awaitFavoriteMovies(); });
    }

    async function awaitFavoriteMovies() {
        try {
            const sessionId = await AsyncStorage.getItem('@CodeApi:session')
            const accountId = await getAccountDetails(sessionId)
            const data = await getFavoriteMovie(accountId.id, sessionId);
            const result = data.map(data => data.poster_path)
            setMovies(result)
            console.log(result)
        } catch (error) {
            console.warn(error);
        }
    }
    awaitFavoriteMovies();


    const renderHeader = () => {
        return (
            <View style={styles.BoxButtonAndText}>
                <TouchableOpacity
                    style={styles.buttonBack}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={25} style={{ color: 'black' }} />
                </TouchableOpacity>
                <Text style={styles.containerText}>Filmes favoritos do <Text style={styles.userText}>JOHN!</Text></Text>
            </View>
        )
    };
    /* <Image

                  style={styles.imageFlatList}
                  source={{
                      uri: `http://image.tmdb.org/t/p/w92${item}`,
                  }}
              /> */
    const renderItem = ({ item }) => {
        return (
            <View style={styles.boxImage}>
                <MovieImage pathImage={item} posterSize={'w92'} />
            </View>
        )
    };
    return (
        <View style={styles.container}>
            {movies ? (<FlatList
                data={movies}
                ListHeaderComponent={renderHeader}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                numColumns={4}
                onRefresh={() => onRefresh()}
                refreshing={state.isFetching}
            />) : (<Loading />)}
        </View>
    )
};