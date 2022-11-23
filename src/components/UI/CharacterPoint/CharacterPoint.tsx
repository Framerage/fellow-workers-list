import React from "react";
import "./characterPoint.scss";
type PointProps = {
  param: string | number;
  condition: boolean;
  paramName: string;
};
const CharacterPoint = ({ param, condition, paramName }: PointProps) => {
  return (
    <li>
      {paramName}:{" "}
      {condition ? (
        <input className="characters__editRange" type="text" value={param} />
      ) : (
        param
      )}{" "}
    </li>
  );
};
export default CharacterPoint;
