import React from "react";
import "./editBtn.scss";
type EditBtnProps = {
  onClick: any;
};
const EditBtn = ({ onClick }: EditBtnProps) => {
  return <div onClick={onClick} className="editBtn"></div>;
};
export default EditBtn;
