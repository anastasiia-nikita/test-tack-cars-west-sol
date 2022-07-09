import React from 'react';
import './FormSubscribe.scss';

export const FormSubscribe: React.FC = () => (
  <div className="App__form-subscribe form-subscribe">
    <div className="container">
      <div className="row d-flex align-items-center form-subscribe__block">
        <div className="col-5">
          <h2 className="form-subscribe__title">Haven&apos;t found a suitable vehicle?</h2>
          <p className="form-subscribe__subtitle m-0">
            Sign up for our newsletter and be the first to know when we publish new vehicle offers.
          </p>
        </div>
        <div className="col-5">
          <input
            className="form-control form-subscribe__input"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="col-2">
          <button className="btn btn-backgroundColor form-subscribe__button" type="submit">Subscribe now</button>
        </div>
      </div>
    </div>
  </div>
);

// додати помилку is-valid is-invalid
