import React, { useState } from "react";
import EditBtn from "../EditBtn/EditBtn";
import "./editArea.scss";
type EditAreaProps = {
  text: string;
};
const EditArea = ({ text }: EditAreaProps) => {
  const [isDetailedEditOpen, setIsDetailedEditOpen] = useState(false);

  return (
    <>
      <div
        className={
          isDetailedEditOpen
            ? "personalDescrip__detailedDescrip vision"
            : "personalDescrip__detailedDescrip"
        }
      >
        <span>{text}</span>
        <EditBtn onClick={() => setIsDetailedEditOpen(true)} />
      </div>
      <div
        className={
          isDetailedEditOpen
            ? "personalDescrip__editDetailedDescrip"
            : "personalDescrip__editDetailedDescrip vision"
        }
      >
        <textarea className="editDetailedDescrip__textArea" />
        <div className="editDetailedDescrip__activeBtns">
          <button className="activeBtns__controlBtn">OK</button>
          <button
            className="activeBtns__controlBtn"
            onClick={() => setIsDetailedEditOpen(false)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};
export default EditArea;
