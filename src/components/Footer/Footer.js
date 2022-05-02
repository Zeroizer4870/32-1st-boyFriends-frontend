import React, { useState } from 'react';
import ModalSellerDetail from './ModalSellerDetail';
import './Footer.scss';

function Footer() {
  const [closeBtn, setCloseBtn] = useState(false);

  return (
    <footer className="footer">
      <div className="top">
        <button className="warningIcon">
          <i className="fa-solid fa-circle-exclamation" />
        </button>
        <span className="warningComment">
          반품 배송비, 반품 배송주소 등은 해당 상품 페이지 내 안내를
          참고해주세요.
        </span>
        <span className="seller">보이프렌즈 주식회사 6336-7941</span>
        <span className="sellerCheck">인증</span>
        <button className="sellerReport">
          <i className="fa-solid fa-bell" />
          &nbsp; 잘못된 번호 신고
        </button>
        <button onClick={() => setCloseBtn(!closeBtn)} className="sellerDetail">
          판매자 정보 ▾
        </button>
        <button className="sellerInstagram">
          <i className="fa-brands fa-instagram-square" />
        </button>
        {closeBtn ? <ModalSellerDetail setCloseBtn={setCloseBtn} /> : null}
      </div>
      <div className="mid">
        <div className="termsOfService">
          <ul>
            <li>
              <span>BOYFRIENDS 약관</span>
            </li>
            <li>
              <span>BOYFRIENDSPAY 이용약관</span>
            </li>
            <li>
              <span>전자금융거래 이용약관</span>
            </li>
            <li>
              <strong>개인정보처리방침</strong>
            </li>
            <li>
              <span>책임의 한계와 법적고지</span>
            </li>
            <li>
              <span>청소년보호정책</span>
            </li>
            <li>
              <span>지식재산권신고센터</span>
            </li>
            <li>
              <span>안전거래 가이드</span>
            </li>
            <li className="endList">
              <span>쇼핑&페이 고객센터</span>
            </li>
          </ul>
        </div>
        <div className="information">
          <div className="informationCompany">
            <strong className="informationTitle">BOYFRIENDS ㈜</strong>
            <div>
              사업자등록번호 184-13-074421 <span /> 통신판매업신고번호
              1994-경기수원-0321호
              <br />
              대표이사 황석영 <span /> 경기도 수원시 팔달구 향교로 1 보이프렌즈
              팩토리 13561
              <br />
              전화 1994-0321 <span /> 이메일 rkekqmf@gmail.com <span />
              사업자등록정보 확인
              <br />
              호스팅 서비스 제공 : BoyFriends
            </div>
          </div>

          <div className="informationCall">
            <strong className="informationTitle">고객센터</strong>
            <div>
              경상도 대구시 남구 희망로 57
              <br />
              전화 1994-0321 <button>전화전클릭</button>
              <br />
              결제도용신고 6336-7941
              <br />
              <strong className="informationCustomer">1:1문의 바로가기</strong>
            </div>
          </div>

          <div className="informationLaw">
            <strong className="informationTitle">전자금융거래 분쟁처리</strong>
            <div>
              전화 1994-0321
              <br />
              <strong className="informationCustomer">1:1문의 바로가기</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="bot">
        <div className="detail">
          <span className="detail">
            네이버㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품,
            상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다.
          </span>
          <p>자세히보기 &gt;</p>
        </div>
        <div className="company">
          <button className="companyLogo">BOYFRIENDS</button>
          <span>Copyright ⓒ</span>
          <span className="companyName">BOYFRIENDS Corp.</span>
          <span>All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
