import React from "react";
import {editWordFirstSymbolToUpperCase} from "utils/helpers/helpers";
import EditBtn from "../EditBtn";
import "./extraCharacters.scss";
type ViewExtraCharactersProps = {
  text: string;
  textName: string;
  openEditArea: Function;
};
const View: React.FC<ViewExtraCharactersProps> = ({
  text,
  textName,
  openEditArea,
}) => {
  return (
    <div className="personalDescrip__detailedDescrip">
      <div className="detailedDescrip">
        <span>{editWordFirstSymbolToUpperCase(textName)}</span>
        <span>{text ? editWordFirstSymbolToUpperCase(text) : ""}</span>
      </div>
      <EditBtn onClick={() => openEditArea(true)} />
    </div>
  );
};
export default View;
