import React from 'react';
import Filterview from './FilterView/Filterview';
import FilterSort from './FilterSort/FilterSort';
import '../ProductFilterTab/ProductFilterTab.scss';

function ProductFilterTab({ sortProducts, sortReview, sortReputation }) {
  return (
    <div className="ProductFilterTab">
      <div className="filterTab">
        <FilterSort
          sortProducts={sortProducts}
          sortReview={sortReview}
          sortReputation={sortReputation}
        />
        <Filterview />
      </div>
    </div>
  );
}

export default ProductFilterTab;
