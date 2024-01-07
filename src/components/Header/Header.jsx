import React from "react";
import { FaHome } from "react-icons/fa";
import "../../styles/header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">
          <FaHome />
        </span>
        <p className="logo-name">RentVista</p>
      </div>
      <ul className="menu">
        <li>Про нас</li>
        <li>Оголошення</li>
      </ul>
      <button className="button">Подати оголошення</button>
      <button className="button button__login">Вхід</button>
    </header>
  );
};
