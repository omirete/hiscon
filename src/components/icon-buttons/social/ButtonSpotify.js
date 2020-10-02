import React from 'react';
import IconButton from '../IconButton.js';
import { ReactComponent as Logo } from './svg-icons/spotify.svg';

const ButtonSpotify = (props) => {
  const iconScale = 0.5;
  return (
    <IconButton
      url="https://open.spotify.com/show/7uarSUYpISt1SBIGGitQFi"
      size={props.size}
      desc="Go to Spotify podcast"
      circleEnclosed={true} >
      <Logo className="svg-icon" style={{
        height: props.size*iconScale + "px",
        width: props.size*iconScale + "px"}} />
    </IconButton>
  );
}

export default ButtonSpotify;