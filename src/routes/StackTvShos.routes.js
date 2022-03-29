import React from 'react';
import TvShow from '../pages/TvShow';
import HomeTvShows from '../pages/HomeTvShows';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackTvShows() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTvShows" component={HomeTvShows} />
      <Stack.Screen name="tv" component={TvShow} />
    </Stack.Navigator>
  );
}

export default StackTvShows;
