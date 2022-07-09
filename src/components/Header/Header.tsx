import React from 'react';
import './Header.scss';
import { Navigation } from '../Navigation';

export const Header: React.FC = () => (
  <header className="header App__header">
    <div className="container-fluid">
      <Navigation />

      <div className="container header__text">
        <h1 className="header__text-title">The right way to get a car</h1>

        <div className="row">
          <div className="col-lg-3 col-xs-6">
            <p className="header__text-description">
              Monza Motorsports is a boutique-style dealership specializing in premium imports.
              We offer an advanced online vehicle purchasing experience with integrated financing
              and contactless home delivery.
            </p>
          </div>

          <div className="col-lg-3 col-xs-6">
            <p className="header__text-description">
              All of our cars come with a 5 day/500 kilometres no-hassle exchange option.
              Since 2012 Monza Motorsports has been the benchmark
              for innovation in the automotive industry.
            </p>
          </div>

        </div>
      </div>

      <div className="container">
        <a className="row-cols-1 row-cols-lg-4 " href="#cars">
          <button
            type="button"
            className="header__button btn btn-outline-backgroundColor btn-lg"
          >
            Browse cars
          </button>
        </a>
      </div>
    </div>
  </header>
);
