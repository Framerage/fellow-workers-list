import React, {useCallback, useEffect, useState} from "react";
import {editPersonCharacters, fetchPersonList} from "store/personList/actions";
import {PersonListProps} from "types/appTypes";
import {editPersonParams} from "utils/helpers/helpers";
import {View} from "./View";
type HomeControllerProps = {
  dispatch: Function;
  gettedList: PersonListProps[];
  cookies: string;
  isDataFetched: boolean;
  onRemovePerson: (persId: string) => void;
};
const Controller: React.FC<HomeControllerProps> = ({
  dispatch,
  gettedList,
  cookies,
  isDataFetched,
  onRemovePerson,
}) => {
  const [personList, setPersonList] = useState<PersonListProps[]>(gettedList);

  useEffect(() => {
    cookies &&
      setPersonList([
        ...gettedList.filter((el: {id: string}) => el.id === cookies),
        ...gettedList.filter((el: {id: string}) => el.id !== cookies),
      ]);
  }, [cookies, gettedList]);

  useEffect(() => {
    if (!isDataFetched && !personList.length) {
      setPersonList(gettedList);
    }
  }, [gettedList, personList, isDataFetched]);

  useEffect(() => {
    if (!personList.length) {
      dispatch(fetchPersonList());
    }
  }, []);

  const removePerson = useCallback(
    (persId: string) => {
      setPersonList(gettedList.filter((el: {id: string}) => el.id !== persId));
      onRemovePerson(persId);
    },
    [gettedList, dispatch],
  );

  const editPersonMainCharacters = useCallback(
    (info: PersonListProps) => {
      setPersonList(editPersonParams(gettedList, info));
      dispatch(editPersonCharacters(editPersonParams(gettedList, info)));
    },
    [gettedList, dispatch],
  );
  return (
    <View
      onRemovePerson={removePerson}
      editPersonMainCharacters={editPersonMainCharacters}
      personList={personList}
      isDataFetched={isDataFetched}
    />
  );
};
export default Controller;
