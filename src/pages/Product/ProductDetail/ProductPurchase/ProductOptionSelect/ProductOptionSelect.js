import React from 'react';
import '../ProductOptionSelect/ProductOptionSelect.scss';
import ResultPrice from './ResultPrice/ResultPrice';
import SelectedProduct from './SelectedProduct/SelectedProduct';

function ProductOptionSelect({
  productData,
  salePrice,
  optionChange,
  viewItem,
  setItemPrice,
  setResultCount,
  itemPrice,
  resultCount,
}) {
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
              productData={productData}
            />
          ))}
        </div>
        <ResultPrice itemPrice={itemPrice} resultCount={resultCount} />
      </div>
    </div>
  );
}

export default ProductOptionSelect;
