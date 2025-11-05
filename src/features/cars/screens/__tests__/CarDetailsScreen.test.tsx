import React from 'react';
import { render } from '@testing-library/react-native';
import CarDetailsScreen from '../CarDetailsScreen';

jest.mock('react-native-fast-image', () => {
  const { Image } = require('react-native');
  return React.forwardRef((props, ref) => <Image {...props} ref={ref} />);
});

describe('CarDetailsScreen', () => {
  const mockCar = {
    id: '1',
    name: 'Tesla Model S',
    brand: 'Tesla',
    price: 79999,
    images: ['https://example.com/1.jpg', 'https://example.com/2.jpg'],
    colors: ['Red', 'Black'],
    description: 'Fast electric car',
  };

  it('renders car details correctly', () => {
    const { getByText } = render(
      <CarDetailsScreen route={{ params: { car: mockCar } }} />,
    );
    expect(getByText('Tesla Model S')).toBeTruthy();
    expect(getByText('Tesla')).toBeTruthy();
    expect(getByText('$79999')).toBeTruthy();
    expect(getByText('Available Colors:')).toBeTruthy();
  });
});
