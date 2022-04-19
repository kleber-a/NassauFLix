import React from 'react';
import { Text } from 'react-native';
import styles from './styles';



export default function OverView({ detailsOverView }) {
    return (
        <Text style={styles.descriptionMovie}>{detailsOverView}</Text>
    )
}



