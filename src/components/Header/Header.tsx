import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {changeUserTheme} from "store/personTheme/actions";
import {selectUserTheme} from "store/personTheme/selectors";
import {AppDispatch} from "types/appTypes";
import {THEMES_COLORS} from "utils/constances/constances";
import "./header.scss";
type HeaderProps = {
  onChangeTheme: Function;
  navToHome: () => void;
};
const Header = ({navToHome, onChangeTheme}: HeaderProps) => {
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
            onClick={() => onChangeTheme(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Header;
