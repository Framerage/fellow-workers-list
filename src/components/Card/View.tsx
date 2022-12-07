import React from "react";
import "./card.scss";
import EditBtn from "components/UI/EditBtn";
import avatarMan from "../../assets/images/avatar-man.png";
import avatarWoman from "../../assets/images/avatar-woman.png";
import CharacterPoint from "components/UI/CharacterPoint";
import DeleteBtn from "components/UI/DeleteBtn";
import {PersonListProps} from "types/appTypes";
type CardViewprops = {
  isEditActive: boolean;
  isCardVisible: boolean;
  isMenuOpen: boolean;
  editCharacters: PersonListProps;
  setIsCardVisible: Function;
  setIsMenuOpen: Function;
  setIsEditActive: Function;
  followingToDescripPage: (persId: string) => void;
  removePerson: (persId: string) => void;
  editPerson: (param: {}) => void;
  onEditChoosedParam: (text: string, keyName: string) => void;
  paramNames: string[];
  paramValues: any[];
};
export const View: React.FC<CardViewprops> = ({
  isEditActive,
  isCardVisible,
  isMenuOpen,
  editCharacters,
  setIsCardVisible,
  setIsMenuOpen,
  setIsEditActive,
  followingToDescripPage,
  editPerson,
  removePerson,
  paramNames,
  paramValues,
  onEditChoosedParam,
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
          onChange={(text: string) => onEditChoosedParam(text, "name")}
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
          {paramNames.map((keyName, index) => (
            <CharacterPoint
              key={keyName}
              page="card"
              isEditActive={isEditActive}
              paramName={keyName}
              param={paramValues[index]}
              onChange={(text: string) => onEditChoosedParam(text, keyName)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
