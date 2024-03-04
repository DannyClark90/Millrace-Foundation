import React from "react";
import "../Sass/Layout/_navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__title-and-logo">
          <img
            className="navbar__logo"
            src="src/assets/Millrace White Logo.png"
            alt="Millrace white logo"
          />
          <h1 className="navbar-heading">The Millrace Foundation</h1>
        </div>

        <ul className="top-nav">
          <li className="top-nav__item top-nav__item--active">
            <Link to="#" className="top-nav__link">
              Home
            </Link>
          </li>

          <li className="top-nav__item top-nav__item--active">
            <Link to="#" className="top-nav__link">
              About Us
            </Link>
          </li>

          <li className="top-nav__item top-nav__item--active">
            <Link to="#" className="top-nav__link">
              What We Do
            </Link>
          </li>

          <li className="top-nav__item top-nav__item--active">
            <Link to="#" className="top-nav__link">
              Support Us
            </Link>
          </li>

          <li className="top-nav__item top-nav__item--active">
            <Link to="#" className="top-nav__link">
              News
            </Link>
          </li>

          <li className="top-nav__item top-nav__item--active">
            <Link to="#" className="top-nav__link">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
