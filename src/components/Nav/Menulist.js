import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menulist.scss';

function Menulist({ menu }) {
  const { menuName, menuLink, sub } = menu;
  const navigate = useNavigate();
  return (
    <li className="menuList">
      <Link to={`/products?main_category_id=${menuLink}`}>{menuName}</Link>
      <ul className="subMenu">
        <li className="subMenuList">
          <Link to={`/products?category_id=${sub[0].subMenuLink}`}>
            {sub[0].subMenu}
          </Link>
        </li>
        <li className="subMenuList">
          <Link to={`/products?category_id=${sub[1].subMenuLink}`}>
            {sub[1].subMenu}
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default Menulist;
