import React from 'react';
import TvShow from '../pages/TvShows';
import HomeTvShows from '../pages/HomeTvShows';
import Profile from '../pages/Profile';

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
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default StackTvShows;
