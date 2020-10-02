import React from 'react';
import IconButton from '../IconButton.js';
import { ReactComponent as Logo } from './svg-icons/instagram.svg';

const ButtonInstagram = (props) => {
  const iconScale = 0.4;
  return (
    <IconButton
      url="https://www.instagram.com/historiadelaconchapodcast/"
      size={props.size}
      desc="Go to Instagram profile"
      circleEnclosed={true} >
      <Logo className="svg-icon" style={{
        height: props.size*iconScale + "px",
        width: props.size*iconScale + "px"}} />
    </IconButton>
  );
}

export default ButtonInstagram;