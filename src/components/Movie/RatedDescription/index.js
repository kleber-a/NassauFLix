import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import VerifyName from '../../User/VerifyName';

export default function RatedDescription({navigation, nameRated}) {
  return (
    <View style={styles.boxButtonAndText}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.containerText}>
        Avaliações de {nameRated} recentes de <VerifyName />
      </Text>
    </View>
  );
}
