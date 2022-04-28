import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';

const Header = ({ headerData }) => {
  const [carousel, setCarousel] = useState(4);
  setCarousel();
  // console.log(headerData[headerData.length - 1].id); // carousel 하드코딩 풀어야함
  const [index, setIndex] = useState(0);

  const cardRef = useRef(null);

  const next = () => {
    index >= carousel ? setIndex(0) : setIndex(index + 1);
  };
  const prev = () => {
    index === 0 ? setIndex(carousel) : setIndex(index - 1);
  };

  const findImg = e => {
    setIndex(e.target.id);
  };

  useEffect(() => {
    cardRef.current.style.transition = 'all 0.5s ease-in-out';
    cardRef.current.style.transform = `translateX(-${index}00vw)`;
  }, [index]);

  return (
    <>
      <header className="header">
        <div ref={cardRef} className="card">
          {headerData.map(headerData => {
            return <HeaderCard src={headerData.src} key={headerData.id} />;
          })}
        </div>
      </header>
      <div className="headerZ">
        <p className="cardTitle">{headerData[index]?.title}</p>
        <p className="cardContent">{headerData[index]?.content}</p>
        <button onClick={prev} type="radio" className="prevBtn">
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button onClick={next} className="nextBtn">
          <i className="fa-solid fa-arrow-right" />
        </button>
        <div className="cardBtnList">
          {headerData.map(headerData => {
            return (
              <HeaderBtn
                findImg={findImg}
                id={headerData.id}
                key={headerData.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const HeaderCard = ({ src }) => {
  return <img alt="cardImg" className="cardImg" src={src} />;
};

const HeaderBtn = ({ findImg, id }) => {
  return (
    <button onClick={findImg} id={id} className="cardBtn">
      <i onClick={findImg} id={id} className="fa-regular fa-circle" />
    </button>
  );
};

export default Header;
