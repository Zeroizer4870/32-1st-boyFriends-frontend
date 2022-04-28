import React from 'react';
import * as Common from './Common';

const DirectionBtn = ({ index, setIndex, carousel }) => {
  return (
    <>
      <button
        onClick={() => {
          Common.goToPrev(index, setIndex, carousel);
        }}
        className="prevBtn"
      >
        <i className="fa-solid fa-arrow-left" />
      </button>
      <button
        onClick={() => {
          Common.goToNext(index, setIndex, carousel);
        }}
        className="nextBtn"
      >
        <i className="fa-solid fa-arrow-right" />
      </button>
    </>
  );
};

export default DirectionBtn;
