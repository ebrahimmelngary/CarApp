import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Carousel from '../Carousel';
import { Car } from '../../types';

jest.mock('react-native-fast-image', () => {
  const { Image } = require('react-native');
  return React.forwardRef((props, ref) => <Image {...props} ref={ref} />);
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Carousel Component', () => {
  const mockCar: Car = {
    id: '1',
    name: 'Tesla Model S',
    brand: 'Tesla',
    price: 79999,
    images: [
      'https://example.com/tesla1.jpg',
      'https://example.com/tesla2.jpg',
      'https://example.com/tesla3.jpg',
    ],
  };

  const onPressMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all car images', () => {
    const { UNSAFE_getAllByType } = render(
      <Carousel car={mockCar} onPress={onPressMock} />,
    );
    const images = UNSAFE_getAllByType(require('react-native').Image);
    expect(images.length).toBe(mockCar.images.length);
  });

  it('renders a dot indicator for each image', () => {
    const { UNSAFE_getAllByType } = render(
      <Carousel car={mockCar} onPress={onPressMock} />,
    );
    const animatedViews = UNSAFE_getAllByType(
      require('react-native').Animated.View,
    );
    // Check that dots count equals number of images
    const dots = animatedViews.filter(v =>
      v.props.style?.find?.(s => s.backgroundColor === '#333'),
    );
    expect(dots.length).toBe(mockCar.images.length);
  });

  it('calls onPress when image is pressed', () => {
    const { getAllByA11yRole } = render(
      <Carousel car={mockCar} onPress={onPressMock} />,
    );
    // Press first image (wrapped in Pressable)
    const pressables = getAllByA11yRole('button');
    fireEvent.press(pressables[0]);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const { toJSON } = render(<Carousel car={mockCar} onPress={onPressMock} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
