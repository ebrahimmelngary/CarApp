import { Car } from "../features/cars/types";

export type RootStackParamList = {
  CarsList: undefined;
  Details: {
    car:Car
  };
};
