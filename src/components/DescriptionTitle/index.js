import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function DescriptionTitle({
  detailsTitle,
  created,
  detailsReleaseDate,
  detailsRunTime,
  haveMinutes,
  crew,
}) {
  return (
    <>
      <Text style={styles.titleMovie}>
        {detailsTitle}{' '}
        <Text style={styles.yearMovie}>
          {new Date(detailsReleaseDate).getFullYear()}
        </Text>{' '}
        {haveMinutes && (
          <Text style={styles.timeMovie}>{detailsRunTime} min</Text>
        )}
      </Text>

      <View>
        <Text style={styles.textAutor}>
          {created} por{' '}
          <Text style={styles.autorMovie}>
            {crew && crew.find(profile => profile.job === 'Director').name}
          </Text>
        </Text>
      </View>
    </>
  );
}
