import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import profile_image_1 from './images/profile_1.jpg';
import profile_image_2 from './images/profile_2.jpg';
import profile_image_3 from './images/profile_3.jpg';
import profile_image_4 from './images/profile_4.jpg';
import background_image from './images/background_image_1.jpg';


function ProfilePictureCarousel(props) {

  const profile_images = [
    profile_image_1,
    profile_image_2,
    profile_image_3,
    profile_image_4
  ]
  const [activeIndex, setActiveIndex] = useState(0);

  const ProfileImages = profile_images.map((profile_image, i, arr) => {
    
    let imgClass = "";

    switch (i) {
      case activeIndex:
        imgClass = "active";
        break;
      case ((activeIndex+1) % arr.length):
        imgClass = "next-up";
        break;
      case (activeIndex === 0 ? arr.length-1 : activeIndex-1):
        imgClass = "previous";
        break;
      default:
        imgClass = "other";
        break;
    }

    return (
      <img
        src={profile_image}
        className={imgClass}
        alt="Se muestra a la autora." />

    );
  });

  useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      const nextIndex = (activeIndex + 1) % profile_images.length;
      setActiveIndex(nextIndex);
    }, 5000);
    // console.log("ran - " + imageIndex + " - " + imageIndex+1 % profile_images.length);
    return () => clearTimeout(timeoutHandler);
  }, [activeIndex, profile_images]);

  return (
    <div className="flex-item about-me-profile-image">
      {/* Se puede poner un mensaje de voz sobre las fotos de Julieta, leyendo lo mismo que está escrito */}
      {ProfileImages}
    </div>
  )
}

function AboutMe(props) {

  return (

    <div id="about" className="about-me section color-overlay">
      <div className="background-image-container">
        <img
          src={background_image}
          alt="background showing a staricase at Café Le Procope, in Paris"
          className="background-image blur" />
      </div>
      
      <div className="about-me-content about-me-flexbox">
        <div className="flex-item about-me-text">
          <div className="section-title"><h1>Acerca de mí.</h1></div>
          <div className="about-me-description">
            <p>Me llamo Julieta Morales. Mi posición sexual favorita es yo arriba y abajo el patriarcado. Nací en Argentina, soy Comunicadora Social y tengo un Master en Género. Y, si bien trabajo como periodista y para organizaciones de Derechos Humanos, lo que más me gusta hacer es hablar sobre la concha.</p>
          </div>
        </div>
        {/* <ProfilePicture /> */}
        <ProfilePictureCarousel />
      </div>
    </div >

  );
}

export default AboutMe;