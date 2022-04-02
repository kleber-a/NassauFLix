import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function ButtonHome({color, focused}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#E9A6A6' : '#454545'},
      ]}>
      <Image source={require('../../../assets/popcorn.png')} />
    </View>
  );
}
