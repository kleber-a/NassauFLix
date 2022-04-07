import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'


export default function BoxCast() {
    return (
        <View style={styles.boxCast}>
            <Text style={styles.cast}>Elenco</Text>
            <View style={styles.line} />
        </View>
    )
};