import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img
                src="images/logo2.png"
                width="80"
                height="70"
                className="d-inline-block align-top"
                alt=""
              />
            </Link>
            <Link
              className="text-white"
              to="/mentions-legales"
              target="_blank"
              aria-label="LinkedIn"
            >
              <small>Mentions légales</small>
            </Link>
          </div>
          <small className="website-rights">orianne decoratrice © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

