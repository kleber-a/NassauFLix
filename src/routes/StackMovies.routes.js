import React from 'react';
import Home from '../pages/Home';
import Movies from '../pages/Movies';

import {createStackNavigator} from '@react-navigation/stack';
import HomeMovies from '../pages/HomeMovies';

const Stack = createStackNavigator();

function StackMovies() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeMovies" component={HomeMovies} />
      <Stack.Screen name="Movies" component={Movies} />
    </Stack.Navigator>
  );
}

export default StackMovies;
