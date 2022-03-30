import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

function Loading({size,color}) {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

export default Loading;
