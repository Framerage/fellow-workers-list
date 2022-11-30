import React, {useState} from "react";
import {editWordFirstSymbolToUpperCase} from "utils/helpers/helpers";
import "./editExtraCharacter.scss";
type editExtraCharactersProps = {
  closeEditArea: Function;
  text: string;
  textName: string;
  sentChanges: Function;
  changeParam: Function;
};
const EditExtraCharacters = ({
  text,
  textName,
  closeEditArea,
  sentChanges,
  changeParam,
}: editExtraCharactersProps) => {
  const [specDescrip, setSpecDescrip] = useState(text);

  const changeChoosedParam = (e: any) => {
    setSpecDescrip(e.target.value);
    changeParam(e.target.value);
  };
  return (
    <div className="personalDescrip__editDetailedDescrip">
      <div className="editDetailedDescrip__textArea">
        <span>{textName ? editWordFirstSymbolToUpperCase(textName) : ""}</span>
        <textarea value={specDescrip} onChange={e => changeChoosedParam(e)} />
      </div>

      <div className="editDetailedDescrip__activeBtns">
        <button
          className="activeBtns__controlAreaBtn"
          onClick={() => {
            sentChanges();
            closeEditArea();
          }}
        >
          OK
        </button>
        <button
          className="activeBtns__controlAreaBtn"
          onClick={() => {
            closeEditArea();
            setSpecDescrip("");
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
export default EditExtraCharacters;
