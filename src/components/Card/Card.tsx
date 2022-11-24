import React, {useCallback, useState} from "react";
import "./card.scss";
import EditBtn from "components/UI/EditBtn/EditBtn";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import CharacterPoint from "components/UI/CharacterPoint/CharacterPoint";

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
function Card({removePerson, editPersonCharacters, ...props}: CardProps) {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["choosedPerson"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [editCharacters, setEditCharacters] = useState({
    name: props.name,
    age: props.age,
    id: NaN,
    gender: "",
    job: "",
    location: "",
  });

  const followingToDescripPage = (persId: number) => {
    setCookies("choosedPerson", `${persId}`);
    navigate(`/:${cookies.choosedPerson}`);
  };
  const editPerson = useCallback(
    (params: {}) => {
      editPersonCharacters({...params, id: props.id});
      setIsMenuOpen(false);
      setIsEditActive(false);
    },
    [props.id, editPersonCharacters],
  );

  const paramsName = Object.keys(editCharacters).filter(
    el => el !== "name" && el !== "id",
  );
  const paramsValue = Object.values(editCharacters).filter(
    el => el !== props.name && el !== props.id && !isNaN(Number(el)),
  );
  const propsValue = Object.values(props).filter(
    el => el !== props.name && el !== props.id,
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
        {isEditActive ? (
          <input
            type="text"
            value={editCharacters.name}
            className="avatar__nameEdit"
            onChange={e =>
              setEditCharacters({
                ...editCharacters,
                name: e.target.value,
              })
            }
          />
        ) : (
          <span className="avatar__name">{props.name}</span>
        )}
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
          {paramsName.map((keyName, index) => (
            <CharacterPoint
              key={keyName}
              isEditActive={isEditActive}
              paramName={keyName}
              param={
                paramsValue[index] ? paramsValue[index] : propsValue[index]
              }
              editCharacters={editCharacters}
              setEditCharacters={setEditCharacters}
            />
          ))}

          {/* <li>
            age:{" "}
            {isEditActive ? (
              <input
                value={editCharacters.age}
                className="descrip__ageEdit"
                type="text"
                onChange={e =>
                  setEditCharacters({
                    ...editCharacters,
                    // age: Number(e.target.value),
                    age: Number(e.target.value),
                  })
                }
              />
            ) : (
              props.age
            )}
          </li> */}
          {/* <li>job: {props.job}</li>
          <li>city: {props.location}</li>
          <li>gender: {props.gender}</li> */}
        </ul>
      </div>
    </div>
  );
}
export default Card;
