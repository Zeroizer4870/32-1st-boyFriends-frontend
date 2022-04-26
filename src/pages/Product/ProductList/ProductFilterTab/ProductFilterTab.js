import React from 'react';
import '../ProductFilterTab/ProductFilterTab.scss';

function ProductFilterTab() {
  return (
    <div className="ProductFilterTab">
      <div className="filterTab">
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
        <div className="filterView">
          <div className="changeView">
            <input type="button" />
            <input type="button" />
            <input type="button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilterTab;
