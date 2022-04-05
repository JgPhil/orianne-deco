import React from 'react';
import Footer from '../Footer';
import Slider from '../Slider';

const Interieur = () => {
  return (
    <>
      <div className="container">
        <div className="inner-section">
          <header className="section-title font-italic ">
            <h1 className="display-3">Décoration d'intérieur</h1>
          </header>
          <div className="section-sub-title font-italic">
            <h4>Décoration d'intérieur</h4>
          </div>
          <p>Des conseils et des idées qui s'adaptent à vos besoins</p>
        </div>
        <div className="inner-section">
          <div className="section-sub-title font-italic">
            <h4>Relooker votre décoration</h4>
          </div>
          <p>Orianne vous conseille pour le choix des couleurs murales</p>
        </div>
        <div className="divider" />
        <div className="inner-section">
          <div className="section-sub-title font-italic">
            <h4>Harmoniser votre pièce</h4>
          </div>
          <p>Orianne vous guide pour choisir les accessoires et le mobilier</p>
        </div>
        <div className="divider" />
        <div className="inner-section">
          <div className="section-sub-title font-italic">
            <h4>Aménager votre intérieur</h4>
          </div>
          <p>Des idées pour aménager un intérieur pratique et agréable</p>
        </div>
        <Slider />
        <Footer />
      </div>
    </>
  );
};

export default Interieur;
