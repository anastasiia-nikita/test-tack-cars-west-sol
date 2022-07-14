import React, { useState, useEffect, useMemo } from 'react';
import './CarsList.scss';
import classnames from 'classnames';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Car } from '../../react-app-env';
import { getCars } from '../../api/cars';
import { CarCard } from '../CarCard';
import sortAsc from '../../images/sort asc.png';
import sortDes from '../../images/sort des.png';

type SortByType = 'Publication date (ascending)'
| 'Publication date (descending)'
| 'Price (ascending)'
| 'Price (descending)'
| 'Mileage (ascending)'
| 'Mileage (descending)'
| 'Performance (ascending)'
| 'Performance (descending)';

export const CarsList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [carMake, setCarMake] = useState('');
  const [sortBy, setSortBy] = useState<SortByType>('Publication date (ascending)');

  useEffect(() => {
    getCars()
      .then(allCars => setCars(allCars));
  }, []);

  const visibleCars = useMemo(() => {
    return cars.filter(car => (
      car.brand.includes(carMake)
    ));
  }, [cars, carMake]);

  return (
    <div className="App__cars-list cars-list container" id="cars">
      <h2 className="cars-list__title">Current offers</h2>

      <div className="container cars-list__block">
        <div className="row g-3">
          <div className="col-sm-6 col-md-4 col-xl cars-list__col">
            <select
              className="form-select cars-list__select"
            >
              <option selected disabled>Year</option>
            </select>
          </div>

          <div className="col-sm-6 col-md-4 col-xl cars-list__col">
            <select
              className={classnames('form-select', 'cars-list__select', {
                'cars-list__select--selected': carMake,
              })}
              value={carMake}
              onChange={(event) => setCarMake(event.target.value)}
            >
              <option value="">Make</option>
              {cars.map(car => (
                <option
                  className="cars-list__select__option"
                  key={car.id}
                  value={car.brand}
                >
                  {car.brand}
                </option>
              ))}
            </select>
          </div>

          <div className="col-sm-6 col-md-4 col-xl cars-list__col">
            <select
              className="form-select cars-list__select"
            >
              <option selected disabled>Model</option>
            </select>
          </div>

          <div className="col-sm-6 col-md-4 col-xl cars-list__col">
            <select
              className="form-select cars-list__select"
            >
              <option selected disabled>Trim</option>
            </select>
          </div>

          <div className="col-sm-6 col-md-4 col-xl cars-list__col">
            <select
              className="form-select cars-list__select"
            >
              <option selected disabled>Mileage</option>
            </select>
          </div>

          <div className="col-sm-6 col-md-4 col-xl-3 cars-list__col">
            <button
              type="button"
              className="btn btn-brandColor btn-lg cars-list__button"
            >
              {`${visibleCars.length} cars`}
            </button>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-between align-items-center cars-list__block">
        <div className="col-sm-6 col-md-4 form-check">
          <label className="form-check-label cars-list__checkbox" htmlFor="flexCheckDefault">
            <input className="form-check-input cars-list__checkbox--checked" type="checkbox" value="" id="flexCheckDefault" />
            <p className="cars-list__checkbox__text">Instantly available vehicles</p>
          </label>
        </div>

        <div className="col-sm-6 col-md-5 col-xl-3 cars-list__sort-by d-flex justify-content-start align-items-center">
          <p className="cars-list__sort-by-title">Sort by</p>
          {sortBy.includes('ascending')
            ? <img src={sortAsc} alt="sortAsc" width="13" height="13" />
            : <img src={sortDes} alt="sortDes" width="13" height="13" />}
          <select
            className="form-select cars-list__sort-by-select"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortByType)}
          >
            <option>Publication date (ascending)</option>
            <option>Publication date (descending)</option>
            <option>Price (ascending)</option>
            <option>Price (descending)</option>
            <option>Mileage (ascending)</option>
            <option>Mileage (ascending)</option>
            <option>Performance (ascending)</option>
            <option>Performance (descending)</option>
          </select>
        </div>
      </div>

      <div className="container">
        <div className="row g-3">
          {visibleCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};
