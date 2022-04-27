import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav id="nav">
      <div className="upperWrapper">
        <div id="upper">
          <div className="upperLeft">
            <Link to="#">BOYVER</Link>
            <Link to="#">보이쇼핑</Link>
          </div>
          <div className="upperRight">
            <Link to="./user/signin">로그인</Link>
            <Link to="./user/signup">회원가입</Link>
            <Link to="./cart">장바구니</Link>
          </div>
        </div>
      </div>
      <div className="logoWrapper">
        <div id="logo">
          <div className="logoLeft">
            <button className="logoLike">좋아요 238,287</button>
          </div>
          <Link to="/">
            <img alt="logo" className="logoCenter" src="/images/logo.png" />
          </Link>

          <div className="logoRight">
            <input
              type="text"
              className="logoRightInput"
              placeholder="검색어를 입력해보세요"
            />
            <button className="logoRightInputSearch">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </div>
      </div>
      <div className="menuWrapper">
        <div id="menu">
          <ul className="mainMenu">
            <li>
              <Link to="./toy">토이</Link>
              <ul className="subMenu">
                <li>
                  <Link to="./toy/bigtoy">중대형 인형</Link>
                </li>
                <li>
                  <Link to="./toy/smalltoy">미니 인형</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="./cloth">옷</Link>
              <ul className="subMenu">
                <li>
                  <Link to="./cloth/shortsleeve">반팔 의류</Link>
                </li>
                <li>
                  <Link to="./cloth/longsleeve">긴팔 의류</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="./digital">디지털</Link>
              <ul className="subMenu">
                <li>
                  <Link to="./digital/phonecase">폰 케이스</Link>
                </li>
                <li>
                  <Link to="./digital/electronic">소형 가전</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
