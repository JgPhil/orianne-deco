import React from 'react';
import './Slider.css';

const Slider = ({ category, pics }) => {
  let first = 0;
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {pics.map(picture => {
          first += 1;
          return (
            <div className={first === 1 ? ' carousel-item active' : 'carousel-item'}>
              <img
                className="d-block w-100"
                src={`images/${category}/${picture}.jpg`}
                alt="First slide"
              />
            </div>
          );
        })}
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

