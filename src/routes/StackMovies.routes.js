import React from 'react';
import Movies from '../pages/Movies';
import HomeMovies from '../pages/HomeMovies';
import Profile from '../pages/Profile';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackMovies() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeMovies" component={HomeMovies} />
      <Stack.Screen name="movie" component={Movies} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default StackMovies;
