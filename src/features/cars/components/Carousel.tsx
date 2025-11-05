import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  Pressable,
  Dimensions,
} from 'react-native';
import { Car } from '../types';
import FastImage from 'react-native-fast-image';

interface CarouselProps {
  car: Car;
  onPress?: () => void;
  imageStyle?: object;
}

const { width } = Dimensions.get('window');

const Carousel = ({ car, onPress, imageStyle }: CarouselProps) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }: { item: string }) => (
    <Pressable onPress={onPress}>
      <FastImage source={{ uri: item }} style={[styles.image, imageStyle]} />
    </Pressable>
  );

  const keyExtractor = (item: string, index: number) =>
    `${car.id}-img-${index}`;

  return (
    <View style={styles.container}>
      <FlatList
        data={car.images}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        decelerationRate="fast"
        snapToInterval={width - 48}
        snapToAlignment="center"
        style={styles.carousel}
        contentContainerStyle={styles.contentContainerStyle}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        renderItem={renderItem}
      />

      <View style={styles.dotContainer}>
        {car.images.map((_, i) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (i - 1) * (width - 48),
              i * (width - 48),
              (i + 1) * (width - 48),
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return <Animated.View key={i} style={[styles.dot, { opacity }]} />;
        })}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {},
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
    marginHorizontal: 4,
  },
  contentContainerStyle: { alignItems: 'center', paddingVertical: 8 },
  image: {
    width: width - 48,
    minHeight: 180,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  carousel: {
    width: width - 48,
    alignSelf: 'center',
  },
});
