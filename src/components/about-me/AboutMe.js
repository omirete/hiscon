import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import profile_image_1 from './images/profile_1.jpg';
import profile_image_2 from './images/profile_2.jpg';
import profile_image_3 from './images/profile_3.jpg';
import profile_image_4 from './images/profile_4.jpg';
import background_image from './images/background_image_1.jpg';

const profile_images = [
  profile_image_1,
  profile_image_2,
  profile_image_3,
  profile_image_4
]

function AboutMe(props) {

  const [imageIndex, setImageIndex] = useState(0);

  function nextImage() {
    const nextIndex = (imageIndex + 1) % profile_images.length;
    setImageIndex(nextIndex);
  }

  useEffect(() => {
    const timeoutHandler = setTimeout(nextImage, 5000);
    // console.log("ran - " + imageIndex + " - " + imageIndex+1 % profile_images.length);
    return () => clearTimeout(timeoutHandler);
  });

  return (

    <div id="about" className="about-me section color-overlay">
      <div className="background-image-container">
        <img src={background_image} alt="background showing a staricase at Café Le Procope" className="background-image blur" />
      </div>
      <div className="about-me-content about-me-flexbox">
        <div className="flex-item about-me-text">
          <div className="section-title"><h1>Acerca de mí.</h1></div>
          <div className="about-me-description">
            <p>Me llamo Julieta Morales. Mi posición sexual favorita es yo arriba y abajo el patriarcado. Nací en Argentina, soy Comunicadora Social y tengo un Master en Género. Y, si bien trabajo como periodista y para organizaciones de Derechos Humanos, lo que más me gusta hacer es hablar sobre la concha.</p>
          </div>
        </div>
        <div className="flex-item about-me-profile-image">
          {/* Se puede poner un mensaje de voz sobre las fotos de Julieta, leyendo lo mismo que está escrito */}
          <img src={profile_images[imageIndex]} alt="Imagen de perfil de la autora" />
        </div>
      </div>
    </div >

  );
}

export default AboutMe;