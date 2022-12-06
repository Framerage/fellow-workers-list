import React, {useEffect} from "react";
import {THEMES_COLORS} from "utils/constances/constances";
import {View} from "./View";
type HeaderControlProps = {
  goToHemePage: () => void;
  userTheme: number;
  dispatchUserTheme: (index: number) => void;
};
export const Controller: React.FC<HeaderControlProps> = ({
  goToHemePage,
  userTheme,
  dispatchUserTheme,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--themeColor",
      `${THEMES_COLORS[userTheme]}`,
    );
    document.documentElement.style.setProperty(
      "--colorRange",
      `${THEMES_COLORS}`,
    );
  }, [userTheme]);

  const changeTheme = (e: any) => {
    document.documentElement.style.setProperty(
      "--themeColor",
      `${THEMES_COLORS[e.target.value]}`,
    );
    dispatchUserTheme(Number(e.target.value));
  };

  return (
    <View
      navToHome={goToHemePage}
      onChangeTheme={changeTheme}
      value={userTheme}
    />
  );
};
