import React from 'react';
import './Slider.css';
import { MARIAGE_PICS } from '..';

const Slider = props => {
  console.log(MARIAGE_PICS)
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="images/italie.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="images/2855.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="images/2864.jpg" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;

