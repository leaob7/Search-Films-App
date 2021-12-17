import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Routes/Navigation';
import MyContext from './src/Context/Provider';

export default function App() {
  const [email, setEmail] = useState('');
  const contextValues = {
    email,
    setEmail
  }
  return (
    <NavigationContainer>
      <MyContext.Provider value={ contextValues }>
        <Navigation />
      </MyContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

