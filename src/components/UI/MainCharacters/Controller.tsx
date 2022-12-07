import React, {useEffect, useState} from "react";
import {PersonListProps} from "types/appTypes";
import {View} from "./View";
type ControllerMainCharactersProps = {
  closeEdition: () => void;
  openEdition: () => void;
  editPersonalParams: () => void;
  characterValues: any[];
  isEditCharactersOpen: boolean;
  setPersonInfo: Function;
  personInfo: PersonListProps;
};
const Controller: React.FC<ControllerMainCharactersProps> = ({
  characterValues,
  closeEdition,
  openEdition,
  editPersonalParams,
  isEditCharactersOpen,
  setPersonInfo,
  personInfo,
}) => {
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

  const editPersonInfo = (keyName: string, text: string) => {
    setPersonInfo({
      ...personInfo,
      [keyName]: text,
    });
  };

  return (
    <View
      closeEdition={closeEdition}
      openEdition={openEdition}
      editPersonalParams={editPersonalParams}
      editPersonInfo={editPersonInfo}
      characterNames={characterNames}
      characterDatas={characterDatas}
      isEditCharactersOpen={isEditCharactersOpen}
    />
  );
};
export default Controller;
