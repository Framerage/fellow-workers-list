import React from "react";
import {editWordFirstSymbolToUpperCase} from "utils/helpers/helpers";
import "./characterPoint.scss";
type ViewCharacterPointProps = {
  isEditActive: boolean;
  paramName: string;
  param: string;
  page: string;
  paramsValue: string;
  setParamsValue: Function;
  onChange: (text: string) => void;
};
export const View: React.FC<ViewCharacterPointProps> = ({
  isEditActive,
  paramName,
  param,
  page,
  paramsValue,
  setParamsValue,
  onChange,
}) => {
  return isEditActive ? (
    <li
      className={
        paramName === "name" ? "characters__item nameItem" : "characters__item"
      }
    >
      <span className="item__textName">
        {paramName ? editWordFirstSymbolToUpperCase(paramName) + ": " : ""}
      </span>
      <input
        className={
          page !== "card"
            ? "characters__editRange"
            : "characters__editRange cardEdit"
        }
        type={"text"}
        value={paramsValue}
        onChange={e => {
          setParamsValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </li>
  ) : (
    <li
      className={
        paramName === "name" ? "characters__item nameItem" : "characters__item"
      }
    >
      <span className="item__textName">
        {paramName ? editWordFirstSymbolToUpperCase(paramName) + ": " : ""}
      </span>
      <span className="item__text">{param}</span>
    </li>
  );
};
