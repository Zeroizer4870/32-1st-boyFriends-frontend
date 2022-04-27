import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './Nav.scss';

function Nav() {
  const menuList = [
    {
      id: 1,
      menuName: '토이',
      menuLink: '/toys',
      subMenu1: '중대형 토이',
      subMenu1Link: '/toys/bigtoys',
      subMenu2: '미니 토이',
      subMenu2Link: '/toys/smalltoys',
    },
    {
      id: 2,
      menuName: '옷',
      menuLink: '/cloths',
      subMenu1: '반팔 의류',
      subMenu1Link: '/cloths/shortsleeves',
      subMenu2: '긴팔 의류',
      subMenu2Link: '/cloths/longsleeves',
    },
    {
      id: 3,
      menuName: '디지털',
      menuLink: '/digital',
      subMenu1: '폰 케이스',
      subMenu1Link: '/digital/phonecases',
      subMenu2: '소형 가전',
      subMenu2Link: '/digital/electronics',
    },
  ];
  return (
    <nav className="nav">
      <div className="infoWrapper">
        <div className="info">
          <div className="infoLogo">
            <Link to="/">BoyFriends</Link>
          </div>
          <div className="infoIcons">
            <Link to="/user/signin">로그인</Link>
            <Link to="/user/signup">회원가입</Link>
            <Link to="/cart">장바구니</Link>
          </div>
        </div>
      </div>
      <div className="logoWrapper">
        <div className="logo">
          <div className="logoLike">
            <button className="logoLikeBtn">좋아요 238,287</button>
          </div>
          <Link to="/">
            <img alt="logo" className="logoImg" src="/images/logo.png" />
          </Link>

          <div className="logoSearch">
            <input
              type="text"
              className="logoSearchInput"
              placeholder="검색어를 입력해보세요"
            />
            <button className="logoSearchInputIcon">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </div>
      </div>
      <div className="menuWrapper">
        <div className="menu">
          <ul className="mainMenu">
            {menuList.map(menu => {
              return <Menu menu={menu} key={menu.id} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
