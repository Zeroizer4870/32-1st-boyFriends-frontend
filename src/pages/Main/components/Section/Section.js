import React, { useEffect, useRef, useState } from 'react';
import SectionCard from './SectionCard';
import DirectionBtn from '../common/DirectionBtn';
import CircleBtn from '../common/CircleBtn';
import './Section.scss';
import { useNavigate } from 'react-router-dom';

const Section = ({ sectionData, mainData }) => {
  const carousel = 1;
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const gridRowSet =
    sectionData.id === 1
      ? { gridRow: '2/3' }
      : sectionData.id === 2
      ? { gridRow: '3/4' }
      : sectionData.id === 3
      ? { gridRow: '4/5' }
      : sectionData.id === 4
      ? { gridRow: '5/6' }
      : null;

  useEffect(() => {
    cardRef.current.style.transition = 'all 0.5s ease-in-out';
    cardRef.current.style.transform = `translateX(-${index * 1280}px)`;
  }, [index]);

  const navigate = useNavigate();
  const goToProducts = () => {
    navigate(`/products/${sectionData.id}`);
  };

  return (
    <>
      <section style={gridRowSet} className="section">
        <div className="sectionTitle">
          <strong>{sectionData.title}</strong>
        </div>
        <div
          ref={cardRef}
          className={sectionData.id === 4 ? 'cardListGrid' : 'cardListFlex'}
        >
          {sectionData.id === 1
            ? mainData.map(category => {
                return (
                  <SectionCard category={category} sectionData={sectionData} />
                );
              })
            : mainData.map(category => {
                return category.product.map(product => {
                  return sectionData.id === 2 &&
                    product.productStatus === 'New' ? (
                    <SectionCard product={product} />
                  ) : sectionData.id === 3 &&
                    product.productStatus === 'Best' ? (
                    <SectionCard product={product} />
                  ) : sectionData.id === 4 ? (
                    <SectionCard product={product} />
                  ) : null;
                });
              })}
        </div>
      </section>

      <div style={gridRowSet} className="sectionCopy">
        {sectionData.id === 4 || (
          <DirectionBtn index={index} setIndex={setIndex} carousel={carousel} />
        )}
        <div className="circleBtnList">
          {sectionData.id === 1
            ? mainData.map(category => {
                return (
                  <CircleBtn id={category.categoryId} setIndex={setIndex} />
                );
              })
            : mainData.map(category => {
                return category.product.map(product => {
                  return sectionData.id === 2 &&
                    product.productStatus === 'new' ? (
                    <CircleBtn id={product.productId} setIndex={setIndex} />
                  ) : sectionData.id === 3 &&
                    product.productStatus === 'best' ? (
                    <CircleBtn id={product.productId} setIndex={setIndex} />
                  ) : null;
                });
              })}
        </div>
      </div>
    </>
  );
};

export default Section;
