import React from "react";
import "./deleteBtn.scss";
const DeleteBtn = ({deleteItem}: {deleteItem: () => void}) => {
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
export default DeleteBtn;
