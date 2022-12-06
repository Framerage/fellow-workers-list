import React from "react";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {deletePersonFromList} from "store/personList/actions";
import {
  selectIsPromiseReady,
  selectPersonList,
} from "store/personList/selectors";
import {AppDispatch} from "types/appTypes";
import Controller from "./Controller";

const Model = () => {
  const dispatch = useDispatch<AppDispatch>();
  const gettedList = useSelector(selectPersonList);
  const isDataFetched = useSelector(selectIsPromiseReady);
  const [cookies] = useCookies(["choosedPerson"]);
  const onRemovePerson = (persId: string) => {
    dispatch(
      deletePersonFromList(
        gettedList.filter((el: {id: string}) => el.id !== persId),
      ),
    );
  };
  return (
    <Controller
      dispatch={dispatch}
      gettedList={gettedList}
      cookies={cookies.choosedPerson}
      isDataFetched={isDataFetched}
      onRemovePerson={onRemovePerson}
    />
  );
};
export default Model;