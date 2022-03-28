import React from 'react';
import HomeTvShows from '../pages/HomeTvShows';
import TvShows from '../pages/TvShows';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackTvShows() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTvShows" component={HomeTvShows} />
      <Stack.Screen name="TvShows" component={TvShows} />
    </Stack.Navigator>
  );
}

export default StackTvShows;
