import React from 'react';
import ContactForm from '../ContactForm';

const Contact = props => {
  return (
    <>
      <div>
        <h1>Contact</h1>
        <hr />
        <div className="container">
          <p className="lead">
            Vous souhaitez plus d'informations, utilisez ce formulaire avec les détails de votre demande.
            <br /> Nous vous répondrons rapidement
          </p>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;

