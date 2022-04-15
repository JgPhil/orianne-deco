import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Slider from '../Slider';

function Home() {
  const images = ['2', '3', '10', '13'];
  return (
    <>
      <HeroSection />
      <Slider category="mariage" pics={images} />
      <Footer />
    </>
  );
}

export default Home;

