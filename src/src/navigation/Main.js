import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import TipoCadastro from '../pages/TipoCadastro';


const Stack = createNativeStackNavigator();

export default function Main(){
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
              header:()=> null
          }}
        />
        <Stack.Screen 
          name="TipoCadastro" 
          component={TipoCadastro} 
          options={{
              header:()=> null
          }}
        />
      </Stack.Navigator>
  );
}