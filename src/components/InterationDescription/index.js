import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import VerifyName from '../User/VerifyName';

export default function InterationDescription({nameInteration}) {
  return (
    <Text style={styles.containerText}>
      {nameInteration} de <VerifyName color={'#E9A6A6'} />
    </Text>
  );
}
