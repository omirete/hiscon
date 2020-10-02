import React from 'react';
import './IconButton.css';

const IconButton = (props) => {
  return (
    <div
      className="icon-button"
      onClick={props.onClick}>
        <a
          href={props.url}
          className={props.circleEnclosed ? " circle-enclosed" : ""} style={{
            height: props.size + "px",
            width: props.size + "px"}}>
          {props.children}
        </a>
    </div>
  );
}

export default IconButton;