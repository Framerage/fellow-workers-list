import React from "react";
import {editWordFirstSymbolToUpperCase} from "utils/helpers/helpers";
import "./editExtraCharacter.scss";
type ViewEditExtraCharacterProps = {
  textName: string;
  specDescrip: string;
  changeChoosedParam: (text: string) => void;
  onCloseEdit: () => void;
  onSentParams: () => void;
};
export const View: React.FC<ViewEditExtraCharacterProps> = ({
  textName,
  specDescrip,
  changeChoosedParam,
  onCloseEdit,
  onSentParams,
}) => {
  return (
    <div className="personalDescrip__editDetailedDescrip">
      <div className="editDetailedDescrip__textArea">
        <span>{textName ? editWordFirstSymbolToUpperCase(textName) : ""}</span>
        <textarea
          value={specDescrip}
          onChange={e => changeChoosedParam(e.target.value)}
        />
      </div>

      <div className="editDetailedDescrip__activeBtns">
        <button className="activeBtns__controlAreaBtn" onClick={onSentParams}>
          OK
        </button>
        <button className="activeBtns__controlAreaBtn" onClick={onCloseEdit}>
          X
        </button>
      </div>
    </div>
  );
};
