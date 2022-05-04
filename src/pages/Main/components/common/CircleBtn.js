import React from 'react';
import * as Common from './Common';

const CircleBtn = ({ setIndex, id }) => {
  const findCard = e => {
    Common.findCard(e, setIndex);
  };

  return (
    <button id={id} className="circleBtn" onClick={e => {}}>
      <i onClick={findCard} id={id} className="fa-solid fa-circle" />
    </button>
  );
};

export default CircleBtn;
