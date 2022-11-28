import React, { useState } from "react";
import { PersonListProps } from "types/appTypes";
import { editWordFirstSymbolToUpperCase } from "utils/helpers/helpers";
import "./characterPoint.scss";
type PointProps = {
  param: any;
  isEditActive: boolean;
  paramName: string;
  setEditCharacters: Function;
  editCharacters: PersonListProps;
  page: string;
};
const CharacterPoint = ({
  param,
  isEditActive,
  paramName,
  setEditCharacters,
  editCharacters,
  page,
}: PointProps) => {
  const [paramsValue, setParamsValue] = useState(param);
  const changeParam = (e: any) => {
    setParamsValue(e.target.value);
    setEditCharacters({
      ...editCharacters,
      [`${Object.keys(editCharacters).find((el) => el === paramName)}`]:
        paramName === "age" ? Number(e.target.value) : e.target.value,
    });
  };
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
          type="text"
          value={paramsValue}
          onChange={(e) => changeParam(e)}
        />
      ) : (
        <span className="item__text">{param}</span>
      )}
    </li>
  );
};
export default CharacterPoint;
