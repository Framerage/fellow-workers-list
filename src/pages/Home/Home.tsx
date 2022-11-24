import Card from "components/Card/Card";
import React, {useCallback, useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {
  deletePerson,
  editPersonMainCharacters,
  fetchPersonList,
} from "store/personList/actions";
import {selectPersonList} from "store/personList/selectors";
import {AppDispatch, PersonListProps} from "types/appTypes";
import {editPersonParams} from "utils/helpers/helpers";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gettedList = useSelector(selectPersonList);
  const [cookies] = useCookies(["choosedPerson"]);
  const [personList, setPersonList] = useState<PersonListProps[]>(gettedList);
  const [isListReady, setIsListReady] = useState(false);

  useEffect(() => {
    cookies.choosedPerson &&
      setPersonList([
        ...gettedList.filter(
          (el: {id: number}) => el.id === Number(cookies.choosedPerson),
        ),
        ...gettedList.filter(
          (el: {id: number}) => el.id !== Number(cookies.choosedPerson),
        ),
      ]);
  }, [cookies.choosedPerson, gettedList]);

  useEffect(() => {
    if (!isListReady && !personList.length) {
      setPersonList(gettedList);
      setIsListReady(true);
    } else {
      setIsListReady(false);
    }
  }, [gettedList, personList, isListReady]);

  useEffect(() => {
    if (!personList.length) {
      dispatch(fetchPersonList());
    }
  }, []);

  const removePerson = useCallback(
    (persId: number) => {
      setPersonList(gettedList.filter((el: {id: number}) => el.id !== persId));
      dispatch(
        deletePerson(gettedList.filter((el: {id: number}) => el.id !== persId)),
      );
    },
    [gettedList, dispatch],
  );

  const editPersonCharacters = useCallback(
    (info: PersonListProps) => {
      setPersonList(editPersonParams(gettedList, info));
      dispatch(editPersonMainCharacters(editPersonParams(gettedList, info)));
    },
    [gettedList, dispatch],
  );
  return (
    <main className="container">
      <div className="container__header">Fellow workers list</div>
      <div className="container__cards">
        {personList.map(person => (
          <Card
            key={`${person.id}`}
            {...person}
            removePerson={removePerson}
            editPersonCharacters={editPersonCharacters}
          />
        ))}
      </div>
    </main>
  );
};
export default Home;
