import React from "react";
import "./editBtn.scss";

const View: React.FC<{onClick: () => void}> = ({onClick}) => {
  return <div onClick={onClick} className="editBtn"></div>;
};
export default View;
