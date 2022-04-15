import React from 'react';
import ContactForm from '../ContactForm';
import Footer from '../Footer';

const Contact = props => {
  return (
    <>
      <div className="container">
        <header className="section-title font-italic">
          <h1 className="display-4">Contactez-nous</h1>
        </header>
        <div className="divider" />
        <div className="container">
          <div className="row " style={{ height: '200px' }}>
            <div className="col  d-none d-md-block w-100">
              <h5 className="section-sub-title">Présentation</h5>
              <hr />
              <p>Orianne Jaming</p>
              <p>Décoratrice diplomée après un parcours en Arts Appliqués.</p>
            </div>
            <div className="col w-100">
              <h5 className="section-sub-title">Siège</h5>
              <hr />
              <p>
                15 rue du docteur Albert Schweitzer <br />
                67320 Drulingen Bas-Rhin <br />
                Téléphone: <a href="tel:+33683659718">06 83 65 97 18</a>
                <br />
                Mail:
                <a href="mailto: orianne.decoratrice@gmail.com">orianne.decoratrice@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="divider" />
      </div>
      <div>
        <hr />
        <div className="container mb-4" style={{ marginBottom: '84px' }}>
          <div className="row">
            <div className="col w-100">
              <p className="mx-4">
                Vous souhaitez plus d'informations, utilisez ce formulaire avec les détails de votre
                demande.
                <br /> Nous vous répondrons rapidement
              </p>
              <ContactForm />
            </div>
            <div className="col d-none d-md-block w-100">
              <img src="images/mariage/3.jpg" alt="" className="w-100" />
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '150px' }}>
          <div className="row">
            <div className="col text-center">
              <h6>Informations entreprise</h6>
              <p>
                Siret: 518 114 376 000 24 <br />
                code APE: 9329Z <br />
                RM67 RCS SAVERNE A518 114 376 <br />
                Numéro TVA intracommunautaire: FR08518114376
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

