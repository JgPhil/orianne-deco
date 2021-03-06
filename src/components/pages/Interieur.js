import React from 'react';
import Footer from '../Footer';
import Slider from '../Slider';

const Interieur = () => {
  const images = ['2855', '2858', '2864'];
  return (
    <>
      <div className="container" style={{ marginBottom: '84px' }}>
        <header className="section-title font-italic ">
          <h1 className="display-4">Décoration d'intérieur</h1>
        </header>
        <div className="section-text">
          <div className="inner-section">
            <div className="section-sub-title font-italic">
              <h4>Relooker votre décoration</h4>
            </div>
            <p>
              Des conseils et des idées qui s'adaptent à vos besoins{'\n'} Orianne vous conseille
              pour le choix des couleurs murales de votre intérieur
            </p>
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
        </div>
        <Slider category="interieur" pics={images} />
      </div>
      <Footer />
    </>
  );
};

export default Interieur;
