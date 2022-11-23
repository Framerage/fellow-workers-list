import React, { useCallback, useState } from "react";
import "./card.scss";
import EditBtn from "components/UI/EditBtn/EditBtn";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

type CardProps = {
  removePerson: Function;
  editPersonCharacters: Function;
  name: string;
  age: number;
  id: number;
  location: string;
  job: string;
  gender: string;
};
function Card({ removePerson, editPersonCharacters, ...props }: CardProps) {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["choosedPerson"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [editCharacters, setEditCharacters] = useState({
    age: props.age,
    name: props.name,
  });

  const followingToDescripPage = (persId: number) => {
    setCookies("choosedPerson", `${persId}`);
    navigate(`/:${persId}`);
  };
  const editPerson = useCallback(
    (params: {}) => {
      editPersonCharacters({ ...params, id: props.id });
      setIsMenuOpen(false);
      setIsEditActive(false);
    },
    [isMenuOpen, isEditActive]
  );
  return (
    <div className="personCard">
      <div className="personCard__avatar">
        {" "}
        <img
          onClick={() => followingToDescripPage(props.id)}
          src={props.gender === "man" ? avatarMan : avatarWoman}
          alt="ava-man"
        />
        <span className={isEditActive ? "avatar__name vision" : "avatar__name"}>
          {props.name}
        </span>
        <input
          type="text"
          value={editCharacters.name}
          className={
            isEditActive ? "avatar__nameEdit" : "avatar__nameEdit vision"
          }
          onChange={(e) =>
            setEditCharacters({
              ...editCharacters,
              name: e.target.value,
            })
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
              onClick={() => editPerson(editCharacters)}
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
            <EditBtn onClick={() => setIsEditActive(true)} />
            <div
              role="presentation"
              className="activeBtn__delete"
              onClick={() => removePerson(props.id)}
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
                value={editCharacters.age}
                className="descrip__ageEdit"
                type="text"
                onChange={(e) =>
                  setEditCharacters({
                    ...editCharacters,
                    age: Number(e.target.value),
                  })
                }
              />
            ) : (
              props.age
            )}
          </li>
          <li>job: {props.job}</li>
          <li>city: {props.location}</li>
          <li>gender: {props.gender}</li>
        </ul>
      </div>
    </div>
  );
}
export default Card;
