import React from 'react';
import Filterview from './FilterView/Filterview';
import FilterSort from './FilterSort/FilterSort';
import '../ProductFilterTab/ProductFilterTab.scss';

function ProductFilterTab({
  sortProductsPrice,
  sortReview,
  sortReputation,
  isViewChange,
}) {
  return (
    <div className="productFilterTab">
      <div className="filterTab">
        <FilterSort
          sortProductsPrice={sortProductsPrice}
          sortReview={sortReview}
          sortReputation={sortReputation}
        />
        <Filterview isViewChange={isViewChange} />
      </div>
    </div>
  );
}

export default ProductFilterTab;
