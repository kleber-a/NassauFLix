import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import styles from './styles';

export default function MovieEvaluation({votes}) {
  return (
    <View style={styles.containerAvaluation}>
      <Icon style={styles.icon} name="star" />
      <Text style={styles.avaluationstyle}>{votes}/10</Text>
    </View>
  );
}
