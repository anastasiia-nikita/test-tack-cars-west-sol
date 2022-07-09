import React from 'react';
import classnames from 'classnames';
import './CarCard.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Car } from '../../react-app-env';

interface Props {
  car: Car,
}

export const CarCard: React.FC<Props> = ({ car }) => (
  <div className="car-card col-sm-6 col-md-4 col-xl-3">
    <div className="card border-white shadow-sm">
      <img src={car.photo} className="card-img-top" alt={car.model} />
      <div className={classnames('car-card__body', 'card-body', {
        'car-card__body--nonactive': car.id === 7,
      })}
      >
        <p className="car-card__year">{car.year}</p>
        <h5 className="car-card__title card-title">{`${car.brand} ${car.model}`}</h5>
        <p className="car-card__subtitle card-text">
          {`${car.race} km | ${car.transmission} | ${car.engines}`}
        </p>
        <p className="car-card__price">{`$${car.price}`}</p>
      </div>
    </div>
  </div>

);
