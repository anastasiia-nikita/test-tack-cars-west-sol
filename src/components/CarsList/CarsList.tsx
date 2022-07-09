import React, { useState, useEffect } from 'react';
import './CarsList.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Car } from '../../react-app-env';
import { getCars } from '../../api/cars';
import { CarCard } from '../CarCard';
import sortAsc from '../../images/sort asc.png';
import sortDes from '../../images/sort des.png';

// type SortByType = 'Publication date (ascending)'
// | 'Publication date (descending)'
// | 'Price (ascending)'
// | 'Price (descending)'
// | 'Mileage (ascending)'
// | 'Mileage (descending)'
// | 'Performance (ascending)'
// | 'Performance (descending)';

export const CarsList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [sortBy, setSortBy] = useState('Publication date (ascending)');

  useEffect(() => {
    getCars()
      .then(allCars => setCars(allCars));
  }, []);

  // eslint-disable-next-line no-console
  console.log(sortBy);

  return (
    <div className="App__cars-list cars-list container" id="cars">
      <h2 className="cars-list__title">Current offers</h2>

      <div className="container cars-list__block">
        <div className="row">
          <div className="col cars-list__col">
            <select
              className="form-select cars-list__select"
              // value={}
              // onChange={}
            >
              <option className="cars-list__select__option" value="0" selected disabled>Year</option>
              {cars.map(car => (
                <option key={car.id} value={car.year}>{car.year}</option>
              ))}
            </select>
          </div>

          <div className="col cars-list__col">
            <select
              className="form-select cars-list__select"
              // value={}
              // onChange={}
            >
              <option value="0" selected disabled>Make</option>
              {cars.map(car => (
                <option key={car.id} value={car.id}>{car.brand}</option>
              ))}
            </select>
          </div>

          <div className="col cars-list__col">
            <select
              className="form-select cars-list__select"
            >
              <option selected disabled>Model</option>
            </select>
          </div>

          <div className="col cars-list__col">
            <select
              className="form-select cars-list__select"
            >
              <option selected disabled>Trim</option>
            </select>
          </div>

          <div className="col cars-list__col">
            <select
              className="form-select cars-list__select"
            >
              <option selected disabled>Mileage</option>
            </select>
          </div>

          <div className="col-3 cars-list__col">
            <button
              type="button"
              className="btn btn-brandColor btn-lg cars-list__button"
            >
              40 cars
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center cars-list__block">
        <div className="form-check">
          <label className="form-check-label cars-list__checkbox" htmlFor="flexCheckDefault">
            <input className="form-check-input cars-list__checkbox--checked" type="checkbox" value="" id="flexCheckDefault" />
            Instantly available vehicles
          </label>
        </div>

        <div className="cars-list__sort-by d-flex justify-content-between align-items-center">
          <p className="cars-list__sort-by-title">Sort by</p>
          {sortBy.includes('ascending')
            ? <img src={sortAsc} alt="sortAsc" width="13" height="13" />
            : <img src={sortDes} alt="sortDes" width="13" height="13" />}
          <select
            className="form-select cars-list__sort-by-select"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="Publication date (ascending)">Publication date (ascending)</option>
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
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};
