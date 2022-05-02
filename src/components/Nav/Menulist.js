import React from 'react';
import { Link } from 'react-router-dom';
import './Menulist.scss';

function Menulist({ menu }) {
  const { menuName, menuLink, subMenu1, subMenu1Link, subMenu2, subMenu2Link } =
    menu;
  return (
    <li className="menuList">
      <Link to={`"/products?main_category_id=${menuLink}"`}>{menuName}</Link>
      <ul className="subMenu">
        <li className="subMenuList">
          <Link to={`"/products?category_id=${subMenu1Link}"`}>{subMenu1}</Link>
        </li>
        <li className="subMenuList">
          <Link to={`"/products?category_id=${subMenu2Link}"`}>{subMenu2}</Link>
        </li>
      </ul>
    </li>
  );
}

export default Menulist;
