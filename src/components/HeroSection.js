import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import ScrollDownButton from './ScrollDownButton';

function HeroSection() {
  return (
    <div className="jumbotron">
      <div className="container">
        <img src="images/logo2.png" alt="" className="logo-or" />
        <h1>Créatrice de décors personnalisés</h1>
        <div className="hero-btns">
          <Link to="/mariage">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--medium">
              Mariage
            </Button>
          </Link>
          <Link to="/interieur">
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--medium">
              Relooking
            </Button>
          </Link>
          <ScrollDownButton />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

