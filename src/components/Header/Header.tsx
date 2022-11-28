import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserTheme } from "store/personTheme/actions";
import { selectUserTheme } from "store/personTheme/selectors";
import { AppDispatch } from "types/appTypes";
import { THEMES_COLORS } from "utils/constances/constances";
import "./header.scss";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userTheme = useSelector(selectUserTheme);
  const navToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    document.documentElement.style.setProperty("--themeColor", `${userTheme}`);
  }, []);
  const changeTheme = (choosedColor: string) => {
    document.documentElement.style.setProperty(
      "--themeColor",
      `${choosedColor}`
    );
    dispatch(changeUserTheme(choosedColor));
  };
  // добавить приколюшку на светотемы
  return (
    <div className="header">
      <div className="header__logo" onClick={navToHome}></div>
      <div className="header__outline">
        {THEMES_COLORS.map((color) => (
          <div
            key={color}
            role="presentation"
            className="themeColorBlock"
            style={{ backgroundColor: `${color}` }}
            onClick={() => changeTheme(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Header;
