import React from 'react';
import TouchableOpacity from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './styles';

export default function ButtonFavorite({ isFavorite, setDataFavorite, awaitFavoriteMovies,
    id }) {

    return (

        <TouchableOpacity
            style={[styles.containerButtonStarOn]}
            onPress={() => {
                setIsFavorite(!isFavorite);
                setDataFavorite({
                    media_type: 'movie',
                    media_id: id,
                    favorite: isFavorite,
                });
                awaitFavoriteMovies();
            }}>
            <AntDesign
                name="star"
                size={24}
                style={isFavorite && styles.buttonStar}
            />
        </TouchableOpacity>
    )
}