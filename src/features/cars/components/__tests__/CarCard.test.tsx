import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CarCard } from '../CarCard';
import { Car } from '../../types';

describe('CarCard Component', () => {
  const mockCar: Car = {
    id: '1',
    name: 'Tesla Model S',
    brand: 'Tesla',
    price: 79999,
    images: [
      'https://example.com/tesla1.jpg',
      'https://example.com/tesla2.jpg',
    ],
  };

  const onPressMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders car details correctly', () => {
    const { getByText } = render(
      <CarCard car={mockCar} onPress={onPressMock} />,
    );

    expect(getByText('Tesla Model S')).toBeTruthy();
    expect(getByText('Tesla')).toBeTruthy();
    expect(getByText('$79999')).toBeTruthy();
  });

  it('renders the mock Carousel component', () => {
    const { getByTestId } = render(
      <CarCard car={mockCar} onPress={onPressMock} />,
    );
    expect(getByTestId('mock-carousel')).toBeTruthy();
  });

  it('passes images to the Carousel correctly', () => {
    const { getAllByTestId } = render(
      <CarCard car={mockCar} onPress={onPressMock} />,
    );
    const images = getAllByTestId(/carousel-img-/);
    expect(images.length).toBe(mockCar.images.length);
  });

  it('calls onPress when Carousel triggers press', () => {
    const { getByTestId } = render(
      <CarCard car={mockCar} onPress={onPressMock} />,
    );
    fireEvent.press(getByTestId('mock-carousel'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const { toJSON } = render(<CarCard car={mockCar} onPress={onPressMock} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
