import React, { useState, useEffect } from 'react';
import './CarsList.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Car } from '../../react-app-env';
import { getCars } from '../../api/cars';
import { CarCard } from '../CarCard';
import sortAsc from '../../images/sort asc.png';
// import sortDes from '../../images/sort des.png';

export const CarsList: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getCars()
      .then(allCars => setCars(allCars));
  }, []);

  // eslint-disable-next-line no-console
  console.log(cars);

  return (
    <div className="App__cars-list cars-list container">
      <h1 className="cars-list__title">Current offers</h1>

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
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            Instantly available vehicles
          </label>
        </div>

        <div className="cars-list__sort-by d-flex justify-content-between align-items-center">
          <p className="cars-list__sort-by-title">Sort by</p>
          <img src={sortAsc} alt="sortAsc" width="13" height="13" />
          {/* <img src={sortDes} alt="sortDes" width="13" height="13" /> */}
          <select
            className="form-select cars-list__sort-by-select"
            // value={}
            // {if option include des. то }
            // onChange={}
          >
            <option selected value="Publication date (ascending)">Publication date (ascending)</option>
            <option value="Publication date (descending)">Publication date (descending)</option>
            <option value="Price (ascending">Price (ascending)</option>
            <option value="Price (descending">Price (descending)</option>
            <option value="Mileage (ascending)">Mileage (ascending)</option>
            <option value="Mileage (ascending)">Mileage (ascending)</option>
            <option value="Performance (ascending)">Performance (ascending)</option>
            <option value="Performance (descending)">Performance (descending)</option>
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
