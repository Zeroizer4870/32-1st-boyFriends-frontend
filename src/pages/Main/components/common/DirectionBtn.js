import React from 'react';
import * as Common from './Common';

const DirectionBtn = ({ index, setIndex, carousel }) => {
  const goToPrev = () => {
    Common.goToPrev(index, setIndex, carousel);
  };

  const goToNext = () => {
    Common.goToNext(index, setIndex, carousel);
  };

  return (
    <>
      <button onClick={goToPrev} className="prevBtn">
        <i className="fa-solid fa-arrow-left" />
      </button>
      <button onClick={goToNext} className="nextBtn">
        <i className="fa-solid fa-arrow-right" />
      </button>
    </>
  );
};

export default DirectionBtn;
