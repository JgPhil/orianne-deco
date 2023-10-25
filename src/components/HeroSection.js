import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import ScrollDownButton from './ScrollDownButton';
import VideoPlayer from './VideoPlayer';
import HeroButtons from './HeroButtons';

function HeroSection() {
  return (
    <div className="jumbotron">
      <div className="container">
        <br />
        <VideoPlayer />
        <br />
        {/* <img src="images/logo2.png" alt="logo" className="hero-logo" /> */}
        <h1>Créatrice de décors personnalisés</h1>
        <HeroButtons />
      </div>
    </div>
  );
}

export default HeroSection;

