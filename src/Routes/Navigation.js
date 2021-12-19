import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from '../Pages/Login';
import MainPage from '../Pages/MainPage';
import MoviePage from '../Pages/MoviePage';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={ Login } options={{ headerShown: false }} />
      <Stack.Screen name="MainPage" component={ MainPage } options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetails" component={ MoviePage } options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
