import {View, Text} from 'react-native';
import React from 'react';
import Home from '../../components/Home';

export default function HomeMovies({navigation}) {
  return <Home type={'Movies'} navigate={navigation} />;
}
