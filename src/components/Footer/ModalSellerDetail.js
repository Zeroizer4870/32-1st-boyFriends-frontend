import React from 'react';
import './ModalSellerDetail.scss';

const ModalSellerDetail = ({ setCloseBtn }) => {
  return (
    <div className="modalSellerDetail">
      <button onClick={() => setCloseBtn(false)}>X</button>

      <div className="container">
        <strong className="title">판매자정보</strong>
        <div className="content">
          <div className="contentKey">
            <p>상호명</p>
            <p>대표자</p>
            <p>사업자등록번호</p>
            <p>통신판매업번호</p>
            <p>사업장 소재지</p>
            <p>고객센터</p>
            <p>e-mail</p>
          </div>

          <div className="contentValue">
            <p>보이프렌즈 주식회사(사업자/법인사업자)</p>
            <p>황석영</p>
            <p>18413074421</p>
            <p>1994-경기수원-0321</p>
            <p>경기도 수원특례시 팔달구 향교로 1번길 8</p>
            <span>6336-7941</span>
            <p className="inlineText">인증</p>
            <p>rkekqmf@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSellerDetail;
