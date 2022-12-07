import React from "react";
import CharacterPoint from "../CharacterPoint";
import ControlBtns from "../ControlBtns";
import EditBtn from "../EditBtn";
import "./mainCharacters.scss";
type ViewMainCharactersProps = {
  characterNames: string[];
  characterDatas: string[];
  openEdition: () => void;
  closeEdition: () => void;
  editPersonalParams: () => void;
  isEditCharactersOpen: boolean;
  editPersonInfo: (keyName: string, text: string) => void;
};
export const View: React.FC<ViewMainCharactersProps> = ({
  characterNames,
  characterDatas,
  openEdition,
  closeEdition,
  editPersonalParams,
  isEditCharactersOpen,
  editPersonInfo,
}) => {
  return (
    <div className="personalDescrip__characters">
      <ul>
        {characterNames.map((characterName, index) => (
          <CharacterPoint
            key={characterName}
            page="descrip"
            param={characterDatas[index]}
            paramName={characterName}
            onChange={(text: string) => editPersonInfo(characterName, text)}
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
