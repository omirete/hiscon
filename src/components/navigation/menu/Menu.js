import React from 'react';
import './Menu.css';
import ButtonSpotify from '../../icon-buttons/social/ButtonSpotify.js';
import ButtonInstagram from '../../icon-buttons/social/ButtonInstagram.js';
import ButtonTwitter from '../../icon-buttons/social/ButtonTwitter.js';

function Menu(props) {

  return (
    <div className={"menu" + (props.flagShow ? " show" : "")}>
      <div className="menu-content">
        <nav className="flex-item nav-links">
          <a href="#home" onClick={props.toggleMenu}>Inicio</a>
          <a href="#episodes" onClick={props.toggleMenu}>Episodios</a>
          <a href="#about" onClick={props.toggleMenu}>Acerca de mí</a>
          <a href="#books" onClick={props.toggleMenu}>Libros que recomiendo</a>
          <a href="#contact" onClick={props.toggleMenu}>Contacto</a>
        </nav>
        <div className="flex-item social-buttons">
          <div className="social-container">
            <div className="big-social-buttons">
              <a href="https://open.spotify.com/show/7uarSUYpISt1SBIGGitQFi">¡Escuchalo en spotify!</a>
            </div>
            <div className="small-social-buttons">
              <ButtonInstagram size="40" />
              <ButtonTwitter size="40" />
              <ButtonSpotify size="40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;