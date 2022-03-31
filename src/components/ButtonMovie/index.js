import {View, Text, Image} from 'react-native';
import React from 'react';

export default function ButtonHome(props) {
  const {loading} = props;
  return (
    <View>
      {loading === false ? (
        <Image source={require('../../assets/buttonMovieFalse.png')} />
      ) : (
        <Image source={require('../../assets/buttonMovieTrue.png')} />
      )}
    </View>
  );
}
