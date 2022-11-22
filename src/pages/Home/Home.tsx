import axios from "axios";
import Card from "components/Card/Card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersonList } from "store/personList/actions";
import { selectPersonList } from "store/personList/selectors";
import { AppDispatch, PersonListProps } from "types/appTypes";
import "./home.scss";
const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gettedList = useSelector(selectPersonList);
  const [personList, setPersonList] = useState<PersonListProps[]>(gettedList);
  const [isListReady, setIsListReady] = useState(false);
  useEffect(() => {
    if (!isListReady && !personList.length) {
      setPersonList(gettedList);
      setIsListReady(true);
    } else {
      setIsListReady(false);
    }
  }, [gettedList, personList, isListReady]);
  useEffect(() => {
    dispatch(fetchPersonList());
  }, []);
  return (
    <main className="container">
      <div className="container__header">Fellow workers list</div>
      <div className="container__cards">
        {personList.map((person, index) => (
          <Card key={`${person.name}+${index}`} {...person} />
        ))}
      </div>
    </main>
  );
};
export default Home;
