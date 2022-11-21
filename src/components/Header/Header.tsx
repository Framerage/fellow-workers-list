import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/");
  };
  return <div className="header" onClick={navToHome}></div>;
};
export default Header;
