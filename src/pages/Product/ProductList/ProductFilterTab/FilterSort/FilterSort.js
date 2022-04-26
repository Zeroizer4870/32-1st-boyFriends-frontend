import React from 'react';
import '../FilterSort/FilterSort.scss';

function FilterSort() {
  return (
    <ul>
      <li>
        <button>낮은 가격순</button>
      </li>
      <li>
        <button>최신 등록순</button>
      </li>
      <li>
        <button>리뷰 많은순</button>
      </li>
    </ul>
  );
}

export default FilterSort;
