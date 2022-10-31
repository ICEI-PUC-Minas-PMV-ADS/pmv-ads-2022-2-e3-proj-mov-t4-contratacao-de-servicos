import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/navigation/Route';
import UserProvider from './src/contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}
