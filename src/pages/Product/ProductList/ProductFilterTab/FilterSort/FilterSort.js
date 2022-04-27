import React from 'react';
import '../FilterSort/FilterSort.scss';

function FilterSort({ sortProductsPrice, sortReview, sortReputation }) {
  return (
    <ul className="filterSort">
      <form className="sortForm">
        <li className="sortBtn">
          <button type="button" onClick={sortProductsPrice}>
            낮은 가격순
          </button>
        </li>
        <li className="sortBtn">
          <button type="button" onClick={sortReputation}>
            인기순
          </button>
        </li>
        <li className="sortBtn">
          <button type="button" onClick={sortReview}>
            리뷰 많은순
          </button>
        </li>
      </form>
    </ul>
  );
}

export default FilterSort;
