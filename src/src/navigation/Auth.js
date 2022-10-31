import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import RegistrarCliente from '../pages/RegistrarCliente';
import Endereco from '../pages/Endereco';


const Stack = createNativeStackNavigator();

export default function Auth(){
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
              header:()=> null
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegistrarCliente} 
          options={{
              header:()=> null
          }}
        />
        <Stack.Screen 
          name="Endereco" 
          component={Endereco} 
          options={{
              header:()=> null
          }}
        />
      </Stack.Navigator>
  );
}