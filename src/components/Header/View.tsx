import React from "react";
import {THEMES_COLORS} from "utils/constances/constances";
import "./header.scss";
type HeaderProps = {
  onChangeTheme: Function;
  navToHome: () => void;
  value: number;
};
export const View: React.FC<HeaderProps> = ({
  navToHome,
  onChangeTheme,
  value,
}) => {
  return (
    <div className="header">
      <div className="header__logo" onClick={navToHome}></div>
      <input
        type="range"
        className="testRange"
        min={0}
        max={THEMES_COLORS.length - 1}
        value={value}
        onChange={e => onChangeTheme(e)}
      />
    </div>
  );
};
