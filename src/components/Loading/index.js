import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

function Loading({size, color}) {
  return (
    <View style={styles.loading}>
      <ActivityIndicator
        size={size ? size : 77}
        color={color ? color : '#F98C8C'}
      />
    </View>
  );
}

export default Loading;
