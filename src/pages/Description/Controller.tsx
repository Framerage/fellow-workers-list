import React, {useState} from "react";
import {PersonListProps} from "types/appTypes";
import {EXTRA_CHARACTERS, MAIN_CHARACTERS} from "utils/constances/constances";
import {editPersonParams} from "utils/helpers/helpers";
import {View} from "./View";
type DescripControllerProps = {
  choosedPerson: string;
  dispatchPersonalParams: (info: PersonListProps) => void;
  gettedPersonList: PersonListProps[];
};
export const Controller: React.FC<DescripControllerProps> = ({
  choosedPerson,
  dispatchPersonalParams,
  gettedPersonList,
}) => {
  const [personInfo, setPersonInfo] = useState<PersonListProps | any>(
    gettedPersonList.find(el => el.id === choosedPerson),
  );
  const [isEditCharactersOpen, setIsEditCharactersOpen] = useState(false);
  const [descripEntries, setDescripEntries] = useState(() =>
    Object.entries(personInfo),
  );
  const [characterValues, setCharacterValues] = useState(() =>
    descripEntries.filter(el => MAIN_CHARACTERS.includes(el[0])),
  );
  const [extraCharacterValues, setExtraCharacterValues] = useState(() =>
    descripEntries.filter(el => EXTRA_CHARACTERS.includes(el[0])),
  );

  const editPersonalParams = (info: PersonListProps) => {
    setDescripEntries(Object.entries(info));
    setCharacterValues(
      Object.entries(info).filter(el => MAIN_CHARACTERS.includes(el[0])),
    );
    setExtraCharacterValues(
      Object.entries(info).filter(el => EXTRA_CHARACTERS.includes(el[0])),
    );
    setPersonInfo(
      editPersonParams(gettedPersonList, info).find(
        el => el.id === choosedPerson,
      ),
    );
    dispatchPersonalParams(info);
  };
  const onOpenEdition = () => {
    setIsEditCharactersOpen(true);
  };
  const onCloseEdition = () => {
    setIsEditCharactersOpen(false);
  };
  return (
    <View
      personInfo={personInfo}
      isEditCharactersOpen={isEditCharactersOpen}
      characterValues={characterValues}
      extraCharacterValues={extraCharacterValues}
      editPersonalParams={editPersonalParams}
      setPersonInfo={setPersonInfo}
      onOpenEdition={onOpenEdition}
      onCloseEdition={onCloseEdition}
    />
  );
};
