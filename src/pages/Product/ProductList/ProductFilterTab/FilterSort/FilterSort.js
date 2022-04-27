import React from 'react';
import '../FilterSort/FilterSort.scss';

function FilterSort({ sortProducts, sortReview, sortReputation }) {
  return (
    <ul>
      <form>
        <li>
          <button type="button" onClick={() => sortProducts()}>
            낮은 가격순
          </button>
        </li>
        <li>
          <button type="button" onClick={() => sortReputation()}>
            인기순
          </button>
        </li>
        <li>
          <button type="button" onClick={() => sortReview()}>
            리뷰 많은순
          </button>
        </li>
      </form>
    </ul>
  );
}

export default FilterSort;
