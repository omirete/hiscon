import React from 'react';
import IconButton from '../IconButton.js';
import { ReactComponent as Logo } from './svg-icons/twitter.svg';

const ButtonTwitter = (props) => {
  const iconScale = 0.5;
  return (
    <IconButton
      url="https://twitter.com/tinderfemininja"
      size={props.size}
      desc="Go to Twitter profile"
      circleEnclosed={true} >
      <Logo className="svg-icon" style={{
        height: props.size*iconScale + "px",
        width: props.size*iconScale + "px"}} />
    </IconButton>
  );
}

export default ButtonTwitter;