import React from 'react';
import { Image } from 'react-native';
import styles from './styles';


export default function BackDrop({ BackDrop }) {

    return (
        
        <Image
            style={styles.backGroundMovie}
            source={{
                uri: `http://image.tmdb.org/t/p/w780/${BackDrop}`,
            }}
        />
    )
};
