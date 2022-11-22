import React, { useState } from "react";
import "./card.scss";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import { PersonListProps } from "types/appTypes";

const Card: React.FC<PersonListProps> = ({ ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);

  return (
    <div className="personCard">
      <div className="personCard__avatar">
        <img
          src={props.gender === "man" ? avatarMan : avatarWoman}
          alt="ava-man"
        />
        <span className={isEditActive ? "avatar__name vision" : "avatar__name"}>
          {props.name}
        </span>
        <input
          type="text"
          value={props.name}
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
              <input
                value={props.age}
                className="descrip__ageEdit"
                type="text"
              />
            ) : (
              props.age
            )}
          </li>
          <li>job: {props.job}</li>
          <li>city: {props.location}</li>
          <li>drive: none</li>
          <li>gender: {props.gender}</li>
        </ul>
      </div>
    </div>
  );
};
export default Card;
