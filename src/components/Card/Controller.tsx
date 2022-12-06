import React, {useCallback, useEffect, useState} from "react";
import {CARD_CHARACTERS} from "utils/constances/constances";
import {getObjectEntries} from "utils/helpers/helpers";
import {View} from "./View";
type CardControllerProps = {
  name: string;
  age: string;
  id: string;
  location: string;
  job: string;
  gender: string;
  history: string;
  comments: string;
  followingToDescripPage: (persId: string) => void;
  removePerson: (persId: string) => void;
  editPersonMainCharacters: Function;
};
export const Controller: React.FC<CardControllerProps> = ({
  removePerson,
  editPersonMainCharacters,
  followingToDescripPage,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditActive, setIsEditActive] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [propsEntries, setPropsEntry] = useState(
    getObjectEntries(props, CARD_CHARACTERS),
  );
  const [paramNames, setParamNames] = useState(propsEntries.map(el => el[0]));
  const [paramValues, setParamValues] = useState(propsEntries.map(el => el[1]));
  const [editCharacters, setEditCharacters] = useState(props);

  const editPerson = useCallback(
    (params: {}) => {
      editPersonMainCharacters({...params, id: editCharacters.id});
      setIsMenuOpen(false);
      setIsEditActive(false);
    },
    [editCharacters.id],
  );

  useEffect(() => {
    setPropsEntry(getObjectEntries(editCharacters, CARD_CHARACTERS));
    setParamNames(
      getObjectEntries(editCharacters, CARD_CHARACTERS).map(el => el[0]),
    );
    setParamValues(
      getObjectEntries(editCharacters, CARD_CHARACTERS).map(el => el[1]),
    );
  }, [editCharacters]);

  const onEditChoosedParam = (text: string, keyName: string) => {
    setEditCharacters({
      ...editCharacters,
      [keyName]: text,
    });
  };

  return (
    <View
      isEditActive={isEditActive}
      isCardVisible={isCardVisible}
      editCharacters={editCharacters}
      setIsCardVisible={setIsCardVisible}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      followingToDescripPage={followingToDescripPage}
      setIsEditActive={setIsEditActive}
      paramNames={paramNames}
      paramValues={paramValues}
      editPerson={editPerson}
      removePerson={removePerson}
      onEditChoosedParam={onEditChoosedParam}
    />
  );
};
