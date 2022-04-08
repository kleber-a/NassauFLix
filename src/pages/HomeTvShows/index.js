import React from 'react';
import Home from '../../components/Home';

export default function HomeTvShows({navigation}) {
  return <Home type={{tv: 'Séries'}} navigate={navigation} />;
  
}
