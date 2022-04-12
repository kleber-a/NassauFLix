import React from 'react';
import InterationList from '../pages/InterationList';
import ListMovies from '../pages/ListMovies';
import Profile from '../pages/Profile';
import Movies from '../pages/Movies';
import TvShows from '../pages/TvShows';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackProfile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="InterationList" component={InterationList} />
      <Stack.Screen name="ListMovies" component={ListMovies} />
      <Stack.Screen name="movie" component={Movies} />
      <Stack.Screen name="tv" component={TvShows} />
    </Stack.Navigator>
  );
}

export default StackProfile;
