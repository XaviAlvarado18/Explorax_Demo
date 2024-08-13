// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PlanetScreen from './../screens/PlanetScreen'; // Crea otra pantalla para la navegación

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Planet">
        <Stack.Screen name="Planet" component={PlanetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
