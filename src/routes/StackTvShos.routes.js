import React from 'react';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

import {createStackNavigator} from '@react-navigation/stack';
import HomeTvShows from '../pages/HomeTvShows';

const Stack = createStackNavigator();

function StackTvShows() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTvShows" component={HomeTvShows} />
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
}

export default StackTvShows;
