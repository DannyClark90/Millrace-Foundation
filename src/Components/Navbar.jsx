import React, { useState } from "react";
import "../Sass/Layout/_navbar.scss";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [nav, setNav] = useState("top-nav")
  const [isToggled, setToggled] = useState("false")

  const toggleNav = (event) => {
    event.preventDefault()
    setToggled(!isToggled)
    if(isToggled){
      setNav("mobile-nav")
    }
    else{
      setNav("top-nav")
    }
  }

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
        
        <FaBars className="burger-menu" onClick={toggleNav}/>
        
        <ul className={nav}>
          <li className={`${nav}__item`}>
            <Link to="/" className={`${nav}__link`}>
              Home
            </Link>
          </li>

          <li className={`${nav}__item`}>
            <Link to="#" className={`${nav}__link`}>
              About Us
            </Link>
          </li>

          <li className={`${nav}__item`}>
            <Link to="#" className={`${nav}__link`}>
              Support Us
            </Link>
          </li>

          <li className={`${nav}__item`}>
            <Link to="/contact-us" className={`${nav}__link`}>
              Contact Us
            </Link>
          </li>

          <li className={`${nav}__item`}>
            <Link to="#" className={`${nav}__link`}>
              News
            </Link>
          </li>

          <li className={`${nav}__item`}>
            <Link to="#" className={`${nav}__link`}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
