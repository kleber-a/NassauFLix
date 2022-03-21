import {Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function PopularDescription({name, type}) {
  return (
    <>
      <Text style={styles.greetingText}>
        Olá, <Text style={styles.greetingText__username}>{name && name}</Text>
      </Text>
      <Text style={styles.textDescription}>
        Reveja ou acompanhe os filmes que você assistiu...
      </Text>
      <Text style={styles.textPopularMovies}>{type} populares este mês</Text>
    </>
  );
}
