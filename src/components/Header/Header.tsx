import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/");
  };
  // добавить приколюшку на светотемы
  return (
    <div className="header">
      <div className="header__logo" onClick={navToHome}></div>
      <div className="header__outline"></div>
    </div>
  );
};
export default Header;
