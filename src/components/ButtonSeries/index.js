import {View, Text, Image} from 'react-native';
import React from 'react';

export default function ButtonSeries(props) {
  const {loading1} = props;
  return (
    <View>
      {loading1 === false ? (
        <Image source={require('../../assets/buttonSeriesFalse.png')} />
      ) : (
        <Image source={require('../../assets/buttonSeriesTrue.png')} />
      )}
    </View>
  );
}
