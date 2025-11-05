import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import CarsListScreen from '../features/cars/screens/CarsListScreen';
import CarDetailsScreen from '../features/cars/screens/CarDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CarsList" component={CarsListScreen} />
      <Stack.Screen name="Details" component={CarDetailsScreen} />
    </Stack.Navigator>
  );
};
