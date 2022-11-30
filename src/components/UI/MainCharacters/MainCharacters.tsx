import React from "react";
import {PersonListProps} from "types/appTypes";
import CharacterPoint from "../CharacterPoint";
import ControlBtns from "../ControlBtns";
import EditBtn from "../EditBtn";
import "./mainCharacters.scss";
type MainCharactersProps = {
  closeEdition: () => void;
  openEdition: () => void;
  editPersonalParams: () => void;
  characterValues: any[];
  isEditCharactersOpen: boolean;
  setPersonInfo: Function;
  personInfo: PersonListProps;
};
const MainCharacters = ({
  characterValues,
  closeEdition,
  openEdition,
  editPersonalParams,
  isEditCharactersOpen,
  setPersonInfo,
  personInfo,
}: MainCharactersProps) => {
  return (
    <div className="personalDescrip__characters">
      <ul>
        {characterValues.map(characterName => (
          <CharacterPoint
            key={characterName[0]}
            page="descrip"
            param={characterName[1]}
            paramName={characterName[0]}
            onChange={(text: string) =>
              setPersonInfo({
                ...personInfo,
                [characterName[0]]: text,
              })
            }
            isEditActive={isEditCharactersOpen}
          />
        ))}
      </ul>
      {isEditCharactersOpen ? (
        <ControlBtns
          closeEdition={closeEdition}
          editPersonalParams={editPersonalParams}
        />
      ) : (
        <EditBtn onClick={openEdition} />
      )}
    </div>
  );
};
export default MainCharacters;
