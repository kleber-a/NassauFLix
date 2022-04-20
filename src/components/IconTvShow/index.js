import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function IconTvShow(props) {
  const {loading} = props;
  return (
    <View>
      {loading === false ? (
        <Icon size={20} color={'white'} name={'chevron-down'} />
      ) : (
        <Icon size={20} color={'white'} name={'chevron-up'} />
      )}
      
    </View>
  );
}
