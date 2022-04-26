import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <main>
      <header>header</header> {/* 배너 캐러셀 */}
      <section className="캐러셀">
        <h4>주목할만한 소식</h4>
        <button className="이전">이전</button>
        <캐러셀 />
        <캐러셀 />
        <캐러셀 />
        <캐러셀 />
        <캐러셀 />
        <캐러셀 />
        <button className="다음">다음</button>
      </section>
      <section className="전체상품">section</section>
    </main>
  );
};

const 캐러셀 = () => {
  return (
    <article className="캐러셀 컴포넌트">
      <div className="상품1">
        <img alt="img" />
        <span>4.25~라인프렌즈 신상위크</span>
        <div>
          <img alt="productIMg" />
          <p>라인프렌즈 미니니</p>
          <span>10%</span>
          <span>7200원</span>
        </div>
      </div>
    </article>
  );
};
export default Main;
