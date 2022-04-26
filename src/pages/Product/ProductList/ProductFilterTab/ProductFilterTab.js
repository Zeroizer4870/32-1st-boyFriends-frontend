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
          <div className="selectOption">
            <select>
              <option>20개씩 보기</option>
              <option selected>40개씩 보기</option>
              <option>60개씩 보기</option>
              <option>80개씩 보기</option>
            </select>
          </div>
          <div className="changeView">
            <button type="button">
              <i className="fa-solid fa-table-list" />
            </button>
            <button type="button">
              <i className="fa-solid fa-border-all" />
            </button>
            <button type="button">
              <i className="fa-solid fa-table-columns" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilterTab;
