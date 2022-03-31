import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function ButtonUser({color, focused}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#E9A6A6' : '#454545'},
      ]}>
      <Icon name={'user-o'} style={styles.icon} />
    </View>
  );
}
