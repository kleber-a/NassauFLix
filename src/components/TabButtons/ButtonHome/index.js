import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

export default function ButtonHome({color, focused}) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: focused ? '#EC2626' : '#454545'},
      ]}>
      <Image source={require('../../../assets/popcorn.png')} />
    </View>
  );
}
