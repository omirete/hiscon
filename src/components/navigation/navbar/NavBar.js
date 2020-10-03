import React, { useEffect, useState } from 'react';
import './NavBar.css';
import logo_texto_blanco from '../../../images/logo-texto-blanco.svg';
import ButtonSpotify from '../../icon-buttons/social/ButtonSpotify.js';
import ButtonInstagram from '../../icon-buttons/social/ButtonInstagram.js';
import ButtonTwitter from '../../icon-buttons/social/ButtonTwitter.js';
import Hamburger from '../hamburger/Hamburger.js';
import Menu from '../menu/Menu.js';

function NavBar(props) {

  const [flagScrolled, setFlagScrolled] = useState(false);
  const [flagShowMenu, setFlagShowMenu] = useState(false);
  const toggleMenu = () => {
    setFlagShowMenu(!flagShowMenu);
  }

  useEffect(() => {

    const scrollHandler = (e) => {
      if (window.scrollY > 50 && flagScrolled === false) {
        setFlagScrolled(true);
      } else if (window.scrollY <= 50 && flagScrolled === true) {
        setFlagScrolled(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    
    // From the docs: https://reactjs.org/docs/hooks-effect.html#example-using-hooks-1
    // Why did we return a function from our effect? This is the optional
    //cleanup mechanism for effects. Every effect may return a function that
    // cleans up after it. This lets us keep the logic for adding and removing
    // subscriptions close to each other. They’re part of the same effect!

    // When exactly does React clean up an effect? React performs the cleanup
    // when the component unmounts. However, as we learned earlier, effects run
    // for every render and not just once. This is why React also cleans up
    // effects from the previous render before running the effects next time.

    return (() => {
      window.removeEventListener("scroll", scrollHandler);
    })
  });

  return (
    <div className="navbar">
      < header className={"navbar-content" + (flagScrolled ? " scrolled" : "")} >

        <div className="flex-item left-aligned">

          <div className="logo">
            <a href="#home">
              <img src={logo_texto_blanco} alt="La historia de la concha" />
            </a>
          </div>

          <nav className="nav-links">
            <a href="#home">Inicio</a>
            <a href="#about">Acerca de mí</a>
            <a href="#episodes">Episodios</a>
            <a href="#books">Libros que recomiendo</a>
            <a href="#contact">Contacto</a>
          </nav>

        </div>

        <div className="flex-item separator"></div>

        <div className="flex-item right-aligned">

          <div className="social-buttons">
            <div className="big-social-buttons">
              <a href="https://open.spotify.com/show/7uarSUYpISt1SBIGGitQFi">¡Escuchalo en spotify!</a>
            </div>
            <div className="small-social-buttons">
              <ButtonInstagram size="30" />
              <ButtonTwitter size="30" />
              <ButtonSpotify size="30" />
            </div>
          </div>

          <div className="hamburger-container">
            <Hamburger
              size="32"
              onClick={toggleMenu} />
          </div>

        </div>
      </header >
      <Menu
        flagShow={flagShowMenu}
        toggleMenu={toggleMenu} />
    </div>
  );
}

export default NavBar;