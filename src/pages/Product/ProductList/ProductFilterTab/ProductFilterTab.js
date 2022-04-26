import React from 'react';
import Filterview from './FilterView/Filterview';
import FilterSort from './FilterSort/FilterSort';
import '../ProductFilterTab/ProductFilterTab.scss';

function ProductFilterTab() {
  return (
    <div className="ProductFilterTab">
      <div className="filterTab">
        <FilterSort />
        <Filterview />
      </div>
    </div>
  );
}

export default ProductFilterTab;
