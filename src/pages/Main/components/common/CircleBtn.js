import React from 'react';
import * as Common from './Common';

const CircleBtn = ({ setIndex, id }) => {
  return (
    <button
      id={id}
      className="cardBtn"
      onClick={e => {
        Common.findImage(e, setIndex);
      }}
    >
      <i onClick={Common.findImage} id={id} className="fa-regular fa-circle" />
    </button>
  );
};

export default CircleBtn;
