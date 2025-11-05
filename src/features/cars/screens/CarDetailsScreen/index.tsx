import React from 'react';
import { View, Text, ScrollView, Pressable, Alert } from 'react-native';
import type { RouteProp } from '@react-navigation/native';

import styles from './styles';
import { Car } from '../../types';
import Carousel from '../../components/Carousel';

type Props = {
  route: RouteProp<{ params: { car: Car } }, 'params'>;
};

const CarDetailsScreen: React.FC<Props> = ({ route }) => {
  const { car } = route.params;

  return (
    <>
      <ScrollView style={styles.container}>
        <Carousel car={car} imageStyle={styles.imageStyle} />

        <View style={styles.details}>
          <View style={styles.header}>
            <View>
              <Text style={styles.name}>{car.name}</Text>
              <Text style={styles.brand}>{car.brand}</Text>
            </View>
            <Text style={styles.price}>${car.price}</Text>
          </View>
          {car.description && (
            <Text style={styles.description}>{car.description}</Text>
          )}

          {car.colors && (
            <View style={styles.colorsContainer}>
              <Text style={styles.colorsTitle}>Available Colors:</Text>
              <View style={styles.colorList}>
                {car.colors.map(color => (
                  <View
                    key={color}
                    style={[
                      styles.colorDot,
                      { backgroundColor: color.toLowerCase() },
                    ]}
                  />
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <Pressable
        style={styles.bookButton}
        onPress={() =>
          Alert.alert('Booked', 'You have successfully booked the car!')
        }
      >
        <Text>Book Now</Text>
      </Pressable>
    </>
  );
};

export default CarDetailsScreen;
