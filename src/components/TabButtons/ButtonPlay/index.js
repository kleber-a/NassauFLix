import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function ButtonPlay({color, focused}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#EC2626' : '#454545'},
      ]}>
      <Icon name={'television-play'} style={styles.icon} />
    </View>
  );
}
