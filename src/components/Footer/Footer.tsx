import React from 'react';
// import { Navigation } from '../Navigation';
import './Footer.scss';
import logo from '../../images/logo (Traced).png';
import instagramLogo from '../../images/instagram_logo.png';
import facebookLogo from '../../images/facebook_logo.png';

export const Footer: React.FC = () => (
  <footer className="footer">
    <nav className="navbar navigation--footer">
      <div className="container justify-content-between">
        <a
          className="navbar-brand"
          href="#home"
        >
          <img
            src={logo}
            alt="logoMonza"
            width="139"
            height="35"
          />
        </a>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link navigation__link" href="#inventory">Inventory</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navigation__link" href="#financing">Financing</a>
          </li>
          <li className="nav-item ml-5">
            <a className="nav-link navigation__link" href="#contacts">Contacts</a>
          </li>
        </ul>

        <div className="d-flex justify-content-center align-items-center gap-5">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebookLogo} alt="facebookLogo" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramLogo} alt="instagramLogo" />
          </a>
        </div>
      </div>
    </nav>
  </footer>
);
