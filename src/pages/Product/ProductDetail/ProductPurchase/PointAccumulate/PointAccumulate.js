import React from 'react';
import '../PointAccumulate/PointAccumulate.scss';

function PointAccumulate() {
  return (
    <div className="pointAccumulate">
      <div className="acceptCoupon">
        <span className="userTitle">OO님만을 위한 혜택</span>
        <button className="cuponBtn">쿠폰받기</button>
      </div>
      <div className="maxPointCalc">
        <div className="maxPointText">최대 적립 포인트</div>
        <div className="resultCalc">340원</div>
      </div>
      <div className="morePointBox">
        <div className="pointTips">
          <span className="tip">포인트 더 받는 방법</span>
          <span className="maxPoint">
            +최대
            <span className="point"> 1,710원</span>
          </span>
        </div>
        <ul className="pointLog">
          <li className="pointColumn">
            <span className="pointDescrpiton">최대 5% 적립, 무료 시작</span>
            <span className="subPoint">760 원</span>
          </li>
          <li className="pointColumn">
            <span className="pointDescrpiton">네이버 현대카드로 결제 시</span>
            <span className="subPoint">950 원</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PointAccumulate;
