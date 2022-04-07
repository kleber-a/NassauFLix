import React from 'react';
import { Image } from 'react-native';
import styles from './styles'
export default function PosterImage({ posterPath }) {
    return (

        <Image
            style={styles.movieImg}
            source={{
                uri: `http://image.tmdb.org/t/p/w780/${posterPath}`,
            }}
        />
    )
};