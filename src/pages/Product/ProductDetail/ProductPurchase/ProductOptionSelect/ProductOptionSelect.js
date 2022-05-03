import React, { useState } from 'react';
import '../ProductOptionSelect/ProductOptionSelect.scss';
import ResultPrice from './ResultPrice/ResultPrice';
import SelectedProduct from './SelectedProduct/SelectedProduct';

function ProductOptionSelect({
  productData,
  salePrice,
  optionChange,
  viewItem,
}) {
  const [itemPrice, setItemPrice] = useState(0);
  const [resultCount, setResultCount] = useState(0);

  return (
    <div className="productOptionSelect">
      <div className="selectOption">
        <div>
          <select className="selectFeature" onChange={optionChange}>
            <option>사이즈</option>
            {productData.productOptioin
              .filter(option => option.category === productData.category)
              .map(option => (
                <option disabled={!option.stock} key={option.id}>
                  {option.size} ({option.stock}개)
                </option>
              ))}
          </select>
        </div>
        <div className="currentSelect">
          {viewItem.map(item => (
            <SelectedProduct
              key={item.key}
              viewItem={item.optionName}
              salePrice={salePrice}
              setItemPrice={setItemPrice}
              setResultCount={setResultCount}
            />
          ))}
        </div>
        <ResultPrice itemPrice={itemPrice} resultCount={resultCount} />
      </div>
    </div>
  );
}

export default ProductOptionSelect;
