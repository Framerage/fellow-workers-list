import React from "react";
import "./controlBtns.scss";
type ControlBtnsProps = {
  editPersonalParams: Function;
  closeEdition: () => void;
};
const ControlBtns = ({editPersonalParams, closeEdition}: ControlBtnsProps) => {
  return (
    <div className="characters__controlBtns">
      <button
        className="activeBtns__controlBtn"
        onClick={() => {
          editPersonalParams();
          closeEdition();
        }}
      >
        OK
      </button>
      <button className="activeBtns__controlBtn" onClick={closeEdition}>
        X
      </button>
    </div>
  );
};
export default ControlBtns;
