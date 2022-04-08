import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FormatNumber from '../FormatNumber';
import styles from './styles';

export default function Likeds({detailsVoteCount}) {
  return (
    <View style={styles.datailsLiked}>
      <Icon name="heart" size={20} style={styles.heartIcon} />
      <Text style={styles.liked}>
        <FormatNumber format="0.0 a">
          {detailsVoteCount.toString()}
        </FormatNumber>
      </Text>
    </View>
  );
}
