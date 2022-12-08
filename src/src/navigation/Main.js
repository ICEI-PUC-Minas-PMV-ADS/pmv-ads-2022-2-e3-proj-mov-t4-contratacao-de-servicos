import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import AlterarSenha from '../pages/AlterarSenha';
import PedidoDatails from '../pages/PedidoDatails';


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
          name="AlterarSenha" 
          component={AlterarSenha} 
          options={{
              header:()=> null
          }}
        />
        <Stack.Screen 
          name="PedidoDatails" 
          component={PedidoDatails} 
          options={{
              header:()=> null
          }}
        />
      </Stack.Navigator>
  );
}