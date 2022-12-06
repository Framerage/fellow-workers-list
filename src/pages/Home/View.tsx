import React from "react";
import Card from "components/Card/";
import Loader from "components/Loader";
import {PersonListProps} from "types/appTypes";

import "./home.scss";
type HomeViewProps = {
  onRemovePerson: (persId: string) => void;
  editPersonMainCharacters: Function;
  personList: PersonListProps[];
  isDataFetched: boolean;
};
export const View: React.FC<HomeViewProps> = ({...props}) => {
  return (
    <main className="container">
      <div className="container__header">Fellow workers list</div>
      <div className="container__cards">
        {props.isDataFetched && <Loader />}
        {!props.isDataFetched &&
          props.personList.length > 0 &&
          props.personList.map(person => (
            <Card
              key={`${person.id}`}
              {...person}
              removePerson={props.onRemovePerson}
              editPersonMainCharacters={props.editPersonMainCharacters}
            />
          ))}
        {!props.isDataFetched && !props.personList.length && (
          <div className="container__empty">
            <p>Empty</p>
          </div>
        )}
      </div>
    </main>
  );
};
