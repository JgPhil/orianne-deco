import React from 'react';
import Footer from '../Footer';
import Slider from '../Slider';
import VideoPlayer from '../VideoPlayer';

const Mariage = () => {
  const images = [
    'champ',
    'hochberg',
    'italie',
    '1',
    '2',
    //'3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    // '13',
    '2_champ2',
    '2_cheese',
    '2_print',
    '2_tent',
    '2_tent2',
    '2_vint',
    '14',
  ];
  return (
    <>
      <div className="container " style={{ marginBottom: '84px' }}>
        <header className="section-title font-italic ">
          <h1 className="display-4">Mariage</h1>
        </header>
        <div className="section-text">
          <div className="inner-section">
            <div className="section-sub-title font-italic">
              <h4>Décors floraux pour votre Mariage ou Réception</h4>
            </div>
            <p className="lead">
              Pour décorer les tables du repas : <br />
              Des centres de tables floraux créés selon vos couleurs avec location de bougeoirs et
              accessoires déco
            </p>
          </div>
          <div className="divider" />
          <div className="inner-section">
            <div className="lead">
              Pour une belle harmonie Orianne Décoratrice réalise également des décors
              complémentaires : <br />
              Bouquet de mariée en harmonie avec votre robe <br />
              Boutonnière du marié assortie <br />
              Housses de chaises en tissu blanc <br />
              Arche décorée - Décors floraux pour la cérémonie - Décors pour les buffets du vin
              d'honneur et cérémonie en extérieur
            </div>
          </div>
        </div>
        <Slider category="mariage" pics={images} />
      </div>
      <Footer />
    </>
  );
};

export default Mariage;
