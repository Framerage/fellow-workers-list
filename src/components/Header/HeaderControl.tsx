import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {changeUserTheme} from "store/personTheme/actions";
import {selectUserTheme} from "store/personTheme/selectors";
import {AppDispatch} from "types/appTypes";
import Header from "./Header";

const HeaderControl = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userTheme = useSelector(selectUserTheme);
  const goToHemePage = () => {
    navigate("/");
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--themeColor", `${userTheme}`);
  }, [userTheme]);

  const changeTheme = (choosedColor: string) => {
    document.documentElement.style.setProperty(
      "--themeColor",
      `${choosedColor}`,
    );
    dispatch(changeUserTheme(choosedColor));
  };
  return (
    <>
      <Header navToHome={goToHemePage} onChangeTheme={changeTheme} />
    </>
  );
};
export default HeaderControl;
