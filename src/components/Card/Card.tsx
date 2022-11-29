import React, {useCallback, useState} from "react";
import "./card.scss";
import EditBtn from "components/UI/EditBtn/EditBtn";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import CharacterPoint from "components/UI/CharacterPoint/CharacterPoint";
import DeleteBtn from "components/UI/DeleteBtn";
import {getObjectValues} from "utils/helpers/helpers";

type CardProps = {
  removePerson: Function;
  editPersonMainCharacters: Function;
  name: string;
  age: string;
  id: number;
  location: string;
  job: string;
  gender: string;
  history: string;
  comments: string;
};
function Card({removePerson, editPersonMainCharacters, ...props}: CardProps) {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["choosedPerson"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [editCharacters, setEditCharacters] = useState({
    name: props.name,
    age: props.age,
    id: props.id,
    gender: "",
    job: "",
    location: "",
    history: "",
    comments: "",
  });

  const followingToDescripPage = (persId: number) => {
    setCookies("choosedPerson", `${persId}`);
    navigate(`/:${cookies.choosedPerson}`);
  };
  const editPerson = useCallback(
    (params: {}) => {
      editPersonMainCharacters({...params, id: props.id});
      setIsMenuOpen(false);
      setIsEditActive(false);
    },
    [props.id, editPersonMainCharacters],
  );

  const paramsName = Object.keys(editCharacters).filter(
    el => el !== "name" && el !== "id" && el !== "history" && el !== "comments",
  );
  // const paramsName=getObjectKeys(editCharacters,["name", "id", "history", "comments"])
  const paramsValue = getObjectValues(editCharacters, [
    props.name,
    props.id,
    props.history,
    props.comments,
  ]);
  const propsValue = Object.values(props).filter(
    el =>
      el !== props.name &&
      el !== props.id &&
      el !== props.history &&
      el !== props.comments,
  );

  return (
    <div className={isCardVisible ? "personCard" : "personCard cardAnimation"}>
      <div
        className="personCard__cardVisibility"
        onClick={() => setIsCardVisible(!isCardVisible)}
      ></div>

      <div className="personCard__avatar">
        {" "}
        <img
          onClick={() => followingToDescripPage(props.id)}
          src={props.gender === "man" ? avatarMan : avatarWoman}
          alt="ava-man"
        />
        <CharacterPoint
          page="name"
          isEditActive={isEditActive}
          paramName={"name"}
          param={editCharacters.name ? editCharacters.name : props.name}
          // editCharacters={editCharacters}
          // setEditCharacters={setEditCharacters}
          onChange={(e: string) =>
            setEditCharacters({
              ...editCharacters,
              [editCharacters.name ? editCharacters.name : props.name]: e,
            })
          }
        />
      </div>
      <div className="personCard__descrip">
        <div className="descrip__Items">
          <span className="descrip__Edit">
            Descrip
            {isEditActive && (
              <button
                className="sentBtn"
                type="button"
                onClick={() => editPerson(editCharacters)}
              >
                OK
              </button>
            )}
          </span>
          {isMenuOpen ? (
            <div className="descrip__activeBtns">
              <EditBtn onClick={() => setIsEditActive(true)} />
              <DeleteBtn deleteItem={() => removePerson(props.id)} />
            </div>
          ) : (
            <div
              className="descrip__active"
              role="presentation"
              onClick={() => setIsMenuOpen(true)}
            >
              ...
            </div>
          )}
        </div>
        <ul>
          {paramsName.map((keyName, index) => (
            <CharacterPoint
              key={keyName}
              page="card"
              isEditActive={isEditActive}
              paramName={keyName}
              param={
                paramsValue[index] ? paramsValue[index] : propsValue[index]
              }
              // editCharacters={editCharacters}
              // setEditCharacters={setEditCharacters}
              onChange={(e: string) =>
                setEditCharacters({
                  ...editCharacters,
                  [propsValue[index]]: e,
                })
              }
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
