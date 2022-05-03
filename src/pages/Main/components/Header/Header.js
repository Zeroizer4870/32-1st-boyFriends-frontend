import React, { useEffect, useRef, useState } from 'react';
import CircleBtn from '../common/CircleBtn';
import ImageCard from '../common/ImageCard';
import DirectionBtn from '../common/DirectionBtn';
import './Header.scss';

const Header = ({ mainData }) => {
  const carousel = 4;
  const [index, setIndex] = useState(0);
  // console.log(headerData[headerData.length - 1].id); // carousel 하드코딩 풀어야함
  // 자동 캐러셀
  const cardTitle = ['새콤달콤', 'ㅋㅋ', 'ㅋㅋ', 'ㅋㅋ', 'ㅋㅋ', 'ㅋㅋ'];
  const cardContent = ['달콤새콤', 'gg', 'gg', 'gg', 'gg', 'gg'];
  const cardRef = useRef(null);

  useEffect(() => {
    cardRef.current.style.transition = 'all 0.5s ease-in-out';
    cardRef.current.style.transform = `translateX(-${index}00vw)`;
  }, [index]);

  return (
    <>
      <header className="header">
        <div ref={cardRef} className="card">
          {mainData.map(category => {
            return (
              <ImageCard
                src={category.categoryImg}
                key={category.categoryImg}
              />
            );
          })}
        </div>
      </header>

      <div className="headerCopy">
        <strong className="cardTitle">{cardTitle[index]}</strong>
        <p className="cardContent">{cardContent[index]}</p>
        <DirectionBtn index={index} setIndex={setIndex} carousel={carousel} />
        <div className="circleBtnList">
          {mainData.map(category => {
            return (
              <CircleBtn
                id={category.categoryId}
                setIndex={setIndex}
                key={category.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
