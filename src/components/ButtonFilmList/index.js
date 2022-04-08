import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles'

export default function ButtonFilmList({ navigation }) {

    return (
        <>
            <TouchableOpacity
                style={styles.containerButton}
            // onPress={() => navigation.navigate()}
            >
                <Text style={styles.textButton}>Ver Lista de Filmes</Text>
            </TouchableOpacity>
        </>

    )
};





