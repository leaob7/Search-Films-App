import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from '../Pages/Login';
import MainPage from '../Pages/MainPage';
import MoviePage from '../Pages/MoviePage';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ Login } />
      <Stack.Screen name="MainPage" component={ MainPage } />
      <Stack.Screen name="MoviePage:id" component={ MoviePage } />
    </Stack.Navigator>
  );
}
