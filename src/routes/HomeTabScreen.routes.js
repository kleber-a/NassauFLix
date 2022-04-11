import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ButtonHome from '../components/TabButtons/ButtonHome';
import ButtonPlay from '../components/TabButtons/ButtonPlay';
import ButtonUser from '../components/TabButtons/ButtonUser';
import StackMovies from './StackMovies.routes';
import StackTvShows from './StackTvShos.routes';
import StackProfile from './StackProfile.routes';

const Tab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="StackMovies"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#454545',
          borderTopColor: 'transparent',
          height: 54,
        },
      }}>
      <Tab.Screen
        name="StackTvShows"
        component={StackTvShows}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonPlay focused={focused} color={color} name="StackTvShows" />
          ),
        }}
      />
      <Tab.Screen
        name="StackMovies"
        component={StackMovies}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonHome focused={focused} color={color} name="StackMovies" />
          ),
        }}
      />
      <Tab.Screen
        name="StackProfile"
        component={StackProfile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <ButtonUser focused={focused} color={color} name="User" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabScreen;
