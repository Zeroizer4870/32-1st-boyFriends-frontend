import React, { useEffect, useRef, useState } from 'react';
import CircleBtn from '../common/CircleBtn';
import ImageCard from '../common/ImageCard';
import './Header.scss';
import DirectionBtn from '../common/DirectionBtn';

const Header = ({ headerData }) => {
  const [index, setIndex] = useState(0);
  const [carousel, setCarousel] = useState(4);
  // console.log(headerData[headerData.length - 1].id); // carousel 하드코딩 풀어야함
  // 자동 캐러셀

  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.style.transition = 'all 0.5s ease-in-out';
    cardRef.current.style.transform = `translateX(-${index}00vw)`;
  }, [index]);

  return (
    <>
      <header className="header">
        <div ref={cardRef} className="card">
          {headerData.map(headerData => {
            return <ImageCard src={headerData.src} key={headerData.id} />;
          })}
        </div>
      </header>
      <div className="headerZ">
        <p className="cardTitle">{headerData[index]?.title}</p>
        <p className="cardContent">{headerData[index]?.content}</p>
        <DirectionBtn index={index} setIndex={setIndex} carousel={carousel} />
        <div className="cardBtnList">
          {headerData.map(headerData => {
            return (
              <CircleBtn
                id={headerData.id}
                setIndex={setIndex}
                key={headerData.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
