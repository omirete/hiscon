import React from 'react';
import './Contact.css';
import logo_texto_blanco_transparente_30 from '../../images/logo-texto-blanco-transparente-30.svg';
import ButtonSpotify from '../../components/icon-buttons/social/ButtonSpotify.js';
import ButtonInstagram from '../../components/icon-buttons/social/ButtonInstagram.js';
import ButtonTwitter from '../../components/icon-buttons/social/ButtonTwitter.js';

function Contact() {

  return (
    <footer id="contact" className="contact section">
      <div className="logo">
        <img src={logo_texto_blanco_transparente_30} alt="La historia de la concha" />
      </div>
      <div className="logo-subtitle">
        Podcast
      </div>

      <div className="mail-info">
        Contacto: <a href="mailto:hello@julietamorales.com">hello@julietamorales.com</a>
      </div>

      <div className="social-icons">
        <ButtonInstagram size="42" />
        <ButtonTwitter size="42" />
        <ButtonSpotify size="42" />
      </div>

    </footer>
  );
}

export default Contact;