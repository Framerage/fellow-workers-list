import React, {useEffect, useState} from "react";
import {editWordFirstSymbolToUpperCase} from "utils/helpers/helpers";
import "./characterPoint.scss";
type PointProps = {
  param: any;
  isEditActive: boolean;
  paramName: string;
  page: string;
  onChange: Function;
};
const CharacterPoint = ({
  param,
  isEditActive,
  paramName,
  page,
  onChange,
}: PointProps) => {
  const [paramsValue, setParamsValue] = useState(param);

  useEffect(() => {
    setTimeout(() => {
      if (param !== paramsValue) {
        console.log("не одинаковые");
        onChange(paramsValue);
      }
    }, 3500);
  }, [paramsValue]);

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
          clearTimeout("");
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
export default CharacterPoint;
