import React, {useState} from "react";
import {PersonListProps} from "types/appTypes";
import "./characterPoint.scss";
type PointProps = {
  param: string | number;
  isEditActive: boolean;
  paramName: string;
  setEditCharacters: Function;
  editCharacters: PersonListProps;
};
const CharacterPoint = ({
  param,
  isEditActive,
  paramName,
  setEditCharacters,
  editCharacters,
}: PointProps) => {
  const [paramsValue, setParamsValue] = useState(param);
  const changeParam = (e: any) => {
    setParamsValue(e.target.value);
    setEditCharacters({
      ...editCharacters,
      [`${Object.keys(editCharacters).find(el => el === paramName)}`]:
        paramName === "age" ? Number(e.target.value) : e.target.value,
    });
  };
  return (
    <li className="characters__item">
      {paramName}:&nbsp;
      {isEditActive ? (
        <input
          className="characters__editRange"
          type="text"
          value={paramsValue}
          onChange={e => changeParam(e)}
        />
      ) : (
        param
      )}
    </li>
  );
};
export default CharacterPoint;
