import React from 'react';
import Filterview from './FilterView/Filterview';
import FilterSort from './FilterSort/FilterSort';
import '../ProductFilterTab/ProductFilterTab.scss';

function ProductFilterTab({ sortProducts }) {
  return (
    <div className="ProductFilterTab">
      <div className="filterTab">
        <FilterSort sortProducts={sortProducts} />
        <Filterview />
      </div>
    </div>
  );
}

export default ProductFilterTab;
