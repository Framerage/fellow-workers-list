import React, { useState } from "react";
import "./card.scss";
import avatarMan from "../../assets/images/avatar-man.png";

const Card = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);

  return (
    <div className="personCard">
      <div className="personCard__avatar">
        <img src={avatarMan} alt="ava-man" />
        <span className={isEditActive ? "avatar__name vision" : "avatar__name"}>
          Black Ronald Street
        </span>
        <input
          type="text"
          className={
            isEditActive ? "avatar__nameEdit" : "avatar__nameEdit vision"
          }
        />
      </div>
      <div className="personCard__descrip">
        <div>
          <span>
            Descrip
            <button
              className={isEditActive ? "sentBtn" : "vision"}
              type="button"
            >
              OK
            </button>
          </span>
          <div
            className={
              isMenuOpen ? "descrip__active vision" : "descrip__active"
            }
            role="presentation"
            onClick={() => setIsMenuOpen(true)}
          >
            ...
          </div>
          <div
            className={
              isMenuOpen ? "descrip__activeBtns" : "descrip__activeBtns vision"
            }
          >
            <div
              className="activeBtn__edit"
              onClick={() => setIsEditActive(!isEditActive)}
            ></div>
            <div
              className="activeBtn__delete"
              onClick={() => setIsMenuOpen(false)}
            >
              x
            </div>
          </div>
        </div>
        <ul>
          <li>
            age:{" "}
            {isEditActive ? (
              <input className="descrip__ageEdit" type="text" />
            ) : (
              "27"
            )}
          </li>
          <li>job: front-end</li>
          <li>city: Moscow</li>
          <li>drive: none</li>
          <li>gender: man</li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
