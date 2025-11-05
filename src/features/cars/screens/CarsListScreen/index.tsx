import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Car } from '../../types';
import styles from './styles';
import { CarCard } from '../../components/CarCard';
import { carsData } from '../../../../data/cars';

export default function CarsListScreen() {
  const navigation = useNavigation();

  const renderCards = ({ item }: { item: Car }) => (
    <CarCard
      car={item}
      onPress={() =>
        navigation.navigate('Details' as never, { car: item } as never)
      }
    />
  );

  const keyExtractor = (item: Car) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={carsData}
        keyExtractor={keyExtractor}
        renderItem={renderCards}
      />
    </View>
  );
}
