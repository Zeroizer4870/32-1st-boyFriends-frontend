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
            <Link to="#">마이페이지</Link>
            <Link to="#">장바구니</Link>
            <Link to="#">user</Link>
          </div>
        </div>
      </div>
      <div className="logoWrapper">
        <div id="logo">
          <div className="logoLeft">
            <button className="logoLike">좋아요 238,287</button>
          </div>
          <Link to="#" className="logoCenter">
            BOY FRIENDS
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
              <Link to="#">토이</Link>
              <ul className="subMenu">
                <li>
                  <Link to="#">중대형 인형</Link>
                </li>
                <li>
                  <Link to="#">미니 인형</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">옷</Link>
              <ul className="subMenu">
                <li>
                  <Link to="#">반팔 의류</Link>
                </li>
                <li>
                  <Link to="#">긴팔 의류</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">디지털</Link>
              <ul className="subMenu">
                <li>
                  <Link to="#">폰 케이스</Link>
                </li>
                <li>
                  <Link to="#">소형 가전</Link>
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
