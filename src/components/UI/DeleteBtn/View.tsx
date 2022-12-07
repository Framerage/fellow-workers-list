import React from "react";
import "./deleteBtn.scss";
const View = ({deleteItem}: {deleteItem: () => void}) => {
  return (
    <button
      role="presentation"
      className="activeBtn__deletedBtn"
      onClick={deleteItem}
    >
      x
    </button>
  );
};
export default View;
