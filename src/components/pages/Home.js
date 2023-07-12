import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Slider from '../Slider';

function Home() {
  const images = ['2', '3', '10',"2_champ2", "2_cheese","2_print", "2_tent", "2_tent2", "2_vint"];
  return (
    <>
      <HeroSection />
      <Slider category="mariage" pics={images} />
      <Footer />
    </>
  );
}

export default Home;

