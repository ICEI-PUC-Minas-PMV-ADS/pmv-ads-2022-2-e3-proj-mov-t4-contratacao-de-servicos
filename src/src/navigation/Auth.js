import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import RegistrarPasso01 from '../pages/Registro/RegistrarPasso01';
import RegistrarPasso02 from '../pages/Registro/RegistrarPasso02';
import RegistrarPasso03 from '../pages/Registro/RegistrarPasso03';
import RegistrarPasso04 from '../pages/Registro/RegistrarPasso04';



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
          name="RegisterPasso01" 
          component={RegistrarPasso01} 
          options={{
              header:()=> null
          }}
        />
        <Stack.Screen 
          name="RegisterPasso02" 
          component={RegistrarPasso02} 
          options={{
              header:()=> null
          }}
        />
        <Stack.Screen 
          name="RegisterPasso03" 
          component={RegistrarPasso03} 
          options={{
              header:()=> null
          }}
        />

        <Stack.Screen 
          name="RegisterPasso04" 
          component={RegistrarPasso04} 
          options={{
              header:()=> null
          }}
        />
      </Stack.Navigator>
  );
}