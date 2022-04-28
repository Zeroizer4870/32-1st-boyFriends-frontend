import React, { useState } from 'react';

import '../ProductOptionSelect/ProductOptionSelect.scss';
import ResultPrice from './ResultPrice/ResultPrice';

function ProductOptionSelect() {
  const [view, setView] = useState('사이즈');

  const change = ({ target }) => {
    setView(target.value);
  };

  return (
    <div className="productOptionSelect">
      <div className="selectOption">
        <div>
          <select className="selectFeature" onChange={change}>
            <option>사이즈</option>
            <option>단품</option>
          </select>
        </div>
        {/* 사이즈 선택 */}
        <div className="currentSelect">
          {view !== '사이즈' && (
            <ul className="selectedProduct">
              <li className="selectedStatus">
                <p className="optionTitle">단품(옵션 이름)</p>
                <div className="selectedWrapper">
                  <div className="productCount">
                    <button className="countBtn"> - </button>
                    <input className="countValue" type="number" />
                    <button className="countBtn"> + </button>
                  </div>
                  <span className="selectedPrice">
                    19,000
                    <span>원</span>
                  </span>
                </div>
              </li>
            </ul>
          )}
        </div>
        {/* 총 가격 */}
        <ResultPrice />
      </div>
    </div>
  );
}

export default ProductOptionSelect;
