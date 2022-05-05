import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Menulist from './Menulist';
import './Nav.scss';

function Nav() {
  const navigate = useNavigate();
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    fetch('http://10.58.5.56:1234/navigation')
      .then(res => res.json())
      .then(data => {
        setMenuList(data.results);
      });
  }, []);

  const searchRef = useRef(null);

  const logout = () => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      localStorage.clear();
      navigate('/');
    } else {
      navigate('/users/signin');
    }
  };

  const searchProduct = () => {
    navigate(`/products?search=${searchRef.current.value}&limit=15`);
  };

  return (
    <>
      <nav className="nav">
        <div className="infoWrapper">
          <div className="info">
            <div className="infoLogo">
              <Link to="/">
                {localStorage.getItem('name')
                  ? `${localStorage.getItem('name')}님 환영합니다`
                  : 'BoyFreinds'}
              </Link>
            </div>
            <div className="infoIcons">
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
                ref={searchRef}
                type="text"
                className="logoSearchInput"
                placeholder="검색어를 입력해보세요"
              />
              <button className="logoSearchInputIcon">
                <i
                  onClick={searchProduct}
                  className="fa-solid fa-magnifying-glass"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="menuWrapper">
          <div className="menu">
            <ul className="mainMenu">
              <li className="menuListStrong">
                <Link to="/products?&offset=0&limit=5">전체상품</Link>
              </li>
              {menuList.map(menu => {
                return <Menulist menu={menu} key={menu.menuLink} />;
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
