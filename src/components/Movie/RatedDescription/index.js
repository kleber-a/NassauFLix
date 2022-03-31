import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import VerifyName from '../../User/VerifyName';

export default function RatedDescription({nameRated}) {
  return (
    <Text style={styles.containerText}>
      Avaliações de {nameRated} recentes de <VerifyName color={'pink'} />
    </Text>
  );
}
