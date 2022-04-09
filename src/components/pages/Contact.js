import React from 'react';
import ContactForm from '../ContactForm';

const Contact = props => {
  return (
    <>
      <div className="container">
        <header className="section-title font-italic">
          <h1>Contactez-nous</h1>
        </header>
        <div className="row" style={{ height: '300px' }}>
          <div className="col d-flex">
            <h5>Orianne Décoratrice</h5>
            <p>Activités spéciales de design</p>
          </div>
          <div className="col d-flex"></div>
        </div>
      </div>
      <div>
        <hr />
        <div className="container">
          <p className="lead">
            Vous souhaitez plus d'informations, utilisez ce formulaire avec les détails de votre
            demande.
            <br /> Nous vous répondrons rapidement
          </p>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;

