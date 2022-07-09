import React from 'react';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Car } from '../../react-app-env';

interface Props {
  car: Car,
}

export const CarCard: React.FC<Props> = ({ car }) => (
  <div className="col-sm-6 col-md-4 col-xl-3">
    <div className="card border-white shadow-sm">
      <img src={car.photo} className="card-img-top" alt={car.model} />
      <div className="card-body">
        <p>{car.year}</p>
        <h5 className="card-title">{`${car.brand} ${car.model}`}</h5>
        <p className="card-text">
          {`${car.race} km | ${car.transmission} | ${car.engines}`}
        </p>
        <p className="">{`$${car.price}`}</p>
      </div>
    </div>
  </div>

);
