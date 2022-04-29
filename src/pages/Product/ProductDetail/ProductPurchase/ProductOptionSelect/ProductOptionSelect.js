import React, { useState } from 'react';

import '../ProductOptionSelect/ProductOptionSelect.scss';
import ResultPrice from './ResultPrice/ResultPrice';

function ProductOptionSelect({ productData, salePrice }) {
  console.log(productData);
  const [viewItem, setViewItem] = useState('사이즈');
  const [itemCount, setItemCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const change = ({ target }) => {
    setViewItem(target.value);
  };

  const onIncrease = () => {
    setItemCount(prev => prev + 1);
    setItemPrice(prev => prev + salePrice);
  };

  const onDecrease = () => {
    if (itemCount <= 1) {
      alert('1개 이하는 선택할 수 없습니다.');
      return;
    }
    setItemCount(prev => prev - 1);
    setItemPrice(prev => prev - salePrice);
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
          {viewItem !== '사이즈' && (
            <ul className="selectedProduct">
              <li className="selectedStatus">
                <p className="optionTitle">단품(옵션 이름)</p>
                <div className="selectedWrapper">
                  <div className="productCount">
                    <button className="countBtn" onClick={onDecrease}>
                      -
                    </button>
                    <span className="countValue">{itemCount}</span>
                    <button className="countBtn" onClick={onIncrease}>
                      +
                    </button>
                  </div>
                  <span className="selectedPrice">
                    {itemPrice.toLocaleString()}
                    <span> 원</span>
                  </span>
                </div>
              </li>
            </ul>
          )}
        </div>
        {/* 총 가격 */}
        <ResultPrice itemPrice={itemPrice} itemCount={itemCount} />
      </div>
    </div>
  );
}

export default ProductOptionSelect;
