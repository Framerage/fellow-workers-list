import React from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import {Controller} from "./Controller";
type CardModalProps = {
  removePerson: (persId: string) => void;
  editPersonMainCharacters: Function;
  name: string;
  age: string;
  id: string;
  location: string;
  job: string;
  gender: string;
  history: string;
  comments: string;
};
const Model: React.FC<CardModalProps> = ({
  removePerson,
  editPersonMainCharacters,
  ...props
}) => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["choosedPerson"]);

  const followingToDescripPage = (persId: string) => {
    setCookies("choosedPerson", persId);
    navigate(`/:${cookies.choosedPerson}`);
  };

  return (
    <Controller
      removePerson={removePerson}
      editPersonMainCharacters={editPersonMainCharacters}
      followingToDescripPage={followingToDescripPage}
      {...props}
    />
  );
};
export default Model;
