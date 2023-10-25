import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import ScrollDownButton from './ScrollDownButton';

const HeroButtons = () => {
  return (
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
  );
};

export default HeroButtons;
