import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function ButtonUser({color, focused}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#EC2626' : '#454545'},
      ]}>
      <Icon name={'user-o'} style={styles.icon} />
    </View>
  );
}
