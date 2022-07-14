import React, { useState } from 'react';
import classnames from 'classnames';
import './FormSubscribe.scss';

export const FormSubscribe: React.FC = () => {
  const [wasValidate, setWasValidate] = useState(false);
  const [formError, setFormError] = useState(false);
  const [email, setEmail] = useState('');

  const regexEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  return (
    <div className="App__form-subscribe form-subscribe">
      <div className="container">
        <div className="row gx-3 d-flex align-items-center form-subscribe__block">
          <div className="col-lg-5">
            <h2 className="form-subscribe__title">Haven&apos;t found a suitable vehicle?</h2>
            <p className="form-subscribe__subtitle m-0">
              Sign up for our newsletter and be the first to know when
              we publish new vehicle offers.
            </p>
          </div>

          <div className="col-lg">
            <div className="row">
              <form
                className="row g-2 d-flex align-items-center"
                onSubmit={(event) => {
                  event.preventDefault();
                  setWasValidate(true);

                  if (regexEmail.test(email)) {
                    setFormError(false);
                  } else {
                    setFormError(true);
                  }
                }}
              >
                <div className="col-sm-8">
                  <input
                    className={classnames('form-control', 'form-subscribe__input', {
                      'form-subscribe__input': !wasValidate && !formError,
                      'is-valid': wasValidate && !formError,
                      'is-invalid': wasValidate && formError,
                    })}
                    id="validation"
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => {
                      setWasValidate(false);
                      setEmail(event.target.value);
                    }}
                  />

                  {formError && (
                    <div id="validation" className="invalid-feedback form-subscribe__invalid">
                      Incorrect email
                    </div>
                  )}
                </div>

                <div className="col-sm-4">
                  <button
                    className="btn btn-backgroundColor form-subscribe__button col-6"
                    type="submit"
                  >
                    Subscribe now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
