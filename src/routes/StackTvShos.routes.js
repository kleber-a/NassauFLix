import React from 'react';
import Movies from '../pages/Movies';
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
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
}

export default StackTvShows;
