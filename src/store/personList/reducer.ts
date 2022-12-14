import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  deletePerson,
  editPersonMainCharacters,
  fetchPersonList,
} from "./actions";
import { ListStateProps } from "./types";

const initialStateList: ListStateProps = {
  personList: [
    // {
    //   name: "",
    //   age: NaN,
    //   id: NaN,
    //   location: "",
    //   job: "",
    //   gender: "",
    // },
  ],
};
export default createReducer(initialStateList, {
  [fetchPersonList.fulfilled.type]: (
    state,
    action: PayloadAction<ListStateProps["personList"]>
  ) => {
    state.personList = action.payload;
  },
  [deletePerson.type]: (
    state,
    action: PayloadAction<ListStateProps["personList"]>
  ) => {
    state.personList = action.payload;
  },
  [editPersonMainCharacters.type]: (
    state,
    action: PayloadAction<ListStateProps["personList"]>
  ) => {
    state.personList = action.payload;
  },
});
