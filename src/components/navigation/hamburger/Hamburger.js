import React from 'react';
import { ReactComponent as Logo } from '../svg-icons/hamburger-bars.svg';
import './Hamburger.css';

const Hamburger = (props) => {
  const iconScale = 0.8;
  return (
    <div
      className="my-hamburger"
      onClick={props.onClick}
      style={{
        height: props.size*iconScale + "px",
        width: props.size*iconScale + "px"}} >
          <Logo className="svg-icon" style={{
          height: props.size*iconScale + "px",
          width: props.size*iconScale + "px"}} />
    </div>
  );
}

export default Hamburger;