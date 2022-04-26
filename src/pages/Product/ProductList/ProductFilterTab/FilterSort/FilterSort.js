import React from 'react';
import '../FilterSort/FilterSort.scss';

function FilterSort({ sortProducts }) {
  return (
    <ul>
      <form onClick={sortProducts}>
        <li>
          <button type="button">낮은 가격순</button>
        </li>
        <li>
          <button type="button">최신 등록순</button>
        </li>
        <li>
          <button type="button">리뷰 많은순</button>
        </li>
      </form>
    </ul>
  );
}

export default FilterSort;
