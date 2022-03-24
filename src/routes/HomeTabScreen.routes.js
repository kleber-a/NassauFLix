import React from 'react';
<<<<<<< HEAD
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackDefault from './StackDefault.routes';
import FavoriteMovies from '../pages/FavoriteMovies';
import ButtonHome from '../components/ButtonHome';
import ButtonPlay from '../components/ButtonPlay';
import ButtonUser from '../components/ButtonUser';
=======
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ButtonHome from '../components/TabButtons/ButtonHome';
import ButtonPlay from '../components/TabButtons/ButtonPlay';
import ButtonUser from '../components/TabButtons/ButtonUser';
import StackMovies from './StackMovies.routes';
import StackTvShows from './StackTvShos.routes';
>>>>>>> devel

const Tab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="StackMovies"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#304FFE',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#454545',
          borderTopColor: 'transparent',
          height: 54,
        },
      }}>
      <Tab.Screen
<<<<<<< HEAD
        name="Play"
        component={FavoriteMovies}
=======
        name="StackTvShows"
        component={StackTvShows}
>>>>>>> devel
        options={{
          tabBarIcon: () => <ButtonPlay name="StackTvShows" />,
        }}
      />
      <Tab.Screen
        name="StackMovies"
        component={StackMovies}
        options={{
          tabBarIcon: () => <ButtonHome name="StackMovies" />,
        }}
      />
      <Tab.Screen
        name="User"
        component={StackMovies}
        options={{
          tabBarIcon: () => <ButtonUser name="User" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabScreen;
