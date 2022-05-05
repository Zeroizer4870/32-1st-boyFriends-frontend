import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCard from '../common/ImageCard';
import CircleBtn from '../common/CircleBtn';
import DirectionBtn from '../common/DirectionBtn';
import './Header.scss';

const Header = ({ mainData }) => {
  const carousel = mainData.length - 1;
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };

  useEffect(() => {
    cardRef.current.style.transition = 'all 0.5s ease-in-out';
    cardRef.current.style.transform = `translateX(-${index}00vw)`;
  }, [index]);

  return (
    <>
      <header className="header">
        <div ref={cardRef} className="card">
          {mainData.map(category => {
            return <ImageCard src={category.categoryImg} />;
          })}
        </div>
      </header>

      <div className="headerCopy">
        <div onClick={goToProducts} className="headerHidden" />
        <DirectionBtn index={index} setIndex={setIndex} carousel={carousel} />
        <div className="circleBtnList">
          {mainData.map(category => {
            return <CircleBtn id={category.categoryId} setIndex={setIndex} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
