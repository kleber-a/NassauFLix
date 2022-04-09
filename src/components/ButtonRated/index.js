import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from './styles'

export default function ButtonRated({ movieRated, setModalVisible, modalVisible }) {
    return (

        movieRated ? (
            <View style={[styles.rating, { backgroundColor: '#8BE0EC' }]} >
                <Text style={[styles.ratingText]}>
                    Sua nota: {movieRated}/10
                </Text>
                <TouchableOpacity
                    style={styles.ratingContainerIcon}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <Icon
                        style={styles.ratingIcon}
                        name="pencil"
                        size={10}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
        ) : (
            <TouchableOpacity
                style={[styles.rating, { backgroundColor: '#E9A6A6' }]}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Text style={[styles.ratingText]}>AVALIE AGORA</Text>
            </TouchableOpacity>
        )
    )
};








