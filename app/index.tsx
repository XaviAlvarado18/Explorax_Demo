import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartedScreen from '@/screens/StartedScreen';
import PlanetScreen from '@/screens/PlanetScreen';
import ScoreScreen from '@/screens/ScoreScreen';
import { RootStackParamList } from './types'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { CurrentProgressProvider } from '@/context/CurrentProgressProvider';

const Stack = createStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Started">
      <Stack.Screen name="Started" component={StartedScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Planet" component={PlanetScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Score" component={ScoreScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <CurrentProgressProvider>
      <NavigationContainer independent={true}>
        <Navigator />
      </NavigationContainer>
    </CurrentProgressProvider>
  );
}


export default App;
