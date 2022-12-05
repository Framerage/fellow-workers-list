import React, {useCallback, useState} from "react";
import "./card.scss";
import EditBtn from "components/UI/EditBtn/EditBtn";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import CharacterPoint from "components/UI/CharacterPoint/CharacterPoint";
import DeleteBtn from "components/UI/DeleteBtn";
import {getObjectEntries} from "utils/helpers/helpers";
import {CARD_CHARACTERS} from "utils/constances/constances";

type CardProps = {
  removePerson: (persId: string) => void;
  editPersonMainCharacters: Function;
  name: string;
  age: string;
  id: string;
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
  const [propsEntries] = useState(getObjectEntries(props, CARD_CHARACTERS));

  const [editCharacters, setEditCharacters] = useState(props);

  const followingToDescripPage = (persId: string) => {
    setCookies("choosedPerson", persId);
    navigate(`/:${cookies.choosedPerson}`);
  };
  const editPerson = useCallback(
    (params: {}) => {
      editPersonMainCharacters({...params, id: editCharacters.id});
      setIsMenuOpen(false);
      setIsEditActive(false);
    },
    [editCharacters.id],
  );

  return (
    <div className={isCardVisible ? "personCard" : "personCard cardAnimation"}>
      <div
        className="personCard__cardVisibility"
        onClick={() => setIsCardVisible(!isCardVisible)}
      ></div>

      <div className="personCard__avatar">
        <img
          onClick={() => followingToDescripPage(editCharacters.id)}
          src={editCharacters.gender === "man" ? avatarMan : avatarWoman}
          alt="ava-man"
        />
        <CharacterPoint
          page="name"
          isEditActive={isEditActive}
          paramName={"name"}
          param={editCharacters.name}
          onChange={(text: string) =>
            setEditCharacters({
              ...editCharacters,
              name: text,
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
              <DeleteBtn deleteItem={() => removePerson(editCharacters.id)} />
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
          {propsEntries.map(keyName => (
            <CharacterPoint
              key={keyName[0]}
              page="card"
              isEditActive={isEditActive}
              paramName={keyName[0]}
              param={keyName[1]}
              onChange={(e: string) =>
                setEditCharacters({
                  ...editCharacters,
                  [keyName[0]]: e,
                })
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Card;
