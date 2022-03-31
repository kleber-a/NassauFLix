import {Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function MovieImage({pathImage, posterSize}) {
  return (
    <Image
      style={[styles.img]}
      source={{
        uri: `http://image.tmdb.org/t/p/${posterSize}/${pathImage}`,
      }}
    />
  );
}
