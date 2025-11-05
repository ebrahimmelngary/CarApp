import { carsData } from "../../../data/cars";
import { Car } from "../types";

export const fetchCars = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carsData);
    }, 1500);
  });
};

export const fetchCarById = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carsData.find((c:Car) => c.id === id));
    }, 800);
  });
};
