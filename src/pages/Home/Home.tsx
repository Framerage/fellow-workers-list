import Card from "components/Card/Card";
import Loader from "components/Loader";
import React, {useCallback, useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {
  deletePersonFromList,
  editPersonCharacters,
  fetchPersonList,
} from "store/personList/actions";
import {
  selectIsPromiseReady,
  selectPersonList,
} from "store/personList/selectors";
import {AppDispatch, PersonListProps} from "types/appTypes";
import {editPersonParams} from "utils/helpers/helpers";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gettedList = useSelector(selectPersonList);
  const isDataFetched = useSelector(selectIsPromiseReady);
  const [cookies] = useCookies(["choosedPerson"]);
  const [personList, setPersonList] = useState<PersonListProps[]>(gettedList);
  // console.log(isDataFetched, " isDataFetched from Home");
  useEffect(() => {
    cookies.choosedPerson &&
      setPersonList([
        ...gettedList.filter(
          (el: {id: string}) => el.id === cookies.choosedPerson,
        ),
        ...gettedList.filter(
          (el: {id: string}) => el.id !== cookies.choosedPerson,
        ),
      ]);
  }, [cookies.choosedPerson, gettedList]);

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
      dispatch(
        deletePersonFromList(
          gettedList.filter((el: {id: string}) => el.id !== persId),
        ),
      );
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
    <main className="container">
      <div className="container__header">Fellow workers list</div>
      <div className="container__cards">
        {isDataFetched ? (
          <Loader />
        ) : personList.length ? (
          personList.map(person => (
            <Card
              key={`${person.id}`}
              {...person}
              removePerson={removePerson}
              editPersonMainCharacters={editPersonMainCharacters}
            />
          ))
        ) : (
          <div className="container__empty">
            <p>Empty</p>
          </div>
        )}
      </div>
    </main>
  );
};
export default Home;
