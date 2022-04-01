import React from 'react';
import Favorites from '../pages/Favorites';
import Rateds from '../pages/Rateds';
import Profile from '../pages/Profile';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function StackProfile() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Rateds" component={Rateds} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

export default StackProfile;
