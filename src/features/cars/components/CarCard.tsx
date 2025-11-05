import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Car } from '../types';
import Carousel from './Carousel';

interface Props {
  car: Car;
  onPress: () => void;
}

export const CarCard: React.FC<Props> = React.memo(({ car, onPress }) => {
  return (
    <View style={styles.card} testID={`carcard-${car.id}`}>
      <Carousel car={car} onPress={onPress} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {car.name}
          </Text>
          <Text style={styles.author}>{car.brand}</Text>
        </View>
        <Text style={styles.price}>${car.price}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: { fontWeight: '700', fontSize: 16, marginBottom: 4, color: '#111' },
  author: { color: '#555' },
  price: { color: '#333', fontWeight: '600' },
});
