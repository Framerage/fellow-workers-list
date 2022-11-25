import React from "react";
import {useNavigate} from "react-router-dom";
import {THEMES_COLORS} from "utils/constances/constances";
import "./header.scss";
const Header = () => {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/");
  };
  const changeTheme = (choosedColor: string) => {
    document.documentElement.style.setProperty(
      "--themeColor",
      `${choosedColor}`,
    );
  };
  // добавить приколюшку на светотемы
  return (
    <div className="header">
      <div className="header__logo" onClick={navToHome}></div>
      <div className="header__outline">
        {THEMES_COLORS.map(color => (
          <div
            key={color}
            role="presentation"
            className="themeColorBlock"
            style={{backgroundColor: `${color}`}}
            onClick={() => changeTheme(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Header;
