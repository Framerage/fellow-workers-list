import React from "react";
import "./editBtn.scss";

const EditBtn: React.FC<{onClick: () => void}> = ({onClick}) => {
  return <div onClick={onClick} className="editBtn"></div>;
};
export default EditBtn;
