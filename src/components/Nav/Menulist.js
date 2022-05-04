import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menulist.scss';

function Menulist({ menu }) {
  const { menuName, menuLink, sub } = menu;

  const navigate = useNavigate();

  const goToMainCategory = () => {
    navigate(`/products?main_category_id=${menuLink}`);
  };

  const goToSubCategoryFirst = () => {
    navigate(`/products?category_id=${sub[0].subMenuLink}`);
  };

  const goToSubCategorySecond = () => {
    navigate(`/products?category_id=${sub[1].subMenuLink}`);
  };

  return (
    <li className="menuList">
      <span onClick={goToMainCategory}>{menuName}</span>
      <ul className="subMenu">
        <li onClick={goToSubCategoryFirst} className="subMenuList">
          <span to={`/products?category_id=${sub[0].subMenuLink}`}>
            {sub[0].subMenu}
          </span>
        </li>
        <li onClick={goToSubCategorySecond} className="subMenuList">
          <span to={`/products?category_id=${sub[1].subMenuLink}`}>
            {sub[1].subMenu}
          </span>
        </li>
      </ul>
    </li>
  );
}

export default Menulist;
