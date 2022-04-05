import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles'
export default function Nomeestranho() {
  return (
    <View style={styles.detailsMovies}>
      <View style={styles.containerMovieImg}>
        <Image
          style={styles.movieImg}
          source={{
            uri: `http://image.tmdb.org/t/p/w780/${details.poster_path}`,
          }}
        />
        {movieRated ? (
          <View style={[styles.rating, {backgroundColor: '#8BE0EC'}]}>
            <Text style={[styles.ratingText]}>Sua nota: {movieRated}/10</Text>
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
            style={[styles.rating, {backgroundColor: '#E9A6A6'}]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={[styles.ratingText]}>AVALIE AGORA</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.detaisMin}>
        <Text style={styles.timeMovie}>{details.runtime} min</Text>
      </View>
      <View style={styles.detaisMoviesTitle}>
        <Text style={styles.titleMovie}>
          {details.title}{' '}
          <Text style={styles.yearMovie}>
            {new Date(details.release_date).getFullYear()}
          </Text>{' '}
        </Text>
        <View>
          <Text style={styles.textAutor}>
            Direção por{' '}
            <Text style={styles.autorMovie}>
              {crew && crew.find(profile => profile.job === 'Director').name}
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.datailRatedLiked}>
        <View style={styles.detailsRated}>
          <Text style={styles.ratedMovie}>{details.vote_average}/10</Text>
        </View>
        <View style={styles.datailsLiked}>
          <View>
            <AntDesign name="heart" size={20} style={styles.heartIcon} />
          </View>
          <Text style={styles.liked}>{Math.floor(details.popularity)}K</Text>
        </View>
      </View>
    </View>
  );
}
