import React from "react";
import "./card.scss";
import EditBtn from "components/UI/EditBtn/EditBtn";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import CharacterPoint from "components/UI/CharacterPoint/CharacterPoint";
import DeleteBtn from "components/UI/DeleteBtn";
import {PersonListProps} from "types/appTypes";
type CardViewprops = {
  isEditActive: boolean;
  isCardVisible: boolean;
  isMenuOpen: boolean;
  editCharacters: PersonListProps;
  setEditCharacters: Function;
  setIsCardVisible: Function;
  setIsMenuOpen: Function;
  setIsEditActive: Function;
  followingToDescripPage: (persId: string) => void;
  removePerson: (persId: string) => void;
  editPerson: (param: {}) => void;
  propsEntries: [string, any][];
};
export const View: React.FC<CardViewprops> = ({
  isEditActive,
  isCardVisible,
  isMenuOpen,
  editCharacters,
  setEditCharacters,
  setIsCardVisible,
  setIsMenuOpen,
  setIsEditActive,
  followingToDescripPage,
  editPerson,
  removePerson,
  propsEntries,
}) => {
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
};
