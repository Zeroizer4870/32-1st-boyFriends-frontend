import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Menulist from './Menulist';
import './Nav.scss';

function Nav() {
  const navigate = useNavigate();
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    fetch('http://10.58.1.227:8000/core/nav')
      .then(res => res.json())
      .then(data => {
        setMenuList(data.results);
      });
  }, []);

  const logout = () => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      localStorage.clear();
      navigate('/');
    } else {
      navigate('/users/signin');
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="infoWrapper">
          <div className="info">
            <div className="infoLogo">
              <Link to="/">BoyFriends</Link>
            </div>
            <div className="infoIcons">
              <Link to="/">
                {localStorage.getItem('name') &&
                  `${localStorage.getItem('name')}님 환영합니다`}
              </Link>
              <button onClick={logout}>
                {localStorage.getItem('token') ? '로그아웃' : '로그인'}
              </button>
              <Link to="/users/signup">
                {!localStorage.getItem('token') && '회원가입'}
              </Link>
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
                return <Menulist menu={menu} key={menu.id} />;
              })}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
