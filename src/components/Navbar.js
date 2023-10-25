import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();

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

  const checkPath = path => {
    return location.pathname === path ? ' active' : '';
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link to="/" onClick={closeMobileMenu} className="navbar-brand brand-text is-nav-leaf">
            <img src="images/leaf.png" width="85px" className="d-inline-block" alt="" />
          </Link>
          <ul className="navbar-nav is-nav">
            <li className={'nav-item'}>
              {/* <Button className="btns" buttonStyle={'btn--outline'} buttonSize={'btn--small'}> */}
              <Link to="/" className={'nav-link' + checkPath('/')} onClick={closeMobileMenu}>
                Accueil
              </Link>
              {/* </Button> */}
            </li>
            <li className={'nav-item'}>
              {/* <Button className="btns" buttonStyle={'btn--outline'} buttonSize={'btn--small'}> */}
              <Link
                to="/mariage"
                className={'nav-link' + checkPath('/mariage')}
                onClick={closeMobileMenu}
              >
                Mariage
              </Link>
              {/* </Button> */}
            </li>
            <li className={'nav-item'}>
              {/* <Button className="btns" buttonStyle={'btn--outline'} buttonSize={'btn--small'}> */}
              <Link
                to="/interieur"
                className={'nav-link' + checkPath('/interieur')}
                onClick={closeMobileMenu}
              >
                Intérieur
              </Link>
              {/* </Button> */}
            </li>
            <li className={'nav-item'}>
              {/* <Button className="btns" buttonStyle={'btn--outline'} buttonSize={'btn--small'}> */}
              <Link
                to="/contact"
                className={'nav-link' + checkPath('/contact')}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              {/* </Button> */}
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
        <div className="navbar-title">Orianne Décoratrice</div>
      </nav>
    </>
  );
}

export default Navbar;

