import React from 'react';
import { Link } from 'react-router-dom';
import './Menulist.scss';

function Menulist({ menu }) {
  const { menuName, menuLink, sub } = menu;

  return (
    <li className="menuList">
      <Link to={`/products?main_category_id=${menuLink}&offset=0&limit=5`}>
        {menuName}
      </Link>
      <ul className="subMenu">
        <li className="subMenuList">
          <Link
            to={`/products?category_id=${sub[0].subMenuLink}&offset=0&limit=5`}
          >
            {sub[0].subMenu}
          </Link>
        </li>
        <li className="subMenuList">
          <Link
            to={`/products?category_id=${sub[1].subMenuLink}&offset=0&limit=5`}
          >
            {sub[1].subMenu}
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default Menulist;
