import React from "react";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {editPersonCharacters} from "store/personList/actions";
import {selectPersonList} from "store/personList/selectors";
import {AppDispatch, PersonListProps} from "types/appTypes";
import {editPersonParams} from "utils/helpers/helpers";
import {Controller} from "./Controller";

const Modal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [cookies] = useCookies(["choosedPerson"]);
  const gettedPersonList = useSelector(selectPersonList);

  const dispatchPersonalParams = (info: PersonListProps) => {
    dispatch(editPersonCharacters(editPersonParams(gettedPersonList, info)));
  };
  return (
    <Controller
      choosedPerson={cookies.choosedPerson}
      dispatchPersonalParams={dispatchPersonalParams}
      gettedPersonList={gettedPersonList}
    />
  );
};
export default Modal;
