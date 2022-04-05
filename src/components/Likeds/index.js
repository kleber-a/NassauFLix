import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles'

export default function Likeds({ detailsPopularity }) {
    return (

        <View style={styles.datailsLiked}>
            <Icon name="heart" size={20} style={styles.heartIcon} />
            <Text style={styles.liked}>
                {Math.floor(detailsPopularity)}K
            </Text>
        </View>

    )
};
