import React from "react";
import "./controlBtns.scss";
type ViewControlBtnsProps = {
  editPersonalParams: Function;
  closeEdition: () => void;
};
const View = ({editPersonalParams, closeEdition}: ViewControlBtnsProps) => {
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
export default View;
