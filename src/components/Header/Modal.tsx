import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {changeUserTheme} from "store/personTheme/actions";
import {selectUserTheme} from "store/personTheme/selectors";
import {AppDispatch} from "types/appTypes";
import {Controller} from "./Controller";

const Modal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userTheme = useSelector(selectUserTheme);
  const goToHemePage = () => {
    navigate("/");
  };
  const dispatchUserTheme = (index: number) => {
    dispatch(changeUserTheme(index));
  };
  return (
    <Controller
      goToHemePage={goToHemePage}
      userTheme={userTheme}
      dispatchUserTheme={dispatchUserTheme}
    />
  );
};
export default Modal;