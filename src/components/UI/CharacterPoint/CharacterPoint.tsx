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
    }, 500);
  }, [paramsValue]);

  return (
    <li className="characters__item">
      {paramName ? editWordFirstSymbolToUpperCase(paramName) + ": " : ""}
      {isEditActive ? (
        <input
          className={
            page !== "card"
              ? "characters__editRange"
              : "characters__editRange cardEdit"
          }
          type={"text"}
          value={paramsValue}
          onChange={e => setParamsValue(e.target.value)}
        />
      ) : (
        <span className="item__text">{param}</span>
      )}
    </li>
  );
};
export default CharacterPoint;
