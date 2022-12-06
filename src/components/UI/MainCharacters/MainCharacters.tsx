import React, {useEffect, useState} from "react";
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
  const [characterNames, setCharacterNames] = useState(
    characterValues.map(el => el[0]),
  );
  const [characterDatas, setCharacterDatas] = useState(() =>
    characterValues.map(el => el[1]),
  );

  useEffect(() => {
    setCharacterNames(characterValues.map(el => el[0]));
    setCharacterDatas(characterValues.map(el => el[1]));
  }, [characterValues]);

  return (
    <div className="personalDescrip__characters">
      <ul>
        {characterNames.map((characterName, index) => (
          <CharacterPoint
            key={characterName}
            page="descrip"
            param={characterDatas[index]}
            paramName={characterName}
            onChange={(text: string) =>
              setPersonInfo({
                ...personInfo,
                [characterName]: text,
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
