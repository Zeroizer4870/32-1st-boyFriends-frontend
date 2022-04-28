import React from 'react';

const DirectionBtn = ({ prev, next }) => {
  return (
    <>
      <button onClick={prev} className="prevBtn">
        <i class="fa-solid fa-arrow-left" />
      </button>
      <button onClick={next} className="nextBtn">
        <i class="fa-solid fa-arrow-right" />
      </button>
    </>
  );
};

export default DirectionBtn;
