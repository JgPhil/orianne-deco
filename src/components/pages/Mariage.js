import React from 'react';
import Footer from '../Footer';
import Slider from '../Slider';

const Mariage = () => {
  return (
    <>
      <div className="container">
        <h1>Mariage</h1>
        <h4> Décors floraux pour votre Mariage ou Réception</h4>
        <p>
          Pour décorer les tables du repas : <br />
          Des centres de tables floraux créés selon vos couleurs avec location de bougeoirs et accessoires déco
        </p>
        <p>Pour une belle harmonie Orianne Décoratrice réalise également des décors complémentaires :</p>
        <ul>
          <li>Bouquet de mariée en harmonie avec votre robe</li>
          <li> Boutonnière du marié assortie</li>
          <li>Housses de chaises en tissu blanc</li>
          <li>
            Arches décorée - Décors floraux pour la cérémonie - Décors pour les buffets du vin d'honneur et cérémonie en
            extérieur
          </li>
        </ul>
        <Slider category='mariage'/>
        <Footer />
      </div>
    </>
  );
};

export default Mariage;
