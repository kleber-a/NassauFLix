import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'

export default function ButtonFilmList({ navigation, navigate }) {

    return (
        <TouchableOpacity
            style={styles.containerButton}
            onPress={() => {
                navigation.navigate(navigate)
            }}
        >
            <Text style={styles.textButton}>Ver Listas de Filmes</Text>
        </TouchableOpacity>
    )
};





