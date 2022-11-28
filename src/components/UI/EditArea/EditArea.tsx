import React, { useState } from "react";
import { PersonListProps } from "types/appTypes";
import { editWordFirstSymbolToUpperCase } from "utils/helpers/helpers";
import EditBtn from "../EditBtn/EditBtn";
import "./editArea.scss";
type EditAreaProps = {
  text: string;
  textName: string;
  setEditCharacters: Function;
  editCharacters: PersonListProps;
  sentChanges: Function;
};
const EditArea = ({
  text,
  textName,
  setEditCharacters,
  editCharacters,
  sentChanges,
}: EditAreaProps) => {
  const [isDetailedEditOpen, setIsDetailedEditOpen] = useState(false);
  const [specDescrip, setSpecDescrip] = useState(text);

  const changeParam = (e: any) => {
    setSpecDescrip(e.target.value);
    setEditCharacters({
      ...editCharacters,
      [`${Object.keys(editCharacters).find((el) => el === textName)}`]:
        e.target.value,
    });
  };
  return (
    <>
      {isDetailedEditOpen ? (
        <div className="personalDescrip__editDetailedDescrip">
          <div className="editDetailedDescrip__textArea">
            <span>
              {textName ? editWordFirstSymbolToUpperCase(textName) : ""}
            </span>
            <textarea value={specDescrip} onChange={(e) => changeParam(e)} />
          </div>

          <div className="editDetailedDescrip__activeBtns">
            <button
              className="activeBtns__controlBtn"
              onClick={() => {
                sentChanges();
                setIsDetailedEditOpen(false);
              }}
            >
              OK
            </button>
            <button
              className="activeBtns__controlBtn"
              onClick={() => {
                setIsDetailedEditOpen(false);
                setSpecDescrip("");
              }}
            >
              X
            </button>
          </div>
        </div>
      ) : (
        textName && (
          <div className="personalDescrip__detailedDescrip">
            <div className="detailedDescrip">
              <span>{editWordFirstSymbolToUpperCase(textName)}</span>
              <span>
                {specDescrip ? editWordFirstSymbolToUpperCase(specDescrip) : ""}
              </span>
            </div>
            <EditBtn onClick={() => setIsDetailedEditOpen(true)} />
          </div>
        )
      )}
    </>
  );
};
export default EditArea;
