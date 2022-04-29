import React from 'react';
import * as Common from './Common';

const CircleBtn = ({ setIndex, id }) => {
  const findCard = e => {
    Common.findCard(e, setIndex);
  };

  return (
    <button id={id} className="cardBtn" onClick={e => {}}>
      <i onClick={findCard} id={id} className="fa-regular fa-circle" />
    </button>
  );
};

export default CircleBtn;
