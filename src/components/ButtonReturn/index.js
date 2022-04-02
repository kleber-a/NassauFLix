import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ButtonReturn({navigation}) {
  return (
    <TouchableOpacity style={styles.return} onPress={() => navigation.goBack()}>
      <AntDesign style={styles.button} name="arrowleft" size={25} />
    </TouchableOpacity>
  );
}
