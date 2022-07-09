/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import { Car } from '../react-app-env';

export const getCars = async (): Promise<Car[]> => {
  const response = await fetch('cars.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return response.json();
};
