import React from "react";
import { View, Text } from 'react-native';
import styles from './styles'

export default function TextRated({ detailsVoteAverage }) {
    return (
        <Text style={styles.ratedMovie}>{detailsVoteAverage}/10</Text>
    )
};