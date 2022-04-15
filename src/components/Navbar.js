import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <Link to="/" onClick={closeMobileMenu} className="navbar-brand brand-text">
            <img src="images/leaf.png" width="85px" className="d-inline-block" alt="" />
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mariage" className="nav-link" onClick={closeMobileMenu}>
                Mariage
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/interieur" className="nav-link" onClick={closeMobileMenu}>
                Intérieur
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </>
  );
}

export default Navbar;

