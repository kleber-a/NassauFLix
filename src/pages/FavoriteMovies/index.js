import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Loading from '../../components/Loading';

import styles from './styles'

export default function FavoriteMovies(navigation) {

    const flat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

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
    const renderItem = (item) => {
        return (
            <View style={styles.boxImage}>
                <Image
                    style={styles.imageFlatList}
                    source={{
                        uri: `http://image.tmdb.org/t/p/w92/725WE0Qb1BbUF7aGvjiQqzzffpg.jpg`,
                    }}
                />
            </View>
        )
    };
    return (
        <View style={styles.container}>
            {flat ? (<FlatList
                data={flat}
                ListHeaderComponent={renderHeader}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                numColumns={4}
            />) : (<Loading />)}
        </View>
    )
};