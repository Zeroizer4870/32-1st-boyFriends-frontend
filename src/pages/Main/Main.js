import React, { useState, useRef, useEffect } from 'react';
import './Main.scss';
const Main = () => {
  const TOTAL_SLIDES = 7;

  const [cur, setCur] = useState(0);

  const slideRef = useRef(null);
  const headerCardListRef = useRef(null);

  const Next = () => {
    if (cur >= TOTAL_SLIDES) {
      setCur(0);
    } else {
      setCur(cur + 1);
    }
  };

  const Prev = () => {
    if (cur === 0) {
      setCur(TOTAL_SLIDES);
    } else {
      setCur(cur - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${cur}00px)`;
    headerCardListRef.current.style.transition = 'all 0.5s ease-in-out';
    headerCardListRef.current.style.transform = `translateX(-${cur}00vw)`;
  }, [cur]);

  return (
    <main>
      <header>
        <div ref={headerCardListRef} className="headerCardWrap">
          <HeaderCard
            title="ggg"
            sub="gg"
            src="https://media.bunjang.co.kr/product/155777438_1_1622649836_w360.jpg"
          />
          <HeaderCard
            title="zzz"
            sub="zz"
            src="https://trees.gamemeca.com/wp-content/uploads/2019/05/190515_sb25_34.jpg"
          />
          <HeaderCard
            title="zzz"
            sub="zz"
            src="https://dnvefa72aowie.cloudfront.net/origin/article/202103/1b5ce48ba790efbe44a7e133eeca3a3d2359e344e6e099f0e3703ce51c55be73.webp?q=95&s=1440x1440&t=inside "
          />
        </div>
        <div className="btnWrap">
          <button onClick={Prev} className="prevBtn">
            이전버튼
          </button>
          <button onClick={Next} className="nextBtn">
            다음 버튼
          </button>
        </div>
        <ul>
          <HeaderBtn />
        </ul>
      </header>

      <section className="주목할만한소식">
        <div className="주title">
          <h1>주목할만한 소식</h1>
        </div>
        <div ref={slideRef} className="center">
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://media.bunjang.co.kr/product/155777438_1_1622649836_w360.jpg"
          />
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://media.bunjang.co.kr/product/155777438_1_1622649836_w360.jpg"
          />
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://media.bunjang.co.kr/product/155777438_1_1622649836_w360.jpg"
          />
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://media.bunjang.co.kr/product/155777438_1_1622649836_w360.jpg"
          />
          <MainCard
            title="test5"
            zz="test5"
            percent="test5"
            price={5}
            src="https://trees.gamemeca.com/wp-content/uploads/2019/05/190515_sb25_34.jpg"
          />
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://dnvefa72aowie.cloudfront.net/origin/article/202103/1b5ce48ba790efbe44a7e133eeca3a3d2359e344e6e099f0e3703ce51c55be73.webp?q=95&s=1440x1440&t=inside "
          />
        </div>
        <div>
          <button onClick={Prev} className="이전">
            이전
          </button>
          <button onClick={Next} className="다음">
            다음
          </button>
        </div>
      </section>

      <section className="선물하기좋은">
        <div className="선title">
          <h1>선물하기좋은</h1>
        </div>
        <div ref={slideRef} className="center">
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://media.bunjang.co.kr/product/155777438_1_1622649836_w360.jpg"
          />
          <MainCard
            title="test5"
            zz="test5"
            percent="test5"
            price={5}
            src="https://trees.gamemeca.com/wp-content/uploads/2019/05/190515_sb25_34.jpg"
          />
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://dnvefa72aowie.cloudfront.net/origin/article/202103/1b5ce48ba790efbe44a7e133eeca3a3d2359e344e6e099f0e3703ce51c55be73.webp?q=95&s=1440x1440&t=inside "
          />
        </div>
        <div>
          <button onClick={Prev} className="이전">
            이전
          </button>
          <button onClick={Next} className="다음">
            다음
          </button>
        </div>
      </section>

      <section className="특별함을담아">
        <div className="선title">
          <h1>특별함을담아</h1>
        </div>
        <div ref={slideRef} className="center">
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://media.bunjang.co.kr/product/155777438_1_1622649836_w360.jpg"
          />
          <MainCard
            title="test5"
            zz="test5"
            percent="test5"
            price={5}
            src="https://trees.gamemeca.com/wp-content/uploads/2019/05/190515_sb25_34.jpg"
          />
          <MainCard
            title="test6"
            zz="test6"
            percent="test6"
            price={6}
            src="https://dnvefa72aowie.cloudfront.net/origin/article/202103/1b5ce48ba790efbe44a7e133eeca3a3d2359e344e6e099f0e3703ce51c55be73.webp?q=95&s=1440x1440&t=inside "
          />
        </div>
        <div>
          <button onClick={Prev} className="이전">
            이전
          </button>
          <button onClick={Next} className="다음">
            다음
          </button>
        </div>
      </section>
    </main>
  );
};

const HeaderCard = ({ title, sub, src }) => {
  return (
    <div className="헤더div">
      <div>
        <img alt="test" className="imgTest" src={src} />
      </div>
      <div>
        <p className="testP">{title}</p>
        <p>{sub}</p>
      </div>
    </div>
  );
};

const HeaderBtn = () => {
  return (
    <li>
      <button className="radioBtn">test</button>
    </li>
  );
};

const MainCard = ({ title, price, percent, zz, src }) => {
  return (
    <article className="carCOm">
      <img alt="img" src={src} />
      <span>{title}</span>
      <div>
        <img alt="productIMg" />
        <p>{zz}</p>
        <span>{percent}</span>
        <span>{price}</span>
      </div>
    </article>
  );
};

export default Main;
