import React, { useState, useRef, useEffect } from 'react';
import './Main.scss';
const Main = () => {
  const TOTAL_SLIDES = 5;

  const [cur, setCur] = useState(0);

  const slideRef = useRef(null);

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
    slideRef.current.style.transform = `translateX(-${cur}00%)`;
  }, [cur]);

  return (
    <main>
      <header>header</header> {/* 배너 캐러셀 */}
      <section className="캐러셀">
        <h4>주목할만한 소식</h4>
        <button onClick={Prev} className="이전">
          이전
        </button>
        <center ref={slideRef} className="center">
          <캐러셀
            title="4.25~라인프렌즈 신상위크"
            zz="라인프렌즈 미니니"
            percent="10%"
            price={7200}
          />
          <캐러셀 title="test2" zz="test2" percent="test2" price={2} />
          <캐러셀 title="test3" zz="test3" percent="test3" price={3} />
          <캐러셀 title="test4" zz="test4" percent="test4" price={4} />
          <캐러셀 title="test5" zz="test5" percent="test5" price={5} />
          <캐러셀 title="test6" zz="test6" percent="test6" price={6} />
        </center>
        <button onClick={Next} className="다음">
          다음
        </button>
      </section>
      <section className="전체상품">section</section>
    </main>
  );
};

const 캐러셀 = ({ title, price, percent, zz }) => {
  return (
    <article className="carCOm">
      <product className="상품1">
        <img alt="img" />
        <span>{title}</span>
        <div>
          <img alt="productIMg" />
          <p>{zz}</p>
          <span>{percent}</span>
          <span>{price}</span>
        </div>
      </product>
    </article>
  );
};
export default Main;
