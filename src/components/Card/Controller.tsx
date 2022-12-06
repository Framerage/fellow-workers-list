import React, {useCallback, useState} from "react";
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
  const [propsEntries] = useState(getObjectEntries(props, CARD_CHARACTERS));

  const [editCharacters, setEditCharacters] = useState({...props});

  const editPerson = useCallback(
    (params: {}) => {
      editPersonMainCharacters({...params, id: editCharacters.id});
      setIsMenuOpen(false);
      setIsEditActive(false);
    },
    [editCharacters.id],
  );
  return (
    <View
      isEditActive={isEditActive}
      isCardVisible={isCardVisible}
      editCharacters={editCharacters}
      setEditCharacters={setEditCharacters}
      setIsCardVisible={setIsCardVisible}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      followingToDescripPage={followingToDescripPage}
      setIsEditActive={setIsEditActive}
      propsEntries={propsEntries}
      editPerson={editPerson}
      removePerson={removePerson}
    />
  );
};
