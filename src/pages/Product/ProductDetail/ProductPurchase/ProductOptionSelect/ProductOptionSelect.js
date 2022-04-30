import React, { useState } from 'react';
import '../ProductOptionSelect/ProductOptionSelect.scss';
import ResultPrice from './ResultPrice/ResultPrice';

function ProductOptionSelect({ productData, salePrice }) {
  const [viewItem, setViewItem] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  const change = e => {
    setViewItem({ optionTitle: e.target.value });
  };

  /*
    onchange 
    사이즈가 선택되면 해당 e.target.value를 통해 들어온다.
    들어온 이벤트를 객체로 만들어서 특정 배열에 저장한다.
    배열을 mapping해서 뿌려준다.
    그러면, 선택된 옵션 만큼 뿌려지지 않을가?
     다만 / 한번 선택되서 만들어진 박스는 중복되서 나올 수 없다.
  */

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
            {productData.productOtpion
              .filter(option => option.category === productData.category)
              .map(option => (
                <option key={option.id}>
                  {option.size} ({option.stock}개)
                </option>
              ))}
          </select>
        </div>

        <div className="currentSelect">
          {viewItem.length !== 0 && (
            <ul className="selectedProduct">
              <li className="selectedStatus">
                <p className="optionTitle">{viewItem.optionTitle}</p>
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
